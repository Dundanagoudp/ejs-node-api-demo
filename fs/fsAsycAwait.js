const fs =require("fs");
const path = require("path");

const filename = "fsAsycAwait.text";
const filePath = path.join(__dirname, filename);

//  data read

// const file = __dirname;

// fs.promises
// .readdir(file)
// .then((data) => console.log(data))
// .catch((error)=> console.log(error));


// const readFolder= async()=>{
// try {
//  const data = await  fs.promises.readdir(file);
//     console.log(data);
// } catch (error) {
//       console.log(error);
      
// }
// }
// readFolder();

// write file

const writeFile = async()=>{
      try {
          await  fs.watchFile(filePath, "data will created","utf-8")
          console.log("file created successfully");
      } catch (error) {
           console.error(error); 
      }
}

writeFile();