
/**
 * See https://github.com/Keyang/node-csvtojson
 * @type {string}
 */
const csv=require("csvtojson/v2");
const fs = require('fs');
const csvFilePath='./data/netflix_titles.csv';
const jsonFilePath='./data/netflix_titles.json';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{

    fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 2), 'utf8', () => {
      console.log(`See ${ jsonFilePath }`);
      process.exit(0);
    });


    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */
  })
