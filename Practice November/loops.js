const output = document.getElementById("output");
let content = "";

for (let i = 0; i < 10; i++) {
  content += `<div class="post">This is post ${i}</div>`;
}

output.innerHTML = content;

for (let i = 0; i < 10; i++) {
  console.log(`Let's count from: ${i}`);
}

const div = document.getElementById("div");
let numbers = "";
for (let i = 1; i < 101; i++) {
  numbers += i;
  div.innerHTML = numbers;
}

//ARRAYS

const names = ['Bowser', 'Ganon', 'Shmebulock'];
for (let i = 0; i < names.length; i++) {
  console.log(`Hello there ${names}!`);
}

const animals = ["cow", "sheep", "pig"];

const body = document.querySelector("body");
const div1 = document.getElementById("div1");
const animalDiv = document.createElement("div");
body.appendChild(animalDiv)

animalDiv.textContent = animals[2];
div1.innerText = animals[0];

const div2 = document.getElementById("div2");
const lastNames = ["Anderson", "Cooper"];

const pets = ["cats", "dogs", "rabbits", "rats"];
const span = document.getElementById("span");

pets[3] = "pony";
span.innerHTML = pets;


const firstNames = ["Charles", "Sally", "Tony", "Veronica"];
const div3 = document.getElementById("div3");

/*for (let i = 0; i < firstNames.length; i++) {
  div3.innerHTML = `Good morning! ${firstNames[i]}!`;
}*/

for (let name of firstNames) {
  div3.innerHTML = `Good morning! ${name}[1]`;
  div3.innerHTML = `Good morning ${name}!`;
  div3.innerHTML = `Good morning ${name}!`;
}

const whatever = ["pens", "cats", "lamps", "trees"];
const div4 = document.getElementById("div4");


whatever.pop();
whatever.push("chairs", "planes");

whatever.shift();

whatever.unshift("birds", "rectangles");
//console.log(whatever);

whatever.splice(1, 1, "cards");
console.log(whatever);