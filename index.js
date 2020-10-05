const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.polovniautomobili.com/auto-oglasi/pretraga?brand=audi&price_to=&year_from=&year_to=&showOldNew=all&submit_1=&without_price=1');
  const title = await page.evaluate(() => document.querySelector('h1').textContent);
  console.log(title, ' <= Title of the searched car')


   const carsTitles = await page.evaluate(() => Array.from(document.querySelectorAll('a.ga-title')).map(carTitle => {
    return carTitle.textContent.trim().replace(/\n|\t|\\/g,  '')

}))
    console.log(carsTitles, ' <= List of all car titles')


  await browser.close(title);
})();