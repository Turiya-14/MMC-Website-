const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const results = { desktop: [], mobile: [], errors: [], pageerrors: [], requestfailed: [] };

  async function run(viewport, tag, shots){
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    page.on('console', msg => { if (msg.type() === 'error') results.errors.push(tag + ': ' + msg.text()); });
    page.on('pageerror', err => results.pageerrors.push(tag + ': ' + err.message));
    page.on('requestfailed', req => results.requestfailed.push(tag + ': ' + req.url() + ' -> ' + (req.failure() && req.failure().errorText)));

    await page.goto('http://localhost:8080/index.html', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(5200); // let preloader finish + hero intro play

    for (const s of shots) {
      await page.evaluate(({ sel, frac }) => {
        const el = document.querySelector(sel);
        const top = el.getBoundingClientRect().top + window.scrollY;
        const target = frac === undefined ? top : top + el.offsetHeight * frac;
        window.scrollTo(0, target);
      }, s);
      await page.waitForTimeout(1000);
      const path = `/home/claude/mmc-site/test/${tag}-${s.name}.png`;
      await page.screenshot({ path });
      results[tag.startsWith('mobile') ? 'mobile' : 'desktop'].push(path);
    }

    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log(tag, 'scrollHeight:', scrollHeight);
    await context.close();
  }

  const shots = [
    { name: '0-hero', sel: '.hero', frac: 0 },
    { name: '1-manifesto-a', sel: '.manifesto', frac: 0.08 },
    { name: '2-manifesto-b', sel: '.manifesto', frac: 0.3 },
    { name: '3-manifesto-c', sel: '.manifesto', frac: 0.5 },
    { name: '4-manifesto-d', sel: '.manifesto', frac: 0.7 },
    { name: '5-manifesto-e', sel: '.manifesto', frac: 0.92 },
    { name: '6-showpiece-a', sel: '.showpiece', frac: 0.05 },
    { name: '7-showpiece-b', sel: '.showpiece', frac: 0.4 },
    { name: '8-showpiece-c', sel: '.showpiece', frac: 0.85 },
    { name: '9-services', sel: '.services', frac: 0.05 },
    { name: '9b-services-hover', sel: '.services', frac: 0.05 },
    { name: 'a-elections', sel: '.elections', frac: 0.1 },
    { name: 'b-work', sel: '.work', frac: 0.05 },
    { name: 'c-why', sel: '.why', frac: 0.05 },
    { name: 'd-latest', sel: '.latest', frac: 0.05 },
    { name: 'e-contact', sel: '.contact', frac: 0.05 },
  ];

  await run({ width: 1440, height: 900 }, 'desktop', shots);
  await run({ width: 390, height: 844 }, 'mobile', shots);

  await browser.close();

  console.log('--- console errors ---');
  console.log(results.errors.length ? results.errors.join('\n') : '(none)');
  console.log('--- page errors ---');
  console.log(results.pageerrors.length ? results.pageerrors.join('\n') : '(none)');
  console.log('--- failed requests ---');
  console.log(results.requestfailed.length ? results.requestfailed.join('\n') : '(none)');
})();
