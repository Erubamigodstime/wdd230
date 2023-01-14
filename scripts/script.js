let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
let months = [
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
	"December"
];
const d = new Date();
const dayName = day[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${d.getDate()}/${monthName}/${year}`;
document.getElementById("currentdate").textContent = fulldate

const link  = document.querySelector("header")

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

link.addEventListener('mouseover', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    link.style.backgroundColor = rndCol;
  });

const head = document.querySelector("footer")
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

head.addEventListener('mouseover', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    head.style.backgroundColor = rndCol;
  });