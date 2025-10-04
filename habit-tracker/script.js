const date = new Date();
console.log(date);

const currentMonth = date.getMonth();
const currentDay = date.getDay();
const currentDate = date.getDate();
const currentYear = date.getFullYear();

console.log("The current month is " + currentMonth); 
console.log("The current weekday is " + currentDay);
console.log("The current date is " + currentDate);
console.log("The current year is " + currentYear);

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

const daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const daysInThisMonth = daysInTheMonthList[currentMonth];

let daysCompleted = 0;
let totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/" + daysInThisMonth;

// Calendar Days

let dayCount = 0;
let rowCount = 0;
let days = document.getElementsByClassName("days");
for(let i = 0; i < days.length; i++) {
    let day = days[rowCount].getElementsByClassName("day");
    for (let j = 0; j < day.length; j++) {
        if(dayCount == currentDate -1){
            day[j].setAttribute("style", "color:rgb(239, 162, 189)");
            day[j].setAttribute("style", "border:2px solid black");
        }
        
        if (dayCount < daysInThisMonth) {
            day[j].innerHTML = dayCount + 1;
            day[j].setAttribute("id", "day" + (dayCount + 1));
            dayCount++;
            } else {
                day[j].innerHTML = "";
                day[j].setAttribute("style", "background-color:white");
            }
    }
    rowCount++;
}


