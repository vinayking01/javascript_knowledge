// Step1 . fetch DOM elements

let citySearch = document.querySelector("form");
console.log(citySearch);
let cityname = document.querySelector(".city-name");
let timedate = document.querySelector(".time-date");
let weather_forcast = document.querySelector(".weather-forcast");
let weather_icon = document.querySelector(".weather-icon");
let weather_temp = document.querySelector(".weather-temp");
let min_temperature = document.querySelector(".min-temperature");
let max_temperature = document.querySelector(".max-temperature");

let feels_like = document.querySelector(".weather-feels-like");
let weather_humidity = document.querySelector(".weather-humidity")
let weather_wind = document.querySelector(".weather-wind");
let weather_pressure = document.querySelector(".weather-pressure");



let city  = "Pune"; // by default value

// Handle the city search
// when user pass the city
citySearch.addEventListener('submit', (e) => {
    e.preventDefault();  // to prevent by deafult submit
    // console.log("sds");
  
    let city_value = document.querySelector(".search-city");
    console.log(city_value.value);
    city = city_value.value;
  
    getweatherdata();
  
    city_value.value = "";
  });


// step 2 : - fetch Weather data - get your api key from the API weather after sign up
const getdateTime = (dt)=>{
const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
console.log(curDate);
// // const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  //   second: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);
console.log(formatter);

const formattedDate = formatter.format(curDate);
// console.log(formattedDate);

return formattedDate;
};



const getweatherdata = async ()=>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&enteryourapikey`;

    try{
        const res = await fetch(weatherUrl);
        const data = await res.json();
        console.log(data);


        const { main, name, weather, wind, sys, dt} = data; //The line const { main, name, weather, wind, sys, dt } = data; is using destructuring assignment in JavaScript to extract specific properties from an object called data
        
        const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' }); // this is additional part got from internattional 

        // city name edited
        cityname.innerHTML = `${name} ,${regionNamesInEnglish.of(`${sys.country}`)}`;
    
        // Date and time
        timedate.innerHTML = getdateTime(dt);

        // Weather forcast
        weather_forcast.innerHTML = `${weather[0].main}`;
        // icon
        weather_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" />`;


        // temperature 
        weather_temp.innerHTML = `${main.temp}&#176`;
        min_temperature.innerHTML = `Min: ${main.temp_min}&#176`;
        max_temperature.innerHTML = `Max: ${main.temp_max}&#176`;

        // feels like
        feels_like.innerHTML = `${main.feels_like}&#176`

        // humidity
        weather_humidity.innerHTML = `${main.humidity}&#176`;

        //wind
        weather_wind.innerHTML = `${wind.deg} m/s`;

        //weather-pressure
        weather_pressure.innerHTML = `${main.pressure} Hz`

    }
    catch(error)
    {
        console.log(error);
    }
}
getweatherdata();
