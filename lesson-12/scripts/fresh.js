const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"
getFruit(url);
async function getFruit(url){
    const result  = await fetch(url )
    const data = await result.json();
    displayFruit(data);
    btn.addEventListener('click', (e) =>{
        e.preventDefault();
        modal(data);
        reset();
    });
   
}

function displayFruit(datas){
    const select1 = document.querySelector('#fruit1')
    const select2 = document.querySelector('#fruit2')
    const select3 = document.querySelector('#fruit3')
    datas.forEach(data => {   
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        let option3 = document.createElement('option')
        let fruitName = data.name;     
        option1.setAttribute("value", fruitName);
        option2.setAttribute("value", fruitName);
        option3.setAttribute("value", fruitName);
        option1.textContent = fruitName;
        option2.textContent = fruitName;
        option3.textContent = fruitName;
        select1.appendChild(option1);
        select2.appendChild(option2);
        select3.appendChild(option3);
    });

}
const btn = document.querySelector("#submitBtn")

function reset() {
    const fname = document.getElementById('name')
    const em = document.getElementById('email')
    const phoneNumber = document.getElementById('phone')
    const note = document.getElementById('note')
    const select1 = document.getElementById('fruit1');
    const select2 = document.getElementById('fruit2');
    const select3 = document.getElementById('fruit3');
    fname.value ="";
    phoneNumber.value="";
    em.value = "";
    email.value = "";
    note.value = "";
    select1.value ="";
    select2.value ="";
    select3.value ="";
    
}
modal();
let counter = 0

