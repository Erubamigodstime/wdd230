

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


  const year = new Date().getDay();
  const last_updated_element = document.querySelector("#currentdate");
  last_updated_element.innerHTML = `Last Updated: ${document.lastModified}`;


let windowSize = document.querySelector('#windowSize');
window.addEventListener('resize',() => {    
    windowSize.innerText = `Window width: ${window.innerWidth}px`;
});


