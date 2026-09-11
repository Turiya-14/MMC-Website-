import { chromium } from 'playwright'
const SCROT = 'C:/Users/Asus/AppData/Local/Temp/claude/c--Users-Asus-Desktop-MMC---Web-MMC---1/bd306e45-de2f-443c-b91e-5a1b1a813ce9/scratchpad/'

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
const page = await context.newPage()
await page.goto('http://localhost:5188/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)

async function inspect(linkLocator) {
  return linkLocator.evaluate((el) => {
    const h = el.querySelector('h3, h4')
    const desc = el.querySelector('p')
    const underline = el.querySelector('[aria-hidden="true"].bg-brand-blue, [aria-hidden="true"].bg-orange')
    const arrow = el.querySelector('svg')
    return {
      titleColor: h ? getComputedStyle(h).color : null,
      descRevealedHeight: desc ? Math.round(desc.getBoundingClientRect().height) : null,
      underlineScaleX: underline ? getComputedStyle(underline).transform : null,
      arrowTransform: arrow ? getComputedStyle(arrow).transform : null,
    }
  })
}

// ============ MANDATES ROW ============
console.log('=== MANDATES ROW ("Brand Growth") ===')
const mandateLink = page.locator('a', { hasText: 'Brand Growth' }).first()

console.log('resting:  ', JSON.stringify(await inspect(mandateLink)))
await mandateLink.hover()
await page.waitForTimeout(400)
console.log('hover:    ', JSON.stringify(await inspect(mandateLink)))
await mandateLink.screenshot({ path: `${SCROT}mandate-hover-v2.png` })

await page.mouse.move(5, 5)
await page.waitForTimeout(200)
console.log('unhovered:', JSON.stringify(await inspect(mandateLink)))

await mandateLink.focus()
await page.waitForTimeout(400)
console.log('kb focus: ', JSON.stringify(await inspect(mandateLink)))
await mandateLink.screenshot({ path: `${SCROT}mandate-focus-v2.png` })
await mandateLink.blur()

// ============ SELECTED WORK CARD ============
console.log('\n=== SELECTED WORK CARD ("Nashik Municipal Corporation") ===')
const workCard = page.locator('a', { hasText: 'Nashik Municipal Corporation' }).first()

async function inspectImage(linkLocator) {
  return linkLocator.evaluate((el) => {
    const img = el.querySelector('img')
    const arrow = el.querySelector('svg')
    return {
      imgTransform: img ? getComputedStyle(img).transform : null,
      arrowTransform: arrow ? getComputedStyle(arrow).transform : null,
    }
  })
}

console.log('resting:  ', JSON.stringify(await inspectImage(workCard)))
await workCard.hover()
await page.waitForTimeout(600)
console.log('hover:    ', JSON.stringify(await inspectImage(workCard)))
await workCard.screenshot({ path: `${SCROT}work-card-hover-v2.png` })

await page.mouse.move(5, 5)
await page.waitForTimeout(200)
await workCard.focus()
await page.waitForTimeout(600)
console.log('kb focus: ', JSON.stringify(await inspectImage(workCard)))
await workCard.screenshot({ path: `${SCROT}work-card-focus-v2.png` })
await workCard.blur()

// ============ BUTTONS ============
console.log('\n=== SECONDARY BUTTON ("Start a Conversation") ===')
const secondaryBtn = page.locator('a', { hasText: 'Start a Conversation' }).first()
async function inspectButton(linkLocator) {
  return linkLocator.evaluate((el) => {
    const underline = el.querySelector('[aria-hidden="true"]:not(svg)')
    return {
      linkTransform: getComputedStyle(el).transform,
      underlineTransform: underline ? getComputedStyle(underline).transform : null,
    }
  })
}
console.log('resting:  ', JSON.stringify(await inspectButton(secondaryBtn)))
await secondaryBtn.hover()
await page.waitForTimeout(400)
console.log('hover:    ', JSON.stringify(await inspectButton(secondaryBtn)))
await page.mouse.move(5, 5)
await page.waitForTimeout(200)
await secondaryBtn.focus()
await page.waitForTimeout(400)
console.log('kb focus: ', JSON.stringify(await inspectButton(secondaryBtn)))
await secondaryBtn.blur()

console.log('\n=== PRIMARY BUTTON ("Explore Our Work") ===')
const primaryBtn = page.locator('a', { hasText: 'Explore Our Work' }).first()
console.log('resting:  ', JSON.stringify(await inspectButton(primaryBtn)))
await primaryBtn.hover()
await page.waitForTimeout(400)
console.log('hover:    ', JSON.stringify(await inspectButton(primaryBtn)))
await page.mouse.move(5, 5)
await page.waitForTimeout(200)
await primaryBtn.focus()
await page.waitForTimeout(400)
console.log('kb focus: ', JSON.stringify(await inspectButton(primaryBtn)))

await browser.close()
console.log('\nDONE')
