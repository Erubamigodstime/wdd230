const list =document.querySelector("ul");
const input =document.querySelector("input");
const button = document.querySelector("button");

function myFunc() {
    const inputVal = input.value;
    input.value = '';
    const childList = document.createElement('li');
    const span = document.createElement('span');
    const Btn = document.createElement('button');

    childList.appendChild(span);
    span.textContent = inputVal;
    childList.appendChild(Btn);    
    Btn.innerHTML = '<strong> x </strong>'
    Btn.style.fontSize  = "30px";
    Btn.style.color = "#582F0E"    
    list.appendChild(childList);
    Btn.addEventListener('click', () => {list.removeChild(childList); });
    input.focus();
  
};
button.addEventListener('click', myFunc);