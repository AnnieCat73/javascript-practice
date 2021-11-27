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

const x = 5;
if (x !== 5) {
  console.log("true");
} else {
  console.log("false");
}

const div7 = document.getElementById("div7");

const checkAge = function (age) {
  if (age < 10) {
    div7.innerText = "No rollercoaster for you!";
  } else if (age >= 10) {
    div7.textContent = "You can go on the rollercoaster!";
  }
}
checkAge(9);

const div8 = document.getElementById("div8");
const skill = 91;
const firstName = "Falco";

if (skill > 90 && firstName === "Falco") {
  div8.innerHTML = "Falco wins!";
} else {
  div8.innerText = "Who are you?";
}


const p = document.getElementById("p");
const score = 5;
const timeLeft = 0;
if (score == 5 || timeLeft === 5) {
  p.innerHTML = "Game Over";
}

const div9 = document.getElementById("div9");
const didPractice = false;
if (didPractice) {
  div9.innerText = "You did practice!";
} else {
  div9.innerText = "You did NOT practice!";
}

const div10 = document.getElementById("div10");
const isCelebrity = true;
const validTicket = true;
const bribe = 9001;

if ((isCelebrity === true && validTicket === true) || bribe > 9000) {
  div10.innerText = "Welcome to the concert!";
} else {
  div10.textContent = "No concert for you";
}







