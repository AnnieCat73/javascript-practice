//Ternary
//condition ? truthyExp : falseyExp
//from
if (isLightGreen) {
    walk();
} else {
    stop();
}
//to
isLightGreen ? walk() : stop();
//or
isLightGreen 
? walk()
: stop()

const lightColor = 'red';

lightColor === green
  ? walk()
  : stop()
//here says if lightColor is strictly green but 
//it isn't, it's red

The AND operator (&&) is used to check if all expressions that are 
truthy.
&& returns the first falsey expression if any expressions is falsey
&& returns the last expression if all expressions are truthy.

The OR operator
The OR operator (||) is used to check if at least one expression 
is truthy.
|| returns the first truthy expression if any expressions are truthy
|| returns the last expression if all expressions are falsey.

'Benjamin' && 'Thaddeus'. Answer: Thaddeus
'Benjamin' || 'Thaddeus'. Answer: Benjamin
'' && null. Answer: ''
'' || null. Answer: null
2550284 && 0. Answer: 0
2550284 || 0. Answer: 2550284

//DESTRUCTURING

//OBJECTS
// Getting values from objects
const person = {
    firstName: 'Zell',
    lastName: 'Liew'
}
const firstName = person.firstName;
const lastName = person.lastName;
//to
const {firstName, lastName} = person
console.log(firstName); // Zell
console.log(lastName); // Liew

//ARRAYS
const numbers = [22, 99, 100];
//to first item, second item etc:
const [firstNumber, secondNumber] = numbers;
console.log(firstNumber);// 22
console.log(secondNumber); // 99

//FUNCTION ARGUMENTS-if argument is an array or object
const scores = [100, 99, 98];
const firstThree = ([first, second, third]) => {
  return {
    first: first,
    second: second,
    third: third
  }
}

//DESTRUCTURED PARAMETERS-if too many parameters
//from:
const createUser = (firstName, lastName, email, password, location) => {
    // ...
}
createUser('Zell', 'Liew', 'zell@zellwk.com', '12345678', 'Singapore')

//to-pass an object instead
const createUser = (user) => {
    const { firstName, lastName, email, password, location } = user
    // ...
}
createUser({
    email: 'zell@zellwk.com',
    password: '12345678',
    firstName: 'Zell',
    lastName: 'Liew',
    location: 'Singapore'
});


//ES6 Property value shorthands
const fullName = 'Zell Liew'
const Zell = {
  fullName
}

//ES6 Method shorthands
//from this
const Zell = {
  sayMyName: function () { 
    console.log("I'm Zell"); 
  }
}
//to
const Zell = {
  sayMyName () { 
    console.log("I'm Zell");
  }
}

//...spread
const array = [2, 3];
// adding 4 and 5 without spread
const combinedArray = array.concat(4, 5);
// adding 4 and 5 with spread
const combinedArray = [...array, 4, 5];

//spreading instead of Array.from
const items = document.querySelectorAll('.item')
// These two give the same results
const array = Array.from(items)
const array2 = [...items]

//Array rest-so pack all names into an argument with ...
const logNames = (...names) => {
  names.forEach(name => console.log(name));
}
logNames('Zell', 'Thomas', 'Jacin', 'Vincy', 'Jing', 
'Soares', 'Gabrielle', 'Justin');

//When you destructure an array you can pack the “rest of 
//the array” into a variable with the rest operator.
const scores = [100, 99, 98];
const [first, ...restOfScores] = scores;

//Object Spread
//You can use the spread operator to spread an object’s 
//properties into another object.
const fruitBlender = {
  blendKiwi: true,
  blendMango: true
}
const megaBlender = {
  blendGuava: true,
  ...fruitBlender
}

//Object Rest
//You can pack remaining properties into a variable with 
//the rest operator.
const fruitBlender = {
  blendKiwi: true,
  blendMango: true,
  blendOrange: true,
  blendPapaya: true
}
const { blendKiwi, ...otherProps} = fruitBlender
console.log(otherProps)
// {
//   blendMango: true,
//   blendOrange: true,
//   blendPapaya: true
// }


//...spread as a function argument
const spreads  = [10, 11,12];
const spreading = (tenth, eleventh, twelth) => {
  console.log(tenth);
  console.log(eleventh);
  console.log(twelth);
}
spreading(...spreads);//10, 10, 12

//Array methods

const people = [
  {name: 'Zell'},
  {name: 'Vincy'},
  {name: 'Casper'}
]
//find
const casper = people.find(person => person.name === 'Casper');
console.log(casper);//Object { name: "Casper" }

//findIndex
const casperIndex = people.findIndex(person => person.name === 'Casper');
console.log(casperIndex);//2

//map
const newArray = Array.map((currentItem, index) => {
  // return the transformed value in a new array/all of them
});
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
const multipliedBy5 = numbers.map(num => {
  return num * 5;
});
//or
const multipliedBy5 = numbers.map(num => num * 5);

//BETTER-add string: 'I need to' before each todo
const todos = ['buy eggs', 'feed my cat', 'water plants'];
const toDoStrings = todos.map(todo => `I need to ${todo}!`);
console.log(toDoStrings)

//IMP SIMPLIFYING ARRAYS WITH MAP
/*fx From a list of people, you need to get an array of firstNames. 
To get this array, you can use map to loop through the array and return 
person.firstName*/

const people = [{
  firstName: 'Zell',
  lastName: 'Liew'
}, {
  firstName: 'Vincy',
  lastName: 'Zhang'
}];
const firstNames = people.map(person => person.firstName);

map vs forEach

Use map when you want to return a new array
Use forEach when you want to do stuff

Chaining array methods EX
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6];
const multipliedBy5 = numbers.map(num => num * 5);
const between30And40 = multipliedBy5.filter(num => num >= 30 && num <= 40);
//or
const result = numbers.map(num => num * 5)
  .filter(num => num >= 30 && num <= 40);


//Reduce
reduce is an array method that helps you convert an array into a single value

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((0, num) => {
  return acc + num;
}, 0);
//to or first iteration
const total = numbers.reduce((0, 1) => {
  return 0 + 1;
}, 0);
//then second etx
const total = numbers.reduce((1, 2) => {
  return 1;
}, 0);

//Looping through objects
1) Convert object into an array with Object.keys, Object.values, Object.entries
2)Then loop through the array

1)
Object.keys
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}
const keys = Object.keys(fruits)
console.log(keys) // [apple, orange, pear]

Object.values

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}
const values = Object.values(fruits)
console.log(values) // [28, 17, 54]

Object.entries-creates an array of arrays
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}
const entries = Object.entries(fruits)
console.log(entries)
// [
//   [apple, 28],
//   [orange, 17],
//   [pear, 54]
// ]


2)
// Looping through arrays created from Object.keys
const keys = Object.keys(fruits)
for (const key of keys) {
  console.log(key)
}//apple, orange, pear

// Looping through arrays created from Object.entries
const entries = Object.entries(fruits)
for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`)
}//There are 28 apples etc
