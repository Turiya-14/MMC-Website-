import { chromium } from 'playwright'

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
const page = await context.newPage()
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)

async function testPair(label, locatorText, inspectFn) {
  const link = page.locator('a', { hasText: locatorText }).first()
  const resting = await inspectFn(link)
  await link.hover()
  await page.waitForTimeout(500)
  const hovered = await inspectFn(link)
  await page.mouse.move(5, 5)
  await page.waitForTimeout(200)
  await link.focus()
  await page.waitForTimeout(500)
  const focused = await inspectFn(link)
  await link.blur()
  await page.waitForTimeout(200)

  console.log(`\n=== ${label} ===`)
  console.log('resting: ', JSON.stringify(resting))
  console.log('hover:   ', JSON.stringify(hovered))
  console.log('kb focus:', JSON.stringify(focused))
  const hoverChanged = JSON.stringify(resting) !== JSON.stringify(hovered)
  const focusMatchesHover = JSON.stringify(hovered) === JSON.stringify(focused)
  console.log(`hover changes resting state: ${hoverChanged}   focus state matches hover state: ${focusMatchesHover}`)
}

await testPair('MANDATES ROW: Brand Growth', 'Brand Growth', async (link) =>
  link.evaluate((el) => {
    const h = el.querySelector('h3')
    const desc = el.querySelector('p')
    return {
      titleColor: getComputedStyle(h).color,
      descHeight: Math.round(desc.getBoundingClientRect().height),
    }
  }),
)

await testPair('SELECTED WORK CARD: Nashik Municipal Corporation', 'Nashik Municipal Corporation', async (link) =>
  link.evaluate((el) => {
    const img = el.querySelector('img')
    const arrowSvg = el.querySelector('svg')
    return {
      imgScale: getComputedStyle(img).scale,
      arrowTranslate: getComputedStyle(arrowSvg).translate,
    }
  }),
)

await testPair('SECONDARY BUTTON: Start a Conversation', 'Start a Conversation', async (link) =>
  link.evaluate((el) => {
    const underline = el.querySelector('span span[aria-hidden="true"]')
    return {
      buttonTranslate: getComputedStyle(el).translate,
      underlineScale: underline ? getComputedStyle(underline).scale : null,
    }
  }),
)

await testPair('PRIMARY BUTTON: Explore Our Work', 'Explore Our Work', async (link) =>
  link.evaluate((el) => ({
    buttonTranslate: getComputedStyle(el).translate,
  })),
)

await browser.close()
console.log('\nDONE')
