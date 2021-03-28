const frase = document.getElementsByClassName("frase");
var x = "";

async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    x = await data.slip.advice;
    document.getElementById("frase").innerHTML = `<p>"${x}"</p>`
}
