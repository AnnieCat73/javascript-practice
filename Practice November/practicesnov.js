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

const div = document.querySelector("#div");

function showColor(color) {
  return `Your shirt color is ${color}`;
}
div.innerHTML = showColor("pink");


