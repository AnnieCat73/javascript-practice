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
