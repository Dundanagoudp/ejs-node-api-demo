const { error } = require("console");
const fs =require("fs");
const path = require("path");

const filename = "fsprimises.text";
const filePath = path.join(__dirname, filename);

// data read

// const file = __dirname;
// fs.promises.readdir(file)
// .then((data) => console.log(data))
// .catch((error)=> console.log(error));



// const fileName1 = __dirname;
// fs.promises.readdir(fileName1)
// .then((data) => console.log(data))
// .catch((error)=> console.log(error));

// write file
// fs.promises.writeFile(filePath, "this is intials data", "utf-8")
// .then(console.log("file created"))
// .catch((error)=> console.log(error));

//  read file



fs.promises
.readFile(filePath, "utf-8")
.then((data)=>console.log(data))
.catch((error)=> console.error("error reading file :", error));

