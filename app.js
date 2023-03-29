function myfunction(){
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let pm = document.querySelector('.pm');
let month = document.querySelector('#month');
let day = document.querySelector('#day');
let year = document.querySelector('#year');

let ajkisdate = new Date();
let  ajkihours = ajkisdate.getHours();
let ajkiminutes = ajkisdate.getMinutes();
let ajkimonth = ajkisdate.getMonth();
let ajkiday = ajkisdate.getDay();
let ajkiyear = ajkisdate.getFullYear();

if (hours >= 12){
    pm.innerHTML = `AM`
}else {
    pm.innerHTML = "PM"
}

if (hours > 12){
    hours = hours - 12;
}
hours.textContent = ajkihours;
minutes.textContent = ajkiminutes;
month.textContent = ajkimonth;
year.textContent = ajkiyear;
}
setInterval(myfunction, 100)