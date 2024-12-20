import readline from 'readline/promises';

// api key

const API_KEY = 'ca0dcc06dea7d64fd8a565c39496a2ca';
const BASE_URL ='https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
      input :process.stdin,
      output:process.stdout
});

const getWeather = async(city) =>{
      const  url =`${BASE_URL}?q=${city}&appid=${API_KEY}`;

      try {
          const res = await fetch(url);
           if(!res.ok){
            throw new Error('city not found . plz check the city name.');
           }
           const weatherData = await res.json();
           console.log('\nWeather Information:');
           console.log(`City: ${weatherData.name}`);
           console.log(`Temperature: ${weatherData.main.temp}°C`);
           console.log(`Description: ${weatherData.weather[0].description}`);
           console.log(`Humidity: ${weatherData.main.humidity}%`);
           console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);           
      } catch (error) {
            console.log(error);
            
      }
};

const city = await rl.question('Enter the city name to get its waether:');
await getWeather(city);
rl.close();