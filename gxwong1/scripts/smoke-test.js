const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const url = process.env.URL || 'http://localhost:3002/';
  const outDir = path.resolve(__dirname, '../tmp');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  try {
    console.log('Opening', url);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Wait for header
    await page.waitForSelector('.site-header', { timeout: 10000 });
    const headerText = await page.locator('.site-logo').innerText().catch(() => '');
    console.log('Header text:', headerText);

    // Screenshot header
    const headerEl = await page.$('.site-header');
    if (!headerEl) throw new Error('Header element not found');
    await headerEl.screenshot({ path: path.join(outDir, 'header.png') });
    console.log('Saved header screenshot -> tmp/header.png');

    // Inject an input element with class 'input' to verify computed styles from globals.css
    const result = await page.evaluate(() => {
      const input = document.createElement('input');
      input.className = 'input smoke-input';
      input.setAttribute('placeholder', 'smoke-test');
      document.body.appendChild(input);
      const cs = getComputedStyle(input);
      const props = {
        borderRadius: cs.borderRadius,
        borderColor: cs.borderColor,
        backgroundColor: cs.backgroundColor,
        paddingTop: cs.paddingTop,
        paddingLeft: cs.paddingLeft,
      };
      // keep element in DOM for screenshot
      return props;
    });

    console.log('Computed input styles:', result);

    // Screenshot the input element
    const inputEl = await page.$('input.smoke-input');
    if (!inputEl) throw new Error('Injected input not found for screenshot');
    await inputEl.screenshot({ path: path.join(outDir, 'input.png') });
    console.log('Saved input screenshot -> tmp/input.png');

    await browser.close();
    console.log('SMOKE TEST SUCCESS');
    process.exit(0);
  } catch (err) {
    console.error('SMOKE TEST FAILED:', err && err.message ? err.message : err);
    try { await browser.close(); } catch (e) {}
    process.exit(1);
  }
})();
