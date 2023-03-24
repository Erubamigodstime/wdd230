const  options = {dateStyle: "full"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('en-US',options)

const  opts = {dateStyle: "full"};
document.getElementById("date").textContent = new Date().toLocaleDateString('en-US',opts)

function toggleMenu() {
    document.getElementById("navLink").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");


    
}

const button = document.getElementById('hamburger');
button.onclick = toggleMenu;

console.log("it is working")

function getDate(){
	let now = new Date();
	let today = new Intl.DateTimeFormat("en-UK", {
		dateStyle: "full"
	}).format(now);
	document.getElementsByClassName("show-date")[0].innerHTML= today;
}

function toggleMenu(){
	document.getElementsByClassName("links")[0].classList.toggle("responsive");
}

const body = document.body
function getEvent(){
	let now = new Date();
	const day = now.getDay()
	if (day == 1 || day== 2){       
        
        console.log("today is monday");

            banner=document.querySelector('.banner');
            const text = document.createElement('p');
            text.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
            text.style.backGrocolor= "black";
            text.style.backgroundColor="pink";            
            text.style.padding = "25px";
            text.style.textAlign = "center";
            banner.appendChild(text);	
    }
}
getEvent();

