var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");

//console.log(css);
//console.log(color1);
//console.log(color2);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    setCssTextContent();
}

function setCssTextContent() {
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setCssTextContent);