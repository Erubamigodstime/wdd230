// const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"
// const link = "https://brotherblazzard.github.io/canvas-content/fruit.json"
var fruits = {};
getFruit(url);
async function getFruit(url){
    try{
        const result  = await fetch(url)
        if (result.ok) {
            const data = await result.json();
            console.log(data)
            const fruits = data["fruits"];
            fruits.forEach(displayFruit)
           

            
        }else{
            throw Error(await result.text());
        }
    }   
    catch(error){
        console.log(error);
    }
   
};

function displayFruit(data){
    let select1 = document.querySelector('#fruit1')
    let select2 = document.querySelector('#fruit2')
    let select3 = document.querySelector('#fruit3')
    
    let option1 = document.createElement('option')
    let option2 = document.createElement('option')
    let option3 = document.createElement('option')
    let fruitName = data.name;
    let carb = data.nutritions.carbohydrates
    let protein = data.nutritions.protein
    let fat = data.nutritions.fat
    let cal = data.nutritions.calories
    let sug = data.nutritions.sugar

    fruitTotal = (carb + protein + fat + cal + sug).toFixed(2);
    fruits[fruitName] = [carb, protein, fat, cal, sug, fruitTotal];


    
    option1.setAttribute("value", fruitName.toLowerCase());
    option2.setAttribute("value", fruitName);
    option3.setAttribute("value", fruitName);

    option1.textContent = fruitName;
    option2.textContent = fruitName;
    option3.textContent = fruitName;

    select1.appendChild(option1);
    select2.appendChild(option2);
    select3.appendChild(option3);
}

