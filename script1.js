let input = document.getElementById("numbers");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let span5 = document.getElementById("span5");
let myArray;
let sum = 0, max = 0, min = 0, revArray = 0, avg = 0;

function inputLength() {
	return input.value.length;
}

function store() {
    sum = 0;
    myArray = input.value.split(',');
    myArray.forEach(element => {
        sum = sum + parseInt(element);
    });
    revArray = myArray.reverse();
    max = Math.max(...myArray);
    min = Math.min(...myArray);
    avg = sum/myArray.length;
    }


function keyUp() {
	if(inputLength() > 0) {
        store();
        span1.innerHTML = max;
        span2.innerHTML = min;
        span3.innerHTML = sum;
        span4.innerHTML = avg;
        span5.innerHTML = revArray;
    }
}

input.addEventListener("keyup", keyUp);

