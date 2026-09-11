import { chromium } from 'playwright'
const SCROT = 'C:/Users/Asus/AppData/Local/Temp/claude/c--Users-Asus-Desktop-MMC---Web-MMC---1/bd306e45-de2f-443c-b91e-5a1b1a813ce9/scratchpad/'

function srgbToLinear(c) {
  c = c / 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}
function relLum([r, g, b]) {
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b)
}
function contrast(rgb1, rgb2) {
  const l1 = relLum(rgb1), l2 = relLum(rgb2)
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1]
  return (hi + 0.05) / (lo + 0.05)
}
function parseRgb(str) {
  const m = str.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/)
  return m ? [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])] : null
}

// Resolves an (possibly semi-transparent) fg color composited over a bg
// color to final opaque sRGB 0-255, via canvas — which always rasterizes to
// standard sRGB and handles real alpha compositing, regardless of whether
// the CSS values were authored as rgb(), oklab(), color-mix(), etc.
async function resolveComposited(page, fgStr, bgStr) {
  return page.evaluate(
    ({ fg, bg }) => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, 1, 1)
      ctx.fillStyle = fg
      ctx.fillRect(0, 0, 1, 1)
      const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
      return [r, g, b]
    },
    { fg: fgStr, bg: bgStr },
  )
}

const browser = await chromium.launch()

// === Full-page color rhythm screenshot (reduced motion, so no pin complications) ===
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  const errors = []
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
  page.on('pageerror', (err) => errors.push(String(err)))
  await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${SCROT}full-page-rhythm.png`, fullPage: true })
  console.log('=== FULL PAGE SCREENSHOT ===')
  console.log(`console errors: ${errors.length ? JSON.stringify(errors) : 'none'}`)

  // === Contrast check using ACTUAL rendered computed colors ===
  const contrastChecks = await page.evaluate(() => {
    function bgOf(el) {
      let node = el
      while (node) {
        const bg = getComputedStyle(node).backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg
        node = node.parentElement
      }
      return 'rgb(255,255,255)'
    }
    const targets = [
      { label: 'Selected Work heading', sel: 'section.bg-navy h2' },
      { label: 'Selected Work featured title', sel: 'section.bg-navy h3' },
      { label: 'Selected Work featured copy', sel: 'section.bg-navy p.mt-4' },
      { label: 'Selected Work category label', sel: 'section.bg-navy span.text-orange' },
      { label: 'Closing CTA heading', sel: 'section.bg-navy h2.font-display' },
    ]
    return targets.map((t) => {
      const el = document.querySelector(t.sel)
      if (!el) return { ...t, found: false }
      const color = getComputedStyle(el).color
      const bg = bgOf(el.parentElement)
      return { ...t, found: true, color, bg }
    })
  })

  console.log('\n=== CONTRAST (composited to sRGB via canvas, so oklab/color-mix alpha values are handled correctly) ===')
  for (const c of contrastChecks) {
    if (!c.found) { console.log(`${c.label}: NOT FOUND (selector: ${c.sel})`); continue }
    const fgOnBg = await resolveComposited(page, c.color, c.bg)
    const bgResolved = await resolveComposited(page, c.bg, c.bg)
    const ratio = contrast(fgOnBg, bgResolved)
    console.log(`${c.label}: fg-on-bg resolved=rgb(${fgOnBg}) bg=rgb(${bgResolved})  ratio=${ratio.toFixed(2)}:1  AA-normal(>=4.5)=${ratio >= 4.5 ? 'PASS' : 'FAIL'}`)
  }

  await context.close()
}

await browser.close()
console.log('\nDONE')
