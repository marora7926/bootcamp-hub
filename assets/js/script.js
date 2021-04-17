// LIVE DATE AND TIME DISPLAY ELEMENT
// reference to important DOM custom elements
var timeDisplayEl = $('#currentDay');

// adding the current day, date and time
function displayTime (){
    var liveDay = moment().format('dddd');
    var liveDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(liveDay + ", " + liveDateTime + " AEDT");
}

// updating seconds every second
setInterval(displayTime, 1000);

// API for inspirational quotes
const url = "https://api.quotable.io/random";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = "Inspirational quote: " + data.content;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
 setInterval(generateQuote() ,1000); 

//  API for Weather
var owmAPI = "d6b4fd1efef85db37e2a3f3cd63bb491";
var currentCity = "Sydney";
var handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
var getCurrentConditions = (event) => {
   //  let city = $('#city').val();
   //  currentCity= $('#city').val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric" + "&appid=" + owmAPI;
    fetch(queryURL)
    .then(handleErrors)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        let currentWeatherIcon="https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        let currentWeatherHTML = `Current weather: ${response.main.temp}&#8451; <img src="${currentWeatherIcon}">`;
        $('#weatherForecast').html(currentWeatherHTML);
    })
}

getCurrentConditions();