const date = new Date();
console.log(date);

const currentMonth = date.getMonth();
const currentDay = date.getDay();
const currentDate = date.getDate();
const currentYear = date.getFullYear();

console.log(currentMonth); 
console.log(currentDay);
console.log(currentDate);
console.log(currentYear);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const title = document.getElementById("title");
title.innerHTML = "🌸 " + months[currentMonth] + " 🌸";


const habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function () {
    let habits = prompt("What's your habit?", habitTitle.innerHTML);
    if (habits.length == 0) {
        habitTitle.innerHTML = "Click to set your habit";
    } else {
        habitTitle.innerHTML = habits;
    }
}

const daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
const daysInTheMonth = daysInTheMonthList[currentMonth];

let daysCompleted = 0;
let totalDays = document.getElementById("totalDays");

let dayCount = 0;
let rowCount = 0;
let days = document.getElementsByClassName("days");

for(let i =0; i < days.length; i++) {
    let day = days[rowCount].getElementsByClassName("day");
    for (let j = 0; j < day.length; j++) {
        if(dayCount == currentDate -1){
            day[j].setAttribute("style", "color:rgb(239, 162, 189)");
            day[j].setAttribute("style", "border:2px solid black");
        }
    }
}

if (dayCount < daysInTheMonth) {
    day[j].innerHTML = dayCount + 1;
}