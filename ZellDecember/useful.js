// Traffic light example with if/else
if (isLightGreen) {
    walk();
  } else {
    stop();
  }

//Ternary- when your if and else branches contain one expression each
isLightGreen
    ? walk()
    : stop()

const fruitBasket = ['apple', 'pear', 'orange'];
let appleIndex = fruitBasket.indexOf("apple");

if (appleIndex === 2) {
    console.log(eat()) 
} else {
    console.log(wash());
}

appleIndex === 2 
    ? eat()
    :wash()

const num = 5
const square = num => num * num
const add = num => num + num
    
const finalNum = num > 5 ? square(num) : add(num)