//Functions

const myBill = 25;
const tipPercent = 20;
const output = document.getElementById('output');


const message = "The bill is $" + myBill + " and my tip is $" + tip(myBill, tipPercent);

function tip(mybill, tipPercent) {
  const result = mybill * tipPercent / 100;
  return result;
}

output.innerHTML = message;

//
function greet() {
  console.log("Hi!");
}
greet();

const greeting = document.getElementById("greeting");

//
function sayBye(name) {
  return `Bye ${name}!`;
}
console.log(sayBye("Frank"));
greeting.innerHTML = sayBye("Patsy");

//
const greetAgain = function (name) {
  console.log(`Hi ${name}!`);
}
greetAgain("Ben");
greetAgain("Tara");

//
const div2 = document.querySelector("#div2");
const showColor = function (color) {
  return `Your shirt color is ${color}`;
}
div2.innerText = showColor("red");

function sum(a, b) {
  return a + b;
}
console.log(`The sum of a and b is ${sum(5, 7)}!`)

const div3 = document.getElementById("div3");
function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
div3.innerHTML = add(4, 6, 10);

const div5 = document.querySelector("#div5");
function total(num) {
  const mealCost = 10;
  const total = mealCost + num;
  div5.innerHTML = total;
}
total(5);

const myCat = "Simon";
const div6 = document.getElementById("div6");
div6.innerText = `My cat's name is ${myCat}`;





