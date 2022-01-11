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

 28 apples etc
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

//RETURNING OBJECTS WITH IMPLICIT RETURN

//no implicit return ex
const functionName = _ => {
  return {
    prop: 'value'
  }
}
//implicit
const functionName = _ => ({prop: 'value'});

//REASSINGMENTS
let firstName = 'Zell';
firstName = 'Vincy'; //also state of program changes as name is now Vincy

//Best not to reassign so instead try to:
//1) Use const
const newVariable = 'some value';
//2) Use ternary operator instead of if/else
const toy = gender === 'boy' ? 'toy car' : 'doll';
//3) if need 3 plus if statements use a function with early return
const getGift = score => {
  if (score === 100) return 'Xbox';
  if (score > 75) return 'new phone';
  if (score > 50) return 'meal';
  return null;
}
const gift = getGift(70);
/*SO:
Data types that are known as primitive values in JavaScript are numbers, 
strings, booleans, null, undefined. Objects such as functions and arrays 
are referred to as non-primitive values. The fundamental difference 
between primitives and non-primitives is that primitives are immutable 
and non-primitives are mutable.

Object.assign can be used to prevent objects from mutating.
*/

//PREVENTING ARRAYS FROM MUTATING
//1) Copy your arrays before working on them - slice()
const array = [1, 2, 3];
const copy = array.slice();//then work on copy

//2) Use array methods that create a new array - slice(), concat()
//Examples
// slice() - Copies up to (not including) the last item
const array = [1, 2, 3]
const copy = array.slice();//[1, 2, 3]
const copy = array.slice(0, array.length - 1);//[1, 2] or]
const copy = array.slice(1);//[2,3]
const copy = array.slice(0, -1)//[1,2]- copies up to (not inclu) last item
//-1 = last item, -2 = second last item, -3 = third last item etc

//concat()
const first = [1, 2];
const second = [3, 4];
const combined = first.concat(second);

//PURE FUNCTIONS
/*When you pass a set of input values into a pure function, it should always 
return the same output value.
const sum = (n1, n2) => n1 + n2;
If you pass 3 and 5 into sum, you will get 8. It doesn’t matter how many 
times you run sum(3, 5). You will always get 8. The output remains unchanged 
given the same input.
sum(3, 5); // 8
sum(3, 5); // 8
sum(3, 5); // 8
sum(3, 5); // 8

//IMPURE FUNCTION
An impure function’s value can change given the same input.
const random = _ => Math.random();
random(); // 0.4656
random(); // 0.0037
random(); // 0.4346


textContent vs innerHTML
If you want to change text, always use textContent because textContent is 
faster than innerHTML.
If you want to change the HTML inside an element, use innerHTML.*/

//textContent - change text of an element
const element = document.querySelector('div');
element.textContent = 'Hello world!';

//innerHTML - lets you change the HTML inside an element
const element = document.querySelector('div');
element.innerHTML = '<p class="red">The quick brown fox ...</p>';
//or
const element = document.querySelector('div');
element.innerHTML =
  `<ol>
    <li>Pizza</li>
    <li>Bread</li>
    <li>Onion</li>
    <li>Broccoli</li>
  </ol>`;


//1) CREATING HTML ELEMENTS 
const paragraph = document.createElement('p');
const div = document.createElement('div');
paragraph.classList.add('red');
paragraph.textContent = `I'm red!`;

//2a) Add to DOM with appenChild-appendChild adds your 
//element as the final child of the specified element
// Create Strawberry
const li = document.createElement('li');
li.textContent = 'Strawberry';
// Append Strawberry
const list = document.querySelector('ol');
list.appendChild(li);
//looks like:
<ol>
  <li>Banana</li>
  <li>Pineapple</li>
  <li>Orange</li>
  <li>Strawberry</li>
</ol>

//2b) Add to DOM with insertBefore-insertBefore 
/*adds an element before another element
parentElement.insertBefore(newElement, referenceElement);
-newElement is the element you want to insert.
-referenceElement tells browsers where to insert newElement. 
-newElement will be inserted just before referenceElement.*/

// Create strawberry node
const strawberry = document.createElement('li');
strawberry.textContent = 'Strawberry';
// Add strawberry node before banana
const list = document.querySelector('ol');
const banana = list.children[0];
list.insertBefore(strawberry, banana);
//looks like
<ol>
  <li>Strawberry</li>
  <li>Banana</li>
  <li>Pineapple</li>
  <li>Orange</li>
</ol>

