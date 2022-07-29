//FUNCTIONS

/*A function is a block of code that executes tasks in a specific order, like take empty bucket, go to well, draw water, head back home.

function functionName(param1, param2, param3) {
  console.log('First Parameter: ' + param1)
  console.log('Second Parameter: ' + param2)
  console.log('Third Parameter: ' + param3)
}

You pass in arguments to assign values to parameters. Arguments are values you use when you call a function.

The first parameter gets assigned to the first argument.
The second parameter gets assigned to the second argument.
And so on.
functionName('arg1', 'arg2', 'arg3')


function sayName(firstName, lastName) {
  // These variables can then be used later in the function
  console.log('firstName is ' + firstName)
  console.log('lastName is ' + lastName)
}

sayName('Zell', 'Liew')
// firstName is Zell
// lastName is Liew

Functions can have a return statement that consists of the return keyword and a value:

function functionName () {
  return 'some-value'
}
When JavaScript sees this return statement, it stops executing the rest of the function and “returns” the value

function add2(num) {
  return num + 2
}

const number = add2(8)
console.log(number) // 10
If there is no return statment, JavaScript automatically returns undefined.

Hoisting

When functions are declared with a function declaration (what you learned above), they are hoisted to the top of your scope. More on scope in a later lesson, but this means the following two sets of code are exactly the same.

function sayHello () {
  console.log('Hello world!')
}
sayHello()
// This is automatically converted to the above code
sayHello()
function sayHello () {
  console.log('Hello world!')
}

WITH FUNCTION EXPRESSION

const sayHello = function () {
  console.log('This is declared with a function expression!')
}
Functions declared with function expressions are not automatically hoisted to the top of your scope.

sayHello () // Error, sayHello is not defined
const sayHello = function () {
  console.log(aFunction)
}*/


function logger(pet) {
  console.log(pet);
}
logger('cat');//cat

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(6, 17));//23


function multiply(num3, num4) {
  return num3 * num4;
}
console.log(multiply(67, 89));//5963


/*Whether you’d like an implicit return
Arrow functions automatically create a return statement if two conditions are present:

You write only one line of code in the function
That line of code is not enclosed in curly braces ({})
This implicit return feature lets you reduce three lines of code into a single line.*/

// 3 lines of code with a normal function
const sumNormal = function (num1, num2) {
  return num1 + num2
}

// Can be replaced with one line of code with an arrow function
const sumArrow = (num1, num2) => num1 + num2


const ten = () => 5 + 5;
console.log(ten());//10

const result = ten();
console.log(result)

const eleven = _ => 6 + 5;
console.log(eleven());//11

const logs = pet => `My ${pet}'s name is Noozie!`;
console.log(logs('cat'));//My cat's name is Noozie!

const add3 = (num6, num7) => num6 + num7;
console.log(add3(6, 8));//14
//or
const add4 = (num8, num9) => {
  return num8 + num9;
}
console.log(add4(6, 8));//14

const multiply10 = (num10, num11) => num10 * num11;
console.log(multiply10(5, 5));//25
//or
const multiply11 = (num12, num13) => {
  return num12 * num13;
}
console.log(multiply11(5, 5));//25


/*Objects

An object is data that contains key-value pairs.

You can create objects by writing these key-value pairs within curly braces. If you intend to create multiple key-value pairs, you need to separate each pair with commas, like this:*/

const anObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  // ...
}