/*const array = ["blue", "purple", "red", "black"];
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

const showList = document.getElementById("showlist");
const items = document.querySelectorAll("li");
showList.remove();

const timeOfDay = [6, "noon", 9, "morning", "afternoon", 7];
timeOfDay.forEach(function(time, index) {
 console.log(`The ${time} is at index number ${index}.`);
});


const dressSizes = [8, 10, 12, 14, 16];
//dressSizes.forEach(function (dress, index) {
  //console.log(`${index + 1}. Size: ${dress}`);
//});
const newArray = [...dressSizes];
console.log(newArray);



const filterDresses = dressSizes.filter(function (dress) {
 return dress > 10;
 
});
console.log(filterDresses);


const mapDresses = dressSizes.map(function (dress) {
 return dress * 2;
});
console.log(mapDresses);

const cars = ["volvo", "nissan", "rangerover", "fiat"];
cars.forEach(function (car, index) {
  console.log(`${index +1}. ${car}`);
});

for (let car of cars) {
  console.log(car);
}

const years = function (year1, year2) {
  //console.log(`They have ${year1 + year2} years of experience!`);
  return `They have${year1 + year2} years of experience!`;
}
years(5, 3);

const ticket = prompt(`Do you have a ticket for the ballet?  yes or no`);
const ballet = function () {
  if(ticket === "yes") {
    //return `Exellent! Doors open at 9`;
    console.log(`Exellent! Doors open at 9`);
  } else if (ticket === "no") {
    //return `Sorry, you have to buy a ticket first`;
    console.log(`Sorry, you have to buy a ticket first`);
  }
}

function addTogether (num3, num4) {
  console.log(num3 + num4);
}
addTogether(6, 8);

const h2 = document.querySelector("h2");

h2.innerText = "Aisha's Apple orchid";
h2.innerHTML = "Aisha's <strong>Apple</strong> orchid";
console.log(h2);

const birthdayWish = document.querySelector("#birthdaywish");
const accentText = document.querySelector(".accent");
birthdayWish.innerHTML = `Today is your <span class="accent">Big Day!</span>`;
console.log(birthdayWish);

const firstImg = document.querySelector("img");
firstImg.src = "img/Lulu.jpg";
firstImg.alt ="Lulu's bouquet";

const link = document.querySelector("a");
link.href = "https:/.....";

const button1 = document.getElementById("button1");

button1.addEventListener("click", function () {
  button1.innerText = "Let's party!";
  if (!button1.classList.contains("accent")) {
    button1.classList.add("accent");

  } else {
    button1.classList.remove("accent");
  }
});

const body = document.querySelector("body");
document.addEventListener("keyup", function (e) {
 //console.log(e);
 if(e.key === "l") {
   body.classList.add("accent");
 } else if (e.key === "d") {
   if (body.classList.contains("accent")) {
    body.classList.remove("accent");
    body.classList.add("background");
   } 
   }
});

const dogNames = document.getElementById("dog-names");
const heading = document.querySelector("h3");
let selection = "Rigatoni";

dogNames.addEventListener("change", function (e) {
  selection = e.target.value;
  console.log(selection)
  if (selection === "Dave") {
    heading.innerText = "You selected Dave!";
    heading.style.color = "green";
  } else if (selection === "Reeses") {
    heading.innerText = "Party Reeses!";
  } else {
    heading.innerText ="Pick me!"
  }
  
});

const cat = {
  firstName: "Floof",
  color: "black",
  isFriendly: true,
  age: 5,
  favoriteToy: ["ball", "bird", "mouse"],
  pet: function () {
    console.log("purr");
  },
  isSleeping: true,
  play: function () {
    this.isSleeping = false;
    console.log(`${this.firstName} is awake!`);
  }
}
console.log(cat.play());

console.log(cat);
console.log(cat.firstName);
console.log(cat.isFriendly);
console.log(cat.favoriteToy[2]);
console.log(cat.age);
console.log(cat.pet());
cat.breed = "Siamese";
console.log(cat);
console.log(cat["color"]);




let paperclips = 10;
//paperclips = paperclips + 2;
paperclips += 2;
console.log(paperclips);

const dog = {
  firstName: "Gibson",
  petName: "Gibs",
  color: "white",
  isScary: true,
  play: function () {
    this.isScary = false;
    console.log(`${this.firstName} is biting!`);
  }
}
console.log(dog.play());
console.log(dog["firstName"]);
console.log(dog.petName);
dog.breed = "Cocker Spaniel";
console.log(dog)
dog.color = "black";
console.log(dog);

const createOutfit = function () {
  const outfit = {
    shirt: "green",
    pants: "blue",
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log(`Show your nice new outfit`);
    }
  };
  return outfit;
};
console.log(createOutfit());

const monday = createOutfit();
monday.shirt = "red";
monday.isNew = true;
money.pants = "black";
console.log(monday);



const createOutfit = function (shirt, pants) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log(`Show your nice new outfit`);
    }
  };
  return outfit;
};


//console.log(createOutfit());

const tuesday = createOutfit("yellow", "silver");
//console.log(tuesday)

/*for (let key in tuesday) {
  console.log(key, tuesday[key]);
}

const outfitArray = ["monday", "tuesday"];
for (let outfit of outfitArray) {
  //console.log(outfit);
  for (let key in outfit) {
    console.log(key, outfit[key])
  }
}*/
const h2 = document.getElementById("h2");
const div = document.getElementById("div");
const headingTop = document.createElement("h1");
headingTop.textContent = "Cool things";
div.insertAdjacentElement("beforeend",headingTop);

const body = document.querySelector("body");
const list = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "Three";
body.appendChild(list);
list.appendChild(li);

const li5 = document.createElement("li");
li5.textContent = "Five";
list.appendChild(li5);

const li4 = document.createElement("li");
li4.textContent = "Four";
li5.insertAdjacentElement("beforebegin", li4);



const li1 = document.createElement("li");
li1.textContent = "One";
list.insertAdjacentElement("afterbegin", li1);

const li2 = document.createElement("li");
li2.textContent = "Two";
li1.insertAdjacentElement("afterend", li2)


//const array = [2, 4, 3, 7, 10, 44];
function averageArr (array) {
  let total = 0;
  for (let num of array) {
    total += num;
    Math.round(total);
  }
  console.log(total / array.length);
}
averageArr([0, 50]);
averageArr([3, 6, 8, 32]);
averageArr([3, 5, 7, 9, 10]);

