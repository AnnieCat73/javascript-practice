/* Functions allow you to write a series of instructions package it into a block of code {where the instructions begins and ends in here}
This block of code gets executed when you call the function they are inside*/



/*function getMilk() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}*

//with parameter/how many bottles

function getMilk(bottles) {
  let cost = bottles * 1.5;
  console.log(`Buy ${bottles} bottles of milk!`);//2
  console.log(`The cost of the bottles are $${cost}!`);//$3
}
getMilk(2);

//can only buy milk for $5, how many bottles
function getMilk(money) {
  let cost = 1.5;
  let numBottles = money / cost;
  console.log(Math.round(numBottles));//3
}
getMilk(5);

//or
function getMilk(money) {
  let cost = 1.5;
  let numBottles = money / cost;
  console.log(`Buy ${Math.floor(numBottles)} bottles of milk`);//3
}
getMilk(5);



lifeInWeeks(50)
function lifeInWeeks(age) {
  const yearsRemaining = 90 - age;//80
  const days = yearsRemaining * 365;//80 * 365
  const weeks = yearsRemaining * 52;//90 * 52
  const months = yearsRemaining * 12;//80 * 12
  console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)
}
lifeInWeeks(10);//You have 29200, 4160, and 960 months left.


function getMilk(money) {//money = input
  return money % 1.5;//output = return
}
const change = getMilk(4);

console.log(change);//so get $1 change back

function calcBottles(startingMoney, costPerBottle) {
  const numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}
const totalBottles = calcBottles(5, 1.5);
console.log(totalBottles);//3

function calcChange(startingAmount, costPerBottle) {
  const changeFromBottles = startingAmount % costPerBottle;
  return changeFromBottles;
}
const totalChange = calcChange(10, 1.5);
console.log(totalChange);



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.



function bmiCalculator(weight, height) {
  const bmiTotal = weight / (height * height);
  return bmiTotal;

}
const bmi = Math.round(bmiCalculator(65, 1.8));
console.log(bmi);//20.0617 so 20*


//FUNCTION TO REMOVE THE STRINGS FROM THE ARRAYS

arr = [1, 2, "mango", "berry", "melon"];

function removeStrings(arr) {
  const numArr = arr.splice(0, 2);
  return numArr;
}
console.log(removeStrings(arr))//Array(2) [1, 2]


array = [1, "mango", "berry", "melon"]

function removeStrings(array) {
  const numArr = array.splice(0, 1);
  return numArr;
}
const newArray = removeStrings(array)//Array [1]
console.log(newArray)//Array [1] // or stored in a variable

/*array = ["mango", "berry", "melon"];

function removeStrings(...array) {
  const numArr = array.splice(0, -1);
  return numArr;
}
//console.log(removeStrings(...array))//Array []

const newArray = removeStrings();
console.log(newArray)


//array, slice, splice

let fruits = ["mango", "berry", "melon"];

let melonToBrother = fruits.slice(2);
console.log(melonToBrother);//Array ["melon"]

const cherryAdded = fruits.splice(1, 0, "cherry");
console.log(fruits);//Array(4) ["mango", "cherry", "berry", "melon" ]

//
//Looping through arrays

const fruitBasket = ['banana', 'pear', 'guava']

// fruitBasket.length is 3
for (let i = 0; i < fruitBasket.length; i++) {
  console.log("There's a " + fruitBasket[i] + " in the basket")
}

// => There's a banana in the basket
// => There's a pear in the basket
// => There's a guava in the basket

//NEGATIVE increment expression
for (let i = fruitBasket.length - 1; i >= 0; i--) {
  console.log("There's a " + fruitBasket[i] + " in the basket")
}

// => There's a guava in the basket
// => There's a pear in the basket
// => There's a banana in the basket

/*for of Loop - The for...of loop is preferable to the standard for loop because it always loops through the array once.

const fruitBasket1 = ['banana', 'pear', 'guava']
for (let fruit of fruitBasket1) {
  console.log("There's a " + fruit + " in the basket")
}

// => There's a banana in the basket
// => There's a pear in the basket
// => There's a guava in the basket

const x = 15 + 5;

const y = "hi";

const z = x + y;
console.log(z)//20hi
console.log(x + x + y)//40hi

console.log(1 + 2 + "hi");//3hi
console.log(1 + "hi");//1hi
console.log("hi" + 1 + 2);//h12 //NBBB
console.log("hi" + 1 + "hi"); <hi1hi></hi1hi>*/

//OBJECTS

/*const houseKeeper1 = {
  yearsOfEperience: 12,
  name: "Jane",
  cleaningRepertoire: ["bathromm", "lobby", "bedroom"]
}

console.log(houseKeeper1.name)*/

//From this to factory of lots of housekeepers ex

class HouseKeeper {
  constructor(yearsOfEperience, name, cleaningRepertoire) {
    this.yearsOfEperience = yearsOfEperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
      alert("Cleaning in progress!");
    }
  }
}
const houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
houseKeeper1.clean();

console.log(houseKeeper1.name)//Jane
//ANOTHER EX - but think it's old
//Object Factory/constructor function
//constructior function starts with CAPITAL + new

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcases = function () {
    alert("May I take your suitcase?");
  }
}
const bellBoy1 = new BellBoy("timmy", 19, true, ["French", "English"]);
bellBoy1.moveSuitcases();

//or Skillcrush way

const createOutfit = function () {
  const outfit = {
    shirt: "red",
    pants: "blue",
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log(`Show us your new ${this.shirt}!`)
    }
  }
  return outfit;
}
console.log(createOutfit());

//then can create one for each day
const monday = createOutfit()
monday.shirt = "white";
monday.pants = "green"
console.log(monday)

//can also do

const createTuesday = function (shirt, pants, isNew) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    isNew: isNew,
    showOff: function () {
      this.isNew = true;
      console.log(`Show us your new ${this.shirt}!`)
    }
  }
  return outfit;
}
const tuesday = createTuesday("blue", "silver", true);
console.log(tuesday)
//Object { shirt: "blue", pants: "silver", isNew: true}

//then 

const outfitArray = [monday, tuesday];

for (let outfit of outfitArray) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}
/*shirt white 
pants green 
isNew false 
showOff 
shirt blue 
pants silver 
isNew true*/

for (let key in tuesday) {
  console.log(tuesday[key])
}//blue,silver ,true

for (let key in monday) {
  console.log(key, monday[key]);
}
/*shirt white
pants green
isNew false*/

//Comparators and Equality

function bmiCalculator(weight, height) {
  const bmiTotal = weight / (height * height);
  if (bmiTotal < 18.5) {
    return `Your BMI is ${bmiTotal}, so you are underweight.`;
  } else if (bmiTotal <= 18.5 && bmiTotal >= 24.9) {
    return `You BMI is ${bmiTotal}, so you have normal weight!`;
  } else `Your BMi is 4${bmiTotal}, so you are overweight!`;


}
bmiCalculator(65, 1.8)
//const bmi = Math.round(bmiCalculator(65, 1.8));
//console.log(bmi);//20.0617 so 20*
