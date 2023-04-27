const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");

const currentDay = new Date().getDate();
//console.log(currentDay);

const ex = new Date( `April ${currentDay + 1} 2023 09:30:00`);




updateCountDownTime();
setInterval(updateCountDownTime, 1000);





/* FUNCTIONS */

function updateCountDownTime(){
    const currentTime = new Date();
    const diff = ex - currentTime;
    //console.log(diff);

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    //console.log(d);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    //console.log(h);
    const m = Math.floor(diff / 1000 / 60) % 60;
    //console.log(m);
    const s = Math.floor(diff / 1000) % 60;
    //console.log(s);

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerHTML = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerHTML = s < 10 ? '0' + s : s;

}

