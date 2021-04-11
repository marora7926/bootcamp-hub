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

// add click event --- MOHIT TO FIX THIS
// <button class="btn btn-block btn-info">Learn more</button>
// <a href="https://www.w3schools.com/html/default.asp" target="_blank"></a>
// CSS : https://www.w3schools.com/css/default.asp
// JS: https://www.w3schools.com/js/default.asp
// jQuery: https://www.w3schools.com/jquery/default.asp
// Bootstrap: https://www.w3schools.com/bootstrap4/default.asp
