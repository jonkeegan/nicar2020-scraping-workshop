const fs = require("fs");
const puppeteer = require("puppeteer");

// Here's the page we want to scrape....
let the_url = "http://airquality.deq.louisiana.gov/Data/Site/CITYPARK/Date/2020-01-26";

async function init() {
  try {
    let browser = await puppeteer.launch({ headless: false });

    // set up puppeteer browser obj....
    let page = await browser.newPage();

    await page.goto(the_url);

    /** These are human behaviors if needed */
    await page.waitFor(2000); // pause
    await page.mouse.move(500, 200); // move mouse
    await page.keyboard.down("PageDown");
    await page.setViewport({ width: 2150, height: 1620 });

    let html = await page.content();

    // save the HTML
    fs.writeFileSync("CITYPARK_2020-01-26.html", html + "\n");

    // save the screenshots
    await page.screenshot({
      path: "CITYPARK_2020-01-26.png",
      fullPage: true
    });

    // close the page
    await page.close();
    await browser.close();

    return true;
  } catch (err) {
    console.log("[capture] start - Could not execute: " +,err);
  }
}
init();
