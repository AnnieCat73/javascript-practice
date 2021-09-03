const array = ["blue", "purple", "red", "black"];
function containsPurple (array) {
  for(let color of array) {
    if (color === "purple" || color === "magenta") {
      return true;
    } else {
      return false;
    }
  }
}
containsPurple(["blue", "purple", "red", "black"]);

const arr = [1, 2, 3]
function doubleArr (arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}
doubleArr([1, 2, 3]);

let password = "heloo kitty";
if (password.length >= 6) {
  if (password.indexOf("") === -1) {
    console.log("Valid password!")
  } else {
    console.log("Password is long enough but can't contain spaces!");
  }
}

console.log(12%7);
const hello = "hello";
console.log(hello[0]);
console.log(hello[hello.length -1]);

let num = 37;
if (num % 2 !== 0) {
  console.log("Odd number");

}

const greet = () => {
  console.log("Hello".toUpperCase());
};
greet();

const div = document.getElementById("div");
const ul = document.createElement("ul");


div.innerHTML = `
  <ul>
    <li>One</li>
      <li>Two</>
  </ul>`;

const instruments = function (instrument) {
  console.log(`Mia plays the ${instrument}!`);
};
instruments("harp")

const add = function (num1, num2) {
  console.log(num1 + num2);
};
add(20, 40);

const div1 = document.getElementById("div1");
const pets = ["cat","dog", "rabbit", "hamster"];
for (let pet of pets) {
  console.log(pet);
  console.log(pets[2]);
}
div1.innerText = pets[2];

const things = ["Terry", "Pat", "Sally", "Kimberly"];
console.log(things)
for  (let person of people) {
  console.log(person);
}

const mealBudget = 6;
const mealCost = 5;
console.log(mealBudget - mealCost);
console.log(`Irina has £${mealBudget-mealCost} left after buying her lunch!`);

const favoriteGenre = prompt(`What is your favorite genre (ex punk)?`);
const oldFunds = 1500;
const newFunds = Number(prompt(`How much funds did you just receive?`));
console.log(`The fundraiser total is now $${oldFunds + newFunds}.`);

const ageChild1 = Number("8");
const ageChild2 = 2;
const totalAges = ageChild1 + ageChild2;
console.log(totalAges);

const persons = 27;
const payout = 800.2900;
console.log(`You won $${(payout/persons).toFixed(2)}`);

const div1 = document.getElementById("div1");
const body = document.querySelector("body");
const h2 = document.createElement("h2");
//body.appendChild(h2);
div1.append(h2);
console.log(body)

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const numbers = [1, 2, 4, 70, 100, 5];
console.log(Math.min(1, 2, 5));
console.log(Math.max(4, 4.5, 5, 5.1));
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
console.log(10*Math.random());
console.log(Math.floor(11*Math.random()));
const random = Math.random();
console.log(Math.round(random * 100));

const fullName = "Hansen";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf("a"));
console.log(fullName.lastIndexOf("s"));
console.log(fullName.length);
console.log(fullName.replace("a","w"));
console.log(fullName.substr(0,4));
console.log(fullName.trim());

console.log(parseInt("25.66667"));
console.log(parseFloat("5657599835.983493"));


const names = ["Terry", "Pat", "Sally", "Kimberly"];
console.log(names);
for (let i = 0; i < names.length; i++) {
  //console.log(i);
  console.log("Names to consider:",i);
}

const div = document.getElementById("div");

div.style.color = "red";
console.log(getComputedStyle(div));

const showInput = document.getElementById("add");
const addShowButton = document.getElementById("addbtn");
const showList = document.getElementById("showlist");

/*addShowButton.addEventListener("click", function () {
  const show = showInput.value;
  if (show !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = show;
    showList.append(listItem);
  }
});

const girls = ["Hannah", "Erica", "Sally", "Pat"];
for(let i = 0; i < girls.length; i++) {
  console.log(`The girl names are: " ${girls[i]}`)
}

for (let girl of girls) {
  console.log(`The girl names are: ${girl}`)
}







