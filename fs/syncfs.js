const fs =require('fs');


const path = require("path");


const filename = "test.text";
const filePath = path.join(__dirname, filename);
console.log(__dirname);
// const writeFile = fs.writeFileSync( 
//       filePath, 
//       "hellow world , updated",
//        "utf-8"
//       );



// console.log(writeFile);


// read file sync


const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile.toString());

// console.log(readFile);

const appendFile = fs.appendFileSync( 
            filePath, 
            "\nhellow world , updated data",
             "utf-8"
            );

            console.log(appendFile);


            // const fileDelete = fs.unlinkSync(filePath);
            // console.log(fileDelete);



            const newUpdatedFileName = "updateTest.txt";
            const newFilePath = path.join(__dirname, newUpdatedFileName);

            const fileRename = fs.renameSync(filePath,newFilePath);
            console.log(fileRename);