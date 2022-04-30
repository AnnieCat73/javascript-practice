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
lifeInWeeks(10);//You have 29200, 4160, and 960 months left.*/


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

*/
