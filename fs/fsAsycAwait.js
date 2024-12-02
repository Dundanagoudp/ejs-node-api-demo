const fs =require("fs/promises");
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

// const writeFile = async()=>{
//       try {
//           await  fs.writeFile(filePath, "data will created","utf-8")
//           console.log("file created successfully");
//       } catch (error) {
//            console.error(error); 
//       }
// }

// writeFile();


// read file

// const readFile = async()=>{
//     try {
//       const data =  await  fs.readFile(filePath,"utf-8");
//         console.log(data);
//     } catch (error) {
//          console.error(error); 
//     }
// }

// readFile();

// updated file

// const appendFile = async()=>{
//     try {
//       await  fs.appendFile(filePath, "\nthis updated data ","utf-8");
//         console.log("file is updated successfully");
//     } catch (error) {
//          console.error(error); 
//     }
// }

// appendFile();


// delete file

// const unlink = async()=>{
//     try {
//       await  fs.unlink(filePath);
//         console.log("file is deleted successfully");
//     } catch (error) {
//          console.error(error); 
//     }
// }

// unlink();