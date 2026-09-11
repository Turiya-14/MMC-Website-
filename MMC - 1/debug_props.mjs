import { chromium } from 'playwright'
const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
const page = await context.newPage()
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)

const workCard = page.locator('a', { hasText: 'Nashik Municipal Corporation' }).first()
const img = workCard.locator('img')

const before = await img.evaluate((el) => {
  const cs = getComputedStyle(el)
  const r = el.getBoundingClientRect()
  return { scale: cs.scale, translate: cs.translate, w: r.width, h: r.height }
})
console.log('img before hover:', JSON.stringify(before))

await workCard.hover()
await page.waitForTimeout(600)
const after = await img.evaluate((el) => {
  const cs = getComputedStyle(el)
  const r = el.getBoundingClientRect()
  return { scale: cs.scale, translate: cs.translate, w: r.width, h: r.height }
})
console.log('img after hover: ', JSON.stringify(after))

const primaryBtn = page.locator('a', { hasText: 'Explore Our Work' }).first()
const btnBefore = await primaryBtn.evaluate((el) => ({ translate: getComputedStyle(el).translate, top: el.getBoundingClientRect().top }))
console.log('\nbutton before hover:', JSON.stringify(btnBefore))
await primaryBtn.hover()
await page.waitForTimeout(400)
const btnAfter = await primaryBtn.evaluate((el) => ({ translate: getComputedStyle(el).translate, top: el.getBoundingClientRect().top }))
console.log('button after hover: ', JSON.stringify(btnAfter))

await browser.close()
