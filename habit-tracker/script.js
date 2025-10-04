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

let completed = new Array(31);
for(let i = 0; i < dayCount; i++) {
    let tempString = "" + (currentMonth + 1) + "-" + (i + 1) + currentYear;
    console.log("storing date: " + tempString);
    let tempDay = localStorage.getItem(tempString);
    console.log(tempDay);

    if(tempDay == null || tempDay == "false"){
        localStorage.setItem(tempString, "false");
    }  else if(tempDay == "true") {
        daysCompleted++;
    }
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}

console.log("completed array: " + completed);
console.log("total days completed: " + daysCompleted);

for (let i = 0; i < currentDate; i++) {
    let tempString = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    console.log(tempString);
    let chosenDay = localStorage.getItem(tempString);
    console.log(i + 1 + ": " + chosenDay);
    let chosenDayDiv = document.getElementById("day" + (i + 1));
    if (chosenDay === "true") {
        chosenDayDiv.style.backgroundColor = "rgb(239, 162, 189)";
    } else if (chosenDay === "false") {
        chosenDayDiv.style.backgroundColor = "white";
    }
}

let dayDivs = document.querySelectorAll(".day");
for (let i = 0; i < currentDate; i++) {
    dayDivs[i].onclick = function(e) {
        let num = e.target.innerText;
        let selectedDate = document.getElementById(e.target.id);
        let storageString = "" + (currentMonth + 1) + "-" + num + "-" + currentYear;

        if (localStorage.getItem(storageString) === "false") {
            selectedDate.style.backgroundColor = "rgb(239, 162, 189)";
            localStorage.setItem(storageString, true);
            daysCompleted++;
        } else if (localStorage.getItem(storageString) === "true") {
            selectedDate.style.backgroundColor = "white";
            localStorage.setItem(storageString, false);
            daysCompleted--;
        } 

        totalDays.innerHTML = daysCompleted + "/" + dayCount;
        console.log(daysCompleted, currentDate);
        if (daysCompleted === currentDate) {
            alert("Great Progress!");
        }
    }
}

let resetButton = document.getElementById("resetButton");
resetButton.onclick = function() {
    for (let i = 0; i < dayCount; i++) {
        let tempStrings = "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
        console.log(tempStrings);
        localStorage.setItem(tempStrings, "false");
        let curDay = document.getElementById("day" + (i + 1));
        curDay.style.backgroundColor = "white";
    }
    daysCompleted = 0;
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
} 