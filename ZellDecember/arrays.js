/*const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let num of numbers) {
  if (num > 5) {
    console.log(num);
  }
}


let newArray = [];
for (let num of numbers) {
  if (num > 10) {
    newArray.push(num);
  }
}

let anotherNewArray = [];
for (let num of numbers) {
  anotherNewArray.push(num * 5);
}

const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
];


people.forEach(person => {
  console.log(person.firstName)
})

let firstNames = [];
people.forEach(person => {
  firstNames.push(person.firstName);
})
console.log(firstNames);

let diedAfter1950 = [];
people.forEach(person => {
  if (person.yearOfDeath > 1950)
    diedAfter1950.push(person);
})
console.log(diedAfter1950);

let darwinIndex = -1;
people.forEach((person, index) => {
  if (person.lastName === "Darwin") {
    darwinIndex = index;
  }
});
console.log(darwinIndex);*/




const goodGuys = document.querySelectorAll("[data-type='good-guy']");
//console.log(goodGuys)

Array.from(goodGuys).forEach(goodGuy => {
  goodGuy.classList.add("yay");
});
console.log(goodGuys);

const villains = document.querySelectorAll("[data-type='villain']");
Array.from(villains).forEach(villain => {
  villain.classList.add("nay");
});
console.log(villains);

const characters = document.querySelectorAll(".character");
/*Array.from(characters).forEach(character => {
  character.classList.add("star-wars");
});*/
for (let character of characters) {
  character.classList.add("star-wars");
}
console.log(characters);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";
  btn.style.setProperty("color", "#fff");
  btn.style.width = "20rem";
  btn.style.setProperty("height", "20rem");

});

const element = document.getElementById("element");
element.style.fontSize = "5rem";
const elementStyle = getComputedStyle(element);
//console.log(style);

const fontSize = elementStyle.fontSize;
console.log(fontSize)

const div = document.getElementById("div");
/*const divStyle = div.style.fontSize;
console.log(divStyle);*/

//const divAgain = getComputedStyle(div);
//const computedDivStyle = divAgain.fontSize;
//console.log(computedDivStyle);
//console.log(divAgain);

const divstyle1 = div.style.backgroundColor;
console.log(divstyle1);

const divMore = document.getElementById("div");
const getStyles = getComputedStyle(divMore);
console.log(getStyles);