//ADDING MULTIPLE ELEMENTS TO THE DOM - DO THIS:

//1) innerHTML
const ol = document.querySelector('ol');
ol.innerHTML = `
  <li>Addy Osmani</li>
  <li>Vitaly Friedman</li>
  <li>Chris Coyier</li>
`;//get this:
<ol>
  <li>Addy Osmani</li>
  <li>Vitaly Friedman</li>
  <li>Chris Coyier</li>
</ol>
//OR BETER EX
// Method 1: Replacing innerHTML
const characters = document.querySelector('.characters');
const humans = document.createElement('ul');
humans.classList.add('humans');
humans.innerHTML = `
  <li>Gandalf</li>
  <li>Saruman</li>
  <li>Aragorn</li>
  <li>Boromir</li>
  <li>Faramir</li>
`;
characters.appendChild(humans);///THIS IMP

// or if you have an array like and use map or join:
const devs = [
  'Addy Osmani',
  'Vitaly Friedman',
  'Chris Coyier'
];

//join()
const string = devs.join()
console.log(string) // AddyOsmani,Vitaly Friedman,Chris Coyier or no ,
const string = devs.join('')
console.log(string) // Addy OsmaniVitaly FriedmanChris Coyier

// map()
const string =
  devs.map(dev => `<li>${dev}</li>`).join('');
console.log(string);
ol.innerHTML = string//then change/add it to html
// <li>Addy Osmani</li><li>Vitaly Friedman</li><li>Chris Coyier</li>
//join() here converts array into a string

//IF YOU ALREADY HAVE EXISTING ITEMS AND WANT TO ADD NEW ONES TO IT
//have this
<ol>
  <li>Rachel Andrew</li>
  <li>Jen Simmons</li>
  <li>Una Kravets</li>
</ol>
// but add thes Devs to <ol>
const devs = [
  'Addy Osmani',
  'Vitaly Friedman',
  'Chris Coyier'
];
//USE DOCUMENT FRAGMENT-ONLY UPDATES THE 3 NEW DEVS-kind like virtual DOM
const fragment = document.createDocumentFragment();
devs.forEach(dev => {
  const li = document.createElement('li')
  li.innerHTML = dev
  fragment.appendChild(li)
});
ol.appendChild(fragment);

//REMOVE ELEMENT FROM THE DOM -parentNode.removeChild
<ol>
  <li>Rachel Andrew</li>
  <li>Jen Simmons</li>
  <li>Una Kravets</li>
</ol>
const jen = document.querySelectorAll('li')[1];
jen.parentNode.removeChild(jen); //becomes this
<ol>
  <li>Rachel Andrew</li>
  <li>Una Kravets</li>
</ol>

//THEN CAN MOVE THE REMOVEDCHILD WITH appendChild/insertBefore
<ol>
  <li>Rachel Andrew</li>
  <li>Jen Simmons</li>
  <li>Una Kravets</li>
</ol>
const list = document.querySelector('ol');
const rachel = list.children[0];

const jen = list.removeChild(list.children[1]);//removed it then
list.insertBefore(jen, rachel);//becomes this:
<ol>
  <li>Jen Simmons</li>
  <li>Rachel Andrew</li>
  <li>Una Kravets</li>
</ol>

//SWITCH
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

/*When JavaScript reaches a break keyword, it breaks out 
of the switch block. The default keyword specifies the code to run 
if there is no case match
I only use switch when I want to use early returns, but I can’t.*/

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}//Today is Tuesday

//FORMS
/*
<form method="post" action="/some-url">
  <label for="first-name">First name</label>
  <input type="text" name="first-name" id="first-name">
  <button type="submit">Submit form</button>
</form>

method tells the browser which HTTP method to use to 
submit the form. You can choose from get and post.
action tells the browser what URL to submit the information 
to. In this case, it’s /some-url. If you want to process 
the information in the frontend, you don’t need the action 
attribute.

The name attribute lets servers extract values from fields
The label describes what a field is about.
When a user clicks on a label, you’ll want the browser to 
focus on a field. To do so, you need to provide the label 
with a for attribute; this for attribute should match the 
id of the targeted field.

The submit button lets users submit a form.*/

form.addEventListener('submit', e => {
  e.preventDefault();//prevent it from navigating to URL in action

  // Do stuff here
  console.log('Change stuff here');

  // Continues the submission
  form.submit();
});


//FORM ELEMENTS
console.log(form.elements);//get this
HTMLFormControlsCollection { 0: input#first-name, 2: button, length: 3,}