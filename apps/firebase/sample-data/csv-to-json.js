/**
 * See https://github.com/Keyang/node-csvtojson
 * @type {string}
 */
const csv = require('csvtojson/v2');
const fs = require('fs');
const csvFilePath = './data/netflix_titles.csv';
const jsonFilePath = './data/netflix_titles.json';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    const parsed = jsonObj.map((title) => {
      return {
        ...title,
        show_id: parseInt(title.show_id, 10),
        release_year: parseInt(title.release_year, 10),
        duration: parseInt(title.duration, 10),
      };
    });

    fs.writeFile(jsonFilePath, JSON.stringify(parsed, null, 2), 'utf8', () => {
      console.log(`See ${jsonFilePath}`);
      process.exit(0);
    });

    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */
  });
