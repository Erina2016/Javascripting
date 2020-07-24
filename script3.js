let clear = document.getElementById("clear");
let cap = document.getElementById("cap");
let sort = document.getElementById("sort");
let rev = document.getElementById("rev");
let strip = document.getElementById("strip");
let add = document.getElementById("add");
let shuffle = document.getElementById("shuffle");
let textarea = document.getElementById("text");
let arr;
let newArray = new Array();
let revArray = new Array();
let stripArr = new Array();

function makeArray() {
    arr = textarea.value.split('\n');
}

function clicked() {
    makeArray();
    arr.splice(0, arr.length);
    textarea.value = arr;
}

function added() {
    makeArray();
    let random = Math.floor(Math.random() * 10); 
    let newArr = arr.map(element => random + element);
    textarea.value = newArr.join("\n");
}

function shuffled() {
    makeArray();
    let currentIndex = arr.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  textarea.value = arr.join("\n");
}

function sorted() {
    makeArray();
    arr.sort();
    textarea.value = arr.join("\n");
}

function stripped() {
    makeArray();
    stripArr = arr.filter(element => element != "");
    stripArr = stripArr.map(element => element.trim());
    textarea.value = stripArr.join("\n");
}

function reversed() {
    makeArray();
    revArray = arr.map(element => element.split('').reverse().join(''));
    textarea.value = revArray.join("\n");
}

function capitalized() {
    textarea.classList.toggle("toggles");
}

clear.addEventListener("click", clicked);
add.addEventListener("click", added);
shuffle.addEventListener("click", shuffled);
sort.addEventListener("click", sorted);
strip.addEventListener("click", stripped);
rev.addEventListener("click", reversed);
cap.addEventListener("click", capitalized);




