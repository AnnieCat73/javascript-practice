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
// => There's a guava in the basket*/

const x = 15 + 5;

const y = "hi";

const z = x + y;
console.log(z)//20hi
console.log(x + x + y)//40hi

console.log(1 + 2 + "hi");//3hi
console.log(1 + "hi");//1hi
console.log("hi" + 1 + 2);//h12 //NBBB
console.log("hi" + 1 + "hi"); hi1hi