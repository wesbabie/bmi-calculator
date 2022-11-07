const m = document.querySelector("#height");
const kg = document.querySelector("#mass");
const btn = document.querySelector("button")
const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    const a = document.forms['myForm']['mass'].value
    const b = document.forms["myForm"]["height"].value
    const bmi = a/(b*b);
    document.querySelector('#answer').innerHTML=Math.round((bmi+Number.EPSILON)*100)/100+"kg/m^2"

    e.preventDefault();
})

const date = new Date()
const newDate = date.getFullYear();

document.querySelector("#copyright").innerHTML="made with 💘 by Odunayo &copy;"+newDate