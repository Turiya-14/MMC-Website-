import { chromium } from 'playwright'
const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
const page = await context.newPage()
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)

const link = page.locator('a', { hasText: 'Brand Growth' }).first()
await link.hover()
await page.waitForTimeout(400)

const info = await page.evaluate(() => {
  const hovered = document.querySelector(':hover')
  const allHovered = []
  let el = document.elementFromPoint(window.innerWidth/2, 0) // dummy
  return {
    activeHoverChain: (() => {
      const chain = []
      let node = document.body
      // walk the :hover chain manually is hard; instead check the link directly
      return chain
    })(),
  }
})

// Simpler: directly check computed style + matches(':hover') on the link
const matches = await link.evaluate((el) => ({
  matchesHover: el.matches(':hover'),
  classListHasGroup: el.classList.contains('group'),
  h3Color: getComputedStyle(el.querySelector('h3')).color,
  boundingBox: el.getBoundingClientRect().toJSON ? null : {
    top: el.getBoundingClientRect().top, left: el.getBoundingClientRect().left,
    width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height
  },
}))
console.log(JSON.stringify(matches, null, 2))

await browser.close()
