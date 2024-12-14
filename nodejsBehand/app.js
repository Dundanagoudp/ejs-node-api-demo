const fs = require("fs");

// Synchronous task
const data = fs.readFileSync("file.txt", "utf-8");
console.log("sync", data);


//  Another synchronous task


//  async tasks

fs.readFile("file.txt", "utf-8" , (err,data)=>{
      if(err) throw err;
      console.log(data);
});

console.log("stat");

console.log("end");
