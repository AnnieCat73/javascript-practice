const myBill = 25;
const tipPercent = 20;
const output = document.getElementById("output");

function tip (myBill, tipPercent) {
  const result = myBill * (tipPercent/100);
  return result;
}

const message = "The bill is $" + myBill + " and the tip is $" +tip(myBill, tipPercent);
output.innerHTML = message;


function greet () {
  const div = document.getElementById("div");
  div.innerText = "HELLO!"
}
greet();

function morning (firstName) {
  const div2 = document.getElementById("div2");
  div2.innerText = `Good morning, ${firstName}!`;
}
morning("Kevin");

const greet = function (person) {
  console.log(`Hi! ${person}!`);
};
greet("Annie");

function greetAgain (person1, person2) {
  console.log(`Hi again! ${person1} and ${person2}!`);
};
greetAgain("Polly", "Frank");

const div3 = document.getElementById("div3");
function showColor (color) {
  div3.innerText = `Your shirt is ${color}`;
};
showColor("blue");

function sum(a,b){
  return a + b;
};
console.log(`The sum is ${sum(5,10)}`);

const body = document.querySelector("body");
const div4 = document.createElement("div4");
body.appendChild(div4);
const multiply = function (num1, num2, num3) {
  return num1 + num2 + num3;
};
div4.innerHTML = multiply(5, 6, 7);

