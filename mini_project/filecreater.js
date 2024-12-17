//  1: enetre the file name
//  2: enetre the content

import readFile from "readline"
import fs from "fs";
import { error } from "console";

const rl = readFile.createInterface({
      input: process.stdin,
      output: process.stdout
});

// file creation

const fileCreation=()=>{
      rl.question('Enter your file name:',(filename)=>{
            rl.question("Enter the conent for your file:",(content)=>{
                  fs.writeFile(`${filename}.txt`, content, (error)=>{
                        if(error){
                              console.log(`error writing the file:, ${error.message}`);
                        }else{
                              console.log(`file "${filename}.txt"`)
                        }
                        rl.close();
                  })                  
            })
      })
}

fileCreation();