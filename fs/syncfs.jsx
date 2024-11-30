const fs =require('fs');

const path = require("path");


const filename = "test.text";4
const filePath = path.join(__dirname, filename);
console.log(__dirname);
const writeFile = fs.writeFileSync( 
      filePath, 
      "hellow world",
       "utf-8"

      );

console.log(writeFile);