function modal(datas){
    const total = document.querySelector('#total');
    const showModal = document.querySelector('.modal');
    const fname = document.getElementById('name').value;
    const em = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone').value;
    const note = document.getElementById('note').value;
    const select1 = document.getElementById('fruit1').value;
    const select2 = document.getElementById('fruit2').value;
    const select3 = document.getElementById('fruit3').value; 
    var fullName = localStorage.setItem('fname', fname);
    var email = localStorage.setItem('email', em);
    var number = localStorage.setItem('phone', phoneNumber);
    var text = localStorage.setItem('Text', note);
    var fruit1 = localStorage.setItem('fruit1', select1);
    var fruit2 = localStorage.setItem('fruit2', select2);
    var fruit3 = localStorage.setItem('fruit3', select3);  
    var fullName = localStorage.getItem('fname', fname);
    var email = localStorage.getItem('email', em);
    var number = localStorage.getItem('phone', phoneNumber);
    var text = localStorage.getItem('Text', note);
    var fruit1 = localStorage.getItem('fruit1', select1);
    var fruit2 = localStorage.getItem('fruit2', select2);
    var fruit3 = localStorage.getItem('fruit3', select3); 
    if ( fullName, number !== null && fullName, email, number !== "" ){
        const header = document.createElement('h3');
        const sects1 = document.createElement('div')
        const sects2 = document.createElement('div')
        sects2.classList.add("fruit-details")
        const sects3 = document.createElement('div')
        const innerSect1  = document.createElement('article')    
        const innerSect2  = document.createElement('article')
        const innerSect3  = document.createElement('article')

        const nameText = document.createElement('p');
        const phoneText = document.createElement('p');
        const someText = document.createElement('p');
        const emailText = document.createElement('p');
        const fruit1Text = document.createElement('p');
        const fruit2Text = document.createElement('p');
        const fruit3Text = document.createElement('p');
        const carb = document.createElement('p');
        const prot = document.createElement('p');
        const fat = document.createElement('p');
        const cal = document.createElement('p');
        const sug = document.createElement('p');
        const carb1 = document.createElement('p');
        const prot1 = document.createElement('p');
        const fat1 = document.createElement('p');
        const cal1 = document.createElement('p');
        const sug1 = document.createElement('p');
        const carb2 = document.createElement('p');
        const prot2 = document.createElement('p');
        const fat2 = document.createElement('p');
        const cal2 = document.createElement('p');
        const sug2 = document.createElement('p');
        const totalDrink = document.createElement('p');
        const butt = document.createElement('button')
        butt.classList.add('buton');
        butt.textContent = 'Close Page'
        header.textContent = "Data Summary";
        header.classList.add('head');
        nameText.innerHTML =`Full Name: ${fullName}`;
        emailText.innerHTML = ` Email Address:${email}`;
        someText.innerHTML = ` Message:${text}`;
        phoneText.innerHTML = ` Phone Number:${number}`;
        fruit1Text.innerHTML = ` Option1:${fruit1}`;
        fruit2Text.innerHTML = ` Option2:${fruit2}`;
        fruit3Text.innerHTML = ` Option3:${fruit3}`;
        let fruit1Total;
        let fruit2Total;
        let fruit3Total;

        datas.forEach(data=> {            
            if (fruit1 == data.name) {
                carb.innerHTML = `${fruit1} <br> Carborhydrate:  ${data.nutritions.carbohydrates}g`;
                prot.innerHTML = ` Protein:  ${data.nutritions.protein}g`;
                fat.innerHTML = ` Fat:  ${data.nutritions.fat}g`;
                sug.innerHTML = ` Sugar:  ${data.nutritions.sugar}g`
                cal.innerHTML = ` Calories:  ${data.nutritions.calories}g` 
                fruit1Total  =  data.nutritions.carbohydrates + data.nutritions.protein + data.nutritions.fat + data.nutritions.sugar +data.nutritions.calories;        
                              
            }
            if (fruit2 == data.name) {
                carb1.innerHTML = `${fruit2} <br> Carborhydrate:  ${data.nutritions.carbohydrates}g`;
                prot1.innerHTML = ` Protein:  ${data.nutritions.protein}g`;
                fat1.innerHTML = ` Fat:  ${data.nutritions.fat}g`;
                sug1.innerHTML = ` Sugar:  ${data.nutritions.sugar}g`
                cal1.innerHTML = ` Calories:  ${data.nutritions.calories}g`
                fruit2Total  =  data.nutritions.carbohydrates + data.nutritions.protein + data.nutritions.fat + data.nutritions.sugar +data.nutritions.calories;               
                              
            }
            if (fruit3 == data.name) {
                carb2.innerHTML = `${fruit3} <br> Carborhydrate:  ${data.nutritions.carbohydrates}g`;
                prot2.innerHTML = ` Protein:  ${data.nutritions.protein}g`;
                fat2.innerHTML = ` Fat:  ${data.nutritions.fat}g`;
                sug2.innerHTML = ` Sugar:  ${data.nutritions.sugar}g`
                cal2.innerHTML = ` Calories:  ${data.nutritions.calories}g`  
                fruit3Total  =  data.nutritions.carbohydrates + data.nutritions.protein + data.nutritions.fat + data.nutritions.sugar + data.nutritions.calories;             
                              
            }

        });

        const ttl = fruit1Total  + fruit2Total + fruit3Total .toFixed(1)
        totalDrink.innerHTML =`Your combined Nutritional Serving for your drink is ${ttl}g`
        sects1.appendChild(nameText);
        sects1.appendChild(phoneText);
        sects1.appendChild(emailText);
        innerSect1.appendChild(carb)
        innerSect1.appendChild(prot)
        innerSect1.appendChild(fat)
        innerSect1.appendChild(sug)
        innerSect1.appendChild(cal)
        innerSect2.appendChild(carb1)
        innerSect2.appendChild(prot1)
        innerSect2.appendChild(fat1)
        innerSect2.appendChild(sug1)
        innerSect2.appendChild(cal1)
        innerSect3.appendChild(carb2)
        innerSect3.appendChild(prot2)
        innerSect3.appendChild(fat2)
        innerSect3.appendChild(sug2)
        innerSect3.appendChild(cal2)
        sects2.appendChild(innerSect1)
        sects2.appendChild(innerSect2)
        sects2.appendChild(innerSect3)
        sects3.appendChild(totalDrink)
        sects3.appendChild(someText)



        showModal.appendChild(header);
        showModal.appendChild(sects1);
        showModal.appendChild(sects2);
        showModal.appendChild(sects3);
        
        showModal.appendChild(butt);
        showModal.classList.remove('closeModal')
        showModal.classList.add('showModal');
        butt.addEventListener('click', ()=>{
            showModal.classList.remove('showModal')
            showModal.classList.add('closeModal')
            showModal.innerHTML ="";

        });




        
    }
    counter++
    if (counter <= 0 ) {
    total.textContent =0;
        
    }
    else{
        total.textContent = counter;
    }

    

      

        
        
   
}
// function showMyDrink(){
//     showDrink.style.display="block";

//     if(isNaN(numberOfSpecialDrinks)){
//         window.localStorage.setItem("specialDrinks", 0);   
//         numberOfSpecialDrinks = window.localStorage.getItem("specialDrinks");
//     }
//     window.localStorage.setItem("specialDrinks", numberOfSpecialDrinks + 1);
// }