import { chromium } from 'playwright'
const SCROT = 'C:/Users/Asus/AppData/Local/Temp/claude/c--Users-Asus-Desktop-MMC---Web-MMC---1/bd306e45-de2f-443c-b91e-5a1b1a813ce9/scratchpad/'

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
const page = await context.newPage()
const errors = []
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
page.on('pageerror', (err) => errors.push(String(err)))
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)

async function inspectMandateRow() {
  const row = await page.$('text=Brand Growth')
  const link = await row.evaluateHandle((el) => el.closest('a'))
  return link.evaluate((el) => {
    const desc = el.querySelector('p');
    const underline = el.querySelectorAll('span')[1]; // the absolute underline span
    const arrow = el.querySelector('svg')
    return {
      titleColor: getComputedStyle(el.querySelector('h3')).color,
      descHeight: Math.round(desc.getBoundingClientRect().height),
      underlineTransform: underline ? getComputedStyle(underline).transform : null,
      arrowTransform: arrow ? getComputedStyle(arrow).transform : null,
    }
  })
}

console.log('=== MANDATES ROW: resting state ===')
console.log(JSON.stringify(await inspectMandateRow()))

// hover
const rowEl = await page.$('a:has-text("Brand Growth")')
const box = await rowEl.boundingBox()
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
await page.waitForTimeout(400)
console.log('\n=== MANDATES ROW: MOUSE HOVER ===')
console.log(JSON.stringify(await inspectMandateRow()))
await page.screenshot({ path: `${SCROT}mandate-hover.png`, clip: { x: 0, y: box.y - 20, width: 1440, height: box.height + 60 } })

// move mouse away, then tab to it via keyboard
await page.mouse.move(10, 10)
await page.waitForTimeout(200)
// Tab from the top of the page repeatedly until we reach the Brand Growth link
await page.evaluate(() => window.scrollTo(0, 0))
let found = false
for (let i = 0; i < 30; i++) {
  await page.keyboard.press('Tab')
  const activeText = await page.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 60))
  if (activeText && activeText.includes('Brand Growth')) { found = true; break }
}
console.log(`\nreached "Brand Growth" link via Tab: ${found}`)
await page.waitForTimeout(400)
console.log('=== MANDATES ROW: KEYBOARD FOCUS ===')
console.log(JSON.stringify(await inspectMandateRow()))
const box2 = await rowEl.boundingBox()
await page.screenshot({ path: `${SCROT}mandate-focus.png`, clip: { x: 0, y: box2.y - 20, width: 1440, height: box2.height + 60 } })

console.log(`\nconsole errors so far: ${errors.length ? JSON.stringify(errors) : 'none'}`)
await context.close()
await browser.close()
console.log('DONE')
