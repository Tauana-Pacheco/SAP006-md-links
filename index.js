// const chalk = require('chalk');
const fs = require('fs');

function mdLinks(paths, options) {

  fs.readFile(file, 'utf8', (err, data) => {

    return new Promise((resolve, reject) => {
      const regex = /[\s\S]+(http[s]?[^)]*)/gm;
      const batata = data.match(regex);

      if (err) {
        reject(err);
      } else {
        console.log(batata)
      }
    })
  })
}


module.exports = mdLinks();
