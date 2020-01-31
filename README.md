## ⚜️ NICAR 2020 ⚜️ -  Scraping with Puppeteer
### @jonkeegan / March 5, 2020 - New Orleans, LA
Scraping with Puppeteer example

This is a VERY simple example of how to scrape a webpage with Puppeteer, then extract some data.

The site we'll be scraping is Louisiana's Air Monitoring Data for [New Orleans City Park](https://www.google.com/maps/place/City+Park/@29.9933929,-90.1003796,17z/data=!3m1!4b1!4m5!3m4!1s0x8620af1590d11e91:0x85b42a0bfac471a9!8m2!3d29.9933929!4d-90.0981909), which can be found here:
http://airquality.deq.louisiana.gov/Data/Site/CITYPARK/Date/2020-01-26

This page publishes hourly air quality data for a number of locations across the state. We'll be looking at New Orleans City Park's data.



## The data

- **TIME** is the hour when the data was collected
- **ITEMP** is the temperature in degrees celcius
- **PM10** describes inhalable particles, with diameters that are generally 10 micrometers and smaller.
- **PM2.5** describes fine inhalable particles, with diameters that are generally 2.5 micrometers and smaller.
- **WDIR** is the wind direction in degrees
- **WSP** is the wind speed in miles per hour
 
 *Source for key descriptions: https://www.epa.gov/air-trends*
## Requirements

This runs on [Node.js](https://nodejs.org/en/).

Make sure you have `node.js` installed. On the Mac, you can do this quickly with [Homebrew](https://brew.sh/).

```
brew install node
```
You can find instructions for [installing on Windows / Linux here](https://nodejs.org/en/download/package-manager/).

## Installation

To run this demo, first clone this repo:

```
git clone https://github.com/jonkeegan/nicar2020-scraping-workshop.git
```

Then move into that directory you just downloaded.
Now we'll install the required Node packages (We're using [Puppeteer](https://github.com/puppeteer/puppeteer), [Cheerio](https://cheerio.js.org/) and [html-table-to-json](https://www.npmjs.com/package/html-table-to-json)).

```
npm install
```

## Running the scripts

The first script captures the webpage we are collecting. Both the HTML and a screenshot.

To run this first script:

```
node capture.js
```

This will grab one day's full set of data - for this example we will use 2020-01-26.

So you will see two new files upon successfully running this script:

```
CITYPARK_2020-01-26.html
CITYPARK_2020-01-26.png
```

That is the full HTML for the page containing yesterday's air quality data, and a screenshot fo the full, rendered webpage.

Next, we want to extract the data from this saved page, and save it as JSON.

```
node extract.js
```

You will now have a two new files that contain your data.
```
CITYPARK_2020-01-26.json
```

For a more full featured example, that contains some of the best practices I outlined in the workshop, please take a look at this other repo: 

[https://github.com/jonkeegan/nicar2020](https://github.com/jonkeegan/nicar2020).
