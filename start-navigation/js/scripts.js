
function toggleMenu() {
    document.getElementById("navLink").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");


    
}

const button = document.getElementById('hamburger');
button.onclick = toggleMenu;

console.log("it is working")