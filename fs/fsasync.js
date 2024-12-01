const { error } = require('console');
const fs =require('fs');


const path = require("path");


const filename = "fsAsycn.text";
const filePath = path.join(__dirname, filename);

// write file
fs.writeFile(filePath, "hello wordld", 'utf-8', (error)=>{
   if(error) console.log(error);  
   else console.log("file created"); 
})


// read file

// fs.readFile(filePath,  (error, data)=>{
//          if(error) console.log(error);  
//          else console.log(data.toString()); 
//       });
      
// upadted file

// fs.appendFile(filePath , "\nhello upadated", (error)=>{
//       if(error) console.error(error);  
//       else console.log("file upaded"); 
// })


// deled file

// fs.unlink(filePath , (error)=>{
//       if(error) console.error(error);  
//       else console.log("file is deleted"); 
// })