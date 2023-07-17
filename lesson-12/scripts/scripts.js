const hamburger = document.querySelector('#hamburger');
const navLink = document.querySelector('#navLink');

function toggleMenu() {
    navLink.classList.toggle("click");
    hamburger.classList.toggle("click");
    
}
hamburger.onclick = toggleMenu;

function insertFooter(){
	let mod = document.lastModified;
	document.getElementsByClassName("footer-text")[0].innerHTML = "bountifulfoods.com &copy; 2023 .:|:. Erubami Godstime .:|:. WDD230 .:|:. Last Updated:" + mod +"<br> Km. 23, Carlsbald, Carlifornia, USA.:|:. +1 00000220.:|:info@bountifulfoods.com";
}

insertFooter();