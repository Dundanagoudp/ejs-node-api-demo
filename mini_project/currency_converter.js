import https from "https";
import readline from "readline";
import chalk  from "chalk";
import { inflateRaw } from "zlib";

const rl = readline.createInterface({
      input:process.stdin,
      output:process.stdout
});


const apiKey = 'da1a356f84df429daffed47e';
const url =`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


const convertCurrency =(amount ,rate)=>{
      return (amount * rate).toFixed(2);
}
      
      
      
      https.get(url, (res)=>{
            let data = "";
            res.on('data',(chunk)=>{
                  data += chunk;
            });
            res.on("end",()=>{
              const rates = JSON.parse(data).conversion_rates;   
            


              rl.question("Enter the amount in USD:",(amount)=>{
                  rl.question("Enter the target currency (e.g , INR,EUR,NPR):",(currency)=>{
                        const rate = rates[currency.toUpperCase()];
                        console.log(amount,rate ,currency);
                        if(rate){
                              console.log(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency} `)
                        } else{
                              console.log(`Invalid Currency Code`);
                        }
                        rl.close();
                  })

              })
            })
      });


