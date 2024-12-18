

import https from "https";
import chalk from "chalk";
import { error } from "console";


const getJoke =()=>{
      const url ="https://official-joke-api.appspot.com/random_joke";
      let data ="";

      https.get(url, (res)=>{
            res.on('data', (chunk)=>{
                  data += chunk;
            });

            res.on('end', ()=>{
                  const joke =JSON.parse(data);
                  console.log(joke);
                  console.log(`here is random joke:`);
                  console.log(chalk.red(`${joke.setup}`));
                  console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));

            })

            res.on('error',(error)=>{
                  console.log(`error ftecing the joke , ${error.message}`);
            })
      })
}

getJoke();