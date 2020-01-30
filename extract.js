const fs = require("fs"); // this is for dealing with the file system...reading writing etc. 
const cheerio = require('cheerio'); // cheerio builds a jQuery compatible DOM for you to accesss with jQuery style selectors
const HtmlTableToJson = require('html-table-to-json');

// Here's the local file we want to parse....
let the_url = "http://airquality.deq.louisiana.gov/Data/Site/CITYPARK/Date/2020-01-26";
const the_file = "CITYPARK_2020-01-26.html";

async function init() {
  try {
    console.log("Parsing data from "+the_file+"....");

    // this loads the DOM of the saved HTML file in a jQuery friendly format, so we can use familiar '$' style selectors. 
    let $ = cheerio.load(fs.readFileSync(the_file)); 

    // isolate the HTML of the main data table using it's selector...
    let the_table = $('div.site_data table').html();

    // regex away the weird whitespace and newlines out of the table's HTML...
    the_table = the_table.replace(/(\s|\r\n|\n|\r)/gm,"");

    //use the `html-table-to-json` module magically transform the HTML of the table to JSON...
    const jsonTables = HtmlTableToJson.parse("`<table>"+the_table+"</table>`");

    // check the results...
    console.log(jsonTables.results);

    // save some contextual metadata about this collection...
    let context = {
        'collection_date': new Date().toISOString(),
        'collection_url': the_url
    }

    // now package up the metadata and the full data in one neat object...
    let return_data = {
        context: context,
        data: jsonTables.results
    }
    
    // // save JSON in a file...
    fs.writeFileSync("CITYPARK_2020-01-26.json", JSON.stringify(return_data));

  } catch (err) {
    console.log("[init] start - Could not execute: ", err);
    return false;
  }
}
init();