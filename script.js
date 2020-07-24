let box = document.getElementById("box");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let input = document.getElementById("input");
let button = document.getElementById("go");
let span = document.getElementById("span");
let option = document.getElementById("dropdown");
let num, output, h2;

let array = [
    "Be truthful, nature only sides with truth.",
    "Correction does much, but encouragement does more.",
    "A good laugh is sunshine in the house.",
    "Whenever people agree with me, I always feel I must be wrong.",
    "True friends stab you in the front.",
    "Experience is simply the name we give our mistakes."
];

function loadQuote() {
    h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(array[Math.floor(Math.random() * array.length)]));
    box.appendChild(h2);
    h2.style.fontFamily = "sans-serif";
}

function changeColor() {
    box.style.background = this.value;
    h2.style.color = "#0000FF";
    box.style.border = "5px solid #C70039";
    h2.style.fontFamily = "Geneva";
    h2.style.fontSize = "1.7em";
}

function convert() {
    if(input.value >= 0) {
        num = input.value;
    
        if(option.value === "kgs") {
            num = num*0.4536;
            output = num + " kilograms";
        }

        else {
            num = num*2.2046;
            output = num + " pounds";
        }
        span.innerHTML = output;
    }
}

window.addEventListener('load', loadQuote);
color1.addEventListener('click', changeColor);
color2.addEventListener('click', changeColor);
color3.addEventListener('click', changeColor);
color4.addEventListener('click', changeColor);
button.addEventListener("click", convert);


