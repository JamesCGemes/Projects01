"use strict";

//walk through project on creating a digital clock.

function displayTime(){
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour -12;
        session = "PM";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    mins = (mins < 10) ? "0" + mins : mins;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = hour + ":" + mins + ":" + seconds + session;

    document.getElementById("DigitalClock").innerText = time;

    document.getElementById("DigitalClock").textContent = time;

    setInterval(displayTime, 1000);

}

displayTime();
