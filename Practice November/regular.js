/*var str = "Hi, here's some text. Hi again. Also, hi.";
var pattern = /hi/ig;

var result = str.match(pattern);

console.log(result);
//or shorter
var str = "Hi, here's some text. Hi again. Also, hi.";
var result = str.match(/hi/ig);

console.log(result);

var str = "Hi, here's some text. Hi again. Also, hi.";

if(str.match(/hi/i)){
  console.log('We found it.');
}
else{
  console.log('We did not find it.');
}

var str = "Hi, here's some text. Hi again. Also, hi.";
var result = str.replace(/hi/gi, 'BYE');

console.log(result);

var str = "Hi, here's some text. Hi again. Also, hi.";

var result = str.replace(/hi/gi, function(currentValue){
    if(currentValue==='Hi'){ return 'Bye'; }
    else{ return 'bye'; }
});

console.log(result);


const str = "Hi, here's some text. Hi again. Also, hi.";
const result = str.match(/hi/gi);
console.log(result);

const str1 = "taht taht taht taht taht That!"
const correct = str1.replace(/taht/gi, "that");


const input = document.getElementById("text");
const btn = document.getElementById("btn");
const div = document.querySelector(".div");

var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";




btn.addEventListener("click", function () {
  validateEmail(input);
});

function validateEmail(input) {
  if (input.value.match(pattern)) {
    div.innerText = "Valid email";
    return true;
  } else {
    div.innerText = "Invalid email";
    return false;
  }
}

const str = "taht taht That taht taht";
const result = str.replace(/taht/gi, function (currentValue) {
  if (currentValue === "taht") {
    return "that";
  } else {
    return "That";
  }
});

console.log(result);*/

const url = window.location.href;
console.log(url)

var pattern = /.html/ig;
const result = url.match(pattern);
console.log(result)

const input = document.getElementById("text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  getToPage(input);
});

function getToPage(input) {
  if (input.value.match("business")) {
    window.location.href = "http://www.google.com/business";
  } else {
    window.location.href = "http://www.google.com";
  }
}
