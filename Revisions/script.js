/*

Identifiers
An identifier is a sequence of characters that can be used to identify a variable, a function, an object. It can start with a letter, the dollar sign $ or an underscore _ , and it can contain digits. Using Unicode, a letter can be any allowed char, for example, an emoji ߠ.
Test
test
TEST
_test
Test1
$test
The dollar sign is commonly used to reference DOM elements.

Values
A hello string is a value. A number like 12 is a value.
hello and 12 are values. string and number are the types of those
values.

When we need to have a reference to a value, we assign it to a variable.

Variables
A variable is a value assigned to an identifier, so you can reference and use it later in the program.

We have 2 main ways to declare variables. The first is to use const :

const a = 0

The second way is to use let :

let a = 0

What's the difference?
const defines a constant reference to a value. This means the reference
cannot be changed. You cannot reassign a new value to it.

Using let you can assign a new value to it.
For example, you cannot do this:
const a = 0
a = 1

Because you'll get an error: TypeError: Assignment to constant variable. .

On the other hand, you can do it using let :
let a = 0
a = 1

NB CONST DOESN'T MEAN 'CONSTANT', IT DOES NOT MEAN THE VALUE CAN'T CHANGE - IT MEANS IT CAN'T BE REASSIGNED
MEANING HERE F.EX THE VALUE IN AN ARRAY OR OBJECT CAN CHANGE BUT F.EX CONST A = 0 THEN A = 2 CAN'T BE REASSIGNED

Const variables must be initialized at the declaration time:

const a = 0
but let values can be initialized later:
let a
a = 0

My advice is to always use const and only use let when you know you'll
need to reassign a value to that variable. 

In JavaScript we have 2 main kinds of types: primitive types and object types.

1) Primitive types
Primitive types are
numbers
strings
booleans
symbols
And two special types: null and undefined .

2)Object types
Any value that's not of a primitive type (a string, a number, a boolean, null or
undefined) is an object.

Expressions
An expression is a single unit of JavaScript code that the JavaScript engine can evaluate, and return a value. F.EX

1 / 2
i++
i -= 2
i * 2

Operators
Operators allow you to get two simple expressions and combine them to form a more complex expression. F.EX

const three = 1 + 2
three + 1 // 4
'three' + 1 // three1

Operators: +, -, /, *, **. %

The remainder operator (%)
The remainder is a very useful calculation in many use cases:
const result = 20 % 5 //result === 0
const result = 20 % 7 //result === 6

The exponentiation operator (**)
Raise the first operand to the power second operand
1 ** 2 //1
2 ** 1 //2
2 ** 2 //4
2 ** 8 //256
8 ** 2 //64

Comparison operators always returns a boolean, a value that's true or
false ).
Those are disequality comparison operators:
< means "less than"
<= means "minus than, or equal to"
> means "greater than"
>= means "greater than, or equal to"

4 equality operators. They accept two values,
and return a boolean:
=== checks for equality
!== checks for inequality
Note that we also have == and != in JavaScript, but I highly suggest to only use === and !== because they can prevent some subtle problems

Conditionals

An if statement is used to make the program take a route, or another,
depending on the result of an expression evaluation.

if (a === true) {
//do something
} else if (b === true) {
//do something else
} else {
//fallback
}


Strings

const name = 'Flavio'
You can determine the length of a string using the length property of it:

'Flavio'.length //6
const name = 'Flavio'
name.length //6

This is an empty string: '' . Its length property is 0:
''.length //0

Two strings can be joined using the + operator:
"A " + "string

Arrays

An array is a collection of elements.
Arrays in JavaScript are not a type on their own.
Arrays are objects.
We can initialize an empty array in these 2 different ways:
const a = []
const a = Array()

You can access any element of the array by referencing its index, which starts
from zero:
a[0] //1
a[1] //2
a[2] //3

You can join multiple arrays by using concat() :

const a = [1, 2]
const b = [3, 4]
const c = a.concat(b) //[1,2,3,4]
a //[1,2]
b //[3,4]

You can also use the spread operator ( ... ) in this way:
const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]
c //[1,2,3,4]

You can use the find() method of an array:
  array.find((element, index, array) => {
//return true or false
})

Another method is includes() :
array.includes(value)
Returns true if a contains value .

Loops

Loops are one of the main control structures of JavaScript.
With a loop we can automate and repeat indefinitely a block of code, for how many times we want it to run.

while

The while loop is the simplest looping structure that JavaScript provides us. We add a condition after the while keyword, and we provide a block that is run until the condition evaluates to true .

Example:
const list = ['a', 'b', 'c']
let i = 0
while (i < list.length) {
  console.log(list[i]) //value
  console.log(i) //index
  i = i + 1
}

You can interrupt a while loop using the break keyword, like this:
while (true) {
  if (somethingIsTrue) break
}

//The break statement terminates the current loop

and if you decide that in the middle of a loop you want to skip the current iteration, you can jump to the next iteration using continue :

while (true) {
if (somethingIsTrue) continue
  //do something else
}

for
The second very important looping structure in JavaScript is the for loop.

We use the for keyword and we pass a set of 3 instructions: the
initialization, the condition, and the increment part.

Example:
const list = ['a', 'b', 'c']

for (let i = 0; i < list.length; i++) {
  console.log(list[i]) //value
  console.log(i) //index
}

Just like with while loops, you can interrupt a for loop using break and you can fast forward to the next iteration of a for loop using continue .

for...of
This loop is relatively recent (introduced in 2015) and it's a simplified version of
the for loop:

const list = ['a', 'b', 'c']
for (const value of list) {
  console.log(value) //value
}

Functions

A function is a block of code, self contained.
Here's a function declaration:

function getData() {
  // do something
}

A function can be run any times you want by invoking it, like this:
getData()

A function can have one or more argument:

function getData() {
  //do something
}

function getData(color) {
  //do something
}

function getData(color, age) {
  //do something
}

When we can pass an argument, we invoke the function passing parameters:

function getData(color, age) {
  //do something
}
getData('green', 24)
getData('black')

Note that in the second invokation I passed the black string parameter as the color argument, but no age . In this case, age inside the function is undefined .
We can check if a value is not undefined using this conditional:

function getData(color, age) {
  //do something
  if (typeof age !== 'undefined') {
    //...
  }
}

typeof is a unary operator that allows us to check the type of a variable.

A function has a return value. By default a function returns undefined , unless you add a return keyword with a value:

function getData() {
  // do something
  return 'hi!'
}

We can assign this return value to a variable when we invoke the function:

function getData() {
  // do something
  return 'hi!'
}

let result = getData()

Arrow Functions

function getData() {
  //...
}

to
() => {
  //...
}

But.. notice that we don't have a name here. Arrow functions are anonymous. We must assign them to a variable.
We can assign a regular function to a variable, like this:

let getData = function getData() {
  //...
}

When we do so, we can remove the name from the function:
let getData = function() {
  //...
}
and invoke the function using the variable name:

let getData = function() {
  //...
}
getData()

That's the same thing we do with arrow functions:

let getData = () => {
  //...
}
getData()

const getData = () => console.log('hi!')
const getData = param => console.log(param)
const getData = (param1, param2) =>
console.log(param1, param2)

Objects

Any value that's not of a primitive type (a string, a number, a boolean, a symbol, null, or undefined) is an object.
Here's how we define an object:

const car = {
}

Object Properties

Objects have properties, which are composed by a label associated with a
value. The value of a property can be of any type, which means that it can be an
array, a function, and it can even be an object, as objects can nest other
objects.

const car = {
  color: 'blue'
}

As you see, when we have multiple properties, we separate each property with
a comma. We can retrieve the value of a property using 2 different syntaxes.

The first is dot notation:
car.color //'blue'

The second (which is the only one we can use for properties with invalid
names), is to use square brackets:
car['the color'] //'blue'

If you access an unexisting property, you'll get the undefined value:
car.brand //undefined

As said, objects can have nested objects as properties:
const car = {
  brand: {
  name: 'Ford'
  },
  color: 'blue'
}

In this example, you can access the brand name using
car.brand.name

or

car['brand']['name']

And you can also add new properties to an object:
car.model = 'Fiesta'
car.model //'Fiesta'

Given the object

const car = {
color: 'blue',
  brand: 'Ford'
}

you can delete a property from this object using
delete car.brand

OBJECT METHODS

const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log('Started')
  }
}
car.start()

Inside a method defined using a function() {} syntax we have access to the
object instance by referencing this .
In the following example, we have access to the brand and model
properties values using this.brand and this.model :

const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log(`Started
    ${this.brand} ${this.model}`)
  }
}
car.start()

It's important to note this distinction between regular functions and arrow
functions: we don't have access to this if we use an arrow function:

This is the reason why regular functions are often used as object methods.
Methods can accept parameters, like regular functions:

const car = {
  brand: 'Ford',
  model: 'Fiesta',
  goTo: function(destination) {
    console.log(`Going to ${destination}`)
  }
}
car.goTo('Rome')

CLASSES

What are classes? They are a way to define a common pattern for multiple
objects.
Let's take a person object:

const person = {
  name: 'Flavio'
}

We can create a class named Person 

class Person {
  name
}

Now from this class, we initialize a flavio object like this:

const flavio = new Person()

flavio is called an instance of the Person class.

We can set the value of the name property:
flavio.name = 'Flavio'

and we can access it using
flavio.name

Classes can hold properties, like name , and methods.

Methods are defined in this way:
class Person {
  hello() {
    return 'Hello, I am Flavio'
  }
}

and we can invoke methods on an instance of the class:
class Person {
  hello() {
    return 'Hello, I am Flavio'
  }
}
const flavio = new Person()
flavio.hello()

There is a special method called called constructor() that we can use to
initialize the class properties when we create a new object instance.
It works like this:

class Person {
  constructor(name) {
    this.name = name
  }
  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}

Note how we use this to access the object instance.
Now we can instantiate a new object from the class, passing a string, and
when we call hello , we'll get a personalized message:

const flavio = new Person('flavio')
flavio.hello() //'Hello, I am flavio.'

When the object is initialized, the constructor method is called, with any
parameters passed.

INHERITANCE

A class can extend another class, and objects initialized using that class
inherit all the methods of both classes.
Suppose we have a class Person :

class Person {
  hello() {
    return 'Hello, I am a Person'
  }
}

We can define a new class Programmer that extends Person :
class Programmer extends Person {

}

Now if we instantiate a new object with class Programmer , it has access to the
hello() method:

const flavio = new Programmer()
flavio.hello() //'Hello, I am a Person'

Inside a child class, you can reference the parent class calling super() :

class Programmer extends Person {
hello() {
  return super.hello() +
    '. I am also a programmer.'
  }
}

const flavio = new Programmer()
flavio.hello()
The above program prints Hello, I am a Person. I am also a programmer..

ASYNCHRONOUS PROGRAMMING AND CALLBACKS

Most of the time, JavaScript code is ran synchronously.
This means that a line of code is executed, then the next one is executed, and
so on.Everything is as you expect, and how it works in most programming
languages.
However there are times when you cannot just wait for a line of code to
execute.
You can't just wait 2 seconds for a big file to load, and halt the program
completely.
You can't just wait for a network resource to be downloaded, before doing
something else.
JavaScript solves this problem using callbacks.
One of the simplest examples of how to use callbacks is timers.

The setTimeout() function accepts 2 arguments: a function, and a number.
The number is the milliseconds that must pass before the function is ran.
Example:

setTimeout(() => {
  // runs after 2 seconds
  console.log('inside the function')
}, 2000)

console.log('before')
setTimeout(() => {
  // runs after 2 seconds
  console.log('inside the function')
}, 2000)
console.log('after')

You will see this happening in your console:

before
after
inside the function

Here's how we can implement callbacks in our code.
We define a function that accepts a callback parameter, which is a function.
When the code is ready to invoke the callback, we invoke it passing the result:
const doSomething = callback => {
  //do things
  //do things
  const result = /* .. *
  callback(result)
}

Code using this function would use it like this:
doSomething(result => {
  console.log(result)
})

PROMISES

Promises are an alternative way to deal with asynchronous code.
As we saw in the previous chapter, with callbacks we'd be passing a function
to another function call, that would be called when the function has finished
processing.
Like this:
doSomething(result => {
  console.log(result)
})

When  the doSomething() code ends, it calls the function received as a a
parameter:

const doSomething = callback => {
  //do things
  //do things
  const result = /* .. 
  callback(result)
}


The main problem is that if we need to use the result of this
function in the rest of our code, all our code must be nested inside the
callback, and if we have to do 2-3 callbacks we enter in what is usually defined
"callback hell" with many levels of functions indented into other functions

Promises are one way to deal with this.

Instead of doing:
doSomething(result => {
console.log(result)
})

We call a promise-based function in this way:
doSomething()
.then(result => {
console.log(result)
})

We first call the function, then we have a then() method that is called when
the function ends.

It's common to detect errors using a catch() method:
doSomething()
  .then(result => {
  console.log(result)
  })
  .catch(error => {
  console.log(error)
  })

Now, to be able to use this syntax, the doSomething() function
implementation must be a little bit special. It must use the Promises API.
Instead of declaring it as a normal function:
const doSomething = () => {

}

We declare it as a promise object:
const doSomething = new Promise()
and we pass a function in the Promise constructor:

const doSomething = new Promise(() => {

})

This function receives 2 parameters. The first is a function we call to resolve
the promise, the second a function we call to reject the promise.

const doSomething = new Promise(
  (resolve, reject) => {
})

Resolving a promise means complete it successfully (which results in calling
the then() method in who uses it).
Rejecting a promise means ending it with an error (which results in calling the
catch() method in who uses it).

Here's how:

const doSomething = new Promise(
  (resolve, reject) => {
    //some code
    const success = /* ... 
    if (success) {
      resolve('ok')
    } else {
      reject('this error occurred')
    }
  }
)


ASYNC AND AWAIT

const doSomething = async () => {
  const data = await getData()
  console.log(data)
}

The Async/await duo allows us to have a cleaner code and a simple mental
model to work with asynchronous code.

As you can see in the example above, our code looks very simple. Compare it
to code using promises, or callback functions.
And this is a very simple example, the major benefits will arise when the code
is much more complex.

As an example, here's how you would get a JSON resource using the Fetch
API, and parse it, using promises:

const getFirstUserData = () => {
  // get users list
  return fetch('/users.json')
    // parse JSON
    .then(response => response.json())
    // pick first user
    .then(users => users[0])
    // get user data
    .then(user =>
    fetch(`/users/${user.name}`))
    // parse JSON
    .then(userResponse => response.json())
}
getFirstUserData()

And here is the same functionality provided using await/async:

const getFirstUserData = async () => {
  // get users list
  const response = await fetch('/users.json')
  // parse JSON
  const users = await response.json()
  // pick first user
  const user = users[0]
  // get user data
  const userResponse =
  await fetch(`/users/${user.name}`)
  // parse JSON
  const userData = await user.json()
  return userData
}

getFirstUserData()

VARIABLES SCOPE - global scope, block scope and function scope

If a variable is defined outside of a function or block, it's attached to the global
object and it has a global scope, which mean it's available in every part of a
program.

There is a very important difference between var , let and const
declarations.

A variable defined as var inside a function is only visible inside that function.
Similarly to a function arguments:

A variable defined as const or let on the other hand is only visible inside
the block where it is defined.

A block is a set of instructions grouped into a pair of curly braces, like the ones
we can find inside an if statement or a for loop. And a function, too.
It's important to understand that a block does not define a new scope for var ,
but it does for let and const .


Suppose you define a var variable inside an if conditional in a function

function getData() {
  if (true) {
    var data = 'some data'
    console.log(data)
  }
}

If you call this function, you'll get some data printed to the console.

If you try to move console.log(data) after the if , it still works:
function getData() {
  if (true) {
    var data = 'some data'
  }
  console.log(data)
}

But if you switch var data to let data :

function getData() {
  if (true) {
    let data = 'some data'
  }
  console.log(data)
}
You'll get an error: ReferenceError: data is not defined .

This is because var is function scoped, and there's a special thing
happening here, called hoisting. In short, the var declaration is moved to the
top of the closest function by JavaScript, before it runs the code. More or less
this is what the function looks like to JS, internally:

function getData() {
  var data
  if (true) {
    data = 'some data'
  }
  console.log(data)
}

This is why you can also console.log(data) at the top of a function, even
before it's declared, and you'll get undefined as a value for that variable:

function getData() {
  console.log(data)
  if (true) {
    var data = 'some data'
  }
}

but if you switch to let , you'll get an error ReferenceError: data is not
defined , because hoisting does not happen to let declarations.

const follows the same rules as let : it's block scoped.

Var variable they do have
less moving parts, and their scope is limited to the block, which also makes
them very good as loop variables, because they cease to exist after a loop has
ended:

function doLoop() {
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
  console.log(i)
}

doLoop()

When you exit the loop, i will be a valid variable with value 10.
If you switch to let , if you try to console.log(i) will result in an error
ReferenceError: i is not defined .


//MORE ON SCOPE

The scope is the portion of code where the variable is visible.
A variable initialized with var outside of any function is assigned to the global object, has a global scope and is visible everywhere. A variable initialized with var inside a function is assigned to that function, it's local and is visible only inside it, just like a function parameter.

Any variable defined in a function with the same name as a global variable takes precedence
over the global variable, shadowing it.
It's important to understand that a block (identified by a pair of curly braces) does not define a new scope. A new scope is only created when a function is created, because var does not have block scope, but function scope.

Inside a function, any variable defined in it is visible throughout all the function code, even if the variable is declared at the end of the function it can still be referenced in the beginning, because JavaScript before executing the code actually moves all variables on top (something that is called hoisting). To avoid confusion, always declare variables at the beginning of a function.

USING let
let is a new feature introduced in ES2015 and it's essentially a block scoped version of
var . Its scope is limited to the block, statement or expression where it's defined, and all the contained inner blocks.

Modern JavaScript developers might choose to only use let and completely discard the use
of var .

If let seems an obscure term, just read let color = 'red' as let the color be red and it
all makes much more sense
Defining let outside of any function - contrary to var - does not create a global variable.

USING const
Variables declared with var or let can be changed later on in the program, and
reassigned. Once a const is initialized, its value can never be changed again, and it can't be reassigned to a different value.

const a = 'test'

We can't assign a different literal to the a const. We can however mutate a if it's an object
that provides methods that mutate its contents.

const does not provide immutability, just makes sure that the reference can't be changed.
const has block scope, same as let .

Modern JavaScript developers might choose to always use const for variables that don't
need to be reassigned later in the program, because we should always use the simplest
construct available to avoid making errors down the road.

TYPES OF SCOPE FROM SKILLCRUSH

Global scope is the context for the whole program. Variables that are global scoped aren’t located inside a function or another block of code, like an if statement. Global scoped variables are available to any part of your program. 

For example, the value for the variable numOfDrinks is available for functions and blocks of code to use:


var numOfDrinks = 5;
 
var drinks = function () {
  var tea = 6 + numOfDrinks;
  console.log(tea);
};
 
drinks();
// 11
 
if (numOfDrinks === 5) {
  var soda = "lemon-lime";
  console.log(soda);
}
//lemon-lime

FUNCTION SCOPE

Function scope is the context inside a function. The curly braces define the function scope beginning and end. Variables defined within a function are scoped to that function only.

For example, the tea variable can’t be accessed or changed outside of the drinks function. If you use console.log() with the tea variable outside the function, you’ll receive a “not defined” error message in the console:

var drinks = function () {
  var tea = 6 + numOfDrinks;
  console.log(tea);
};
 
console.log(tea);
// ReferenceError: tea is not defined

BLOCK SCOPE

Block scope is the context inside a block of code, like an if statement or loops. Like function scope, the curly braces define the block scope beginning and end. Here, the soda variable is block scoped to the if statement:


if (numOfDrinks === 5) {
  var soda = "lemon-lime";
  console.log(soda);
}
// lemon-lime

While you might think you wouldn’t be able to use or change the soda variable outside the block, there’s a flaw in JavaScript that lets you call or change a variable declared with var outside the block of code:

if (numOfDrinks === 5) {
  var soda = "lemon-lime";
  console.log(soda);
}
// lemon-lime
 
soda = "cola";
console.log(soda);
// cola

Reassigning a variable outside the intended scope could be a real problem by introducing all kinds of errors and hard-to-debug problems. 🚨😧

Fortunately, modern JavaScript standards have introduced a solution to this issue: declaring your variables with let and const instead of var.

LET & CONST
Declaring variables with var has been your go-to approach so far, which is fine when you’re a JavaScript beginner. But now that you have experience with JavaScript, you’re ready to transition your variable writing away from var and towards let and const.

LET KEYWORD

Use the let keyword to constrain a variable to block scope. Using let prevents the variable from being accessed outside the block where it was declared.

For instance, the soda variable in the previous example could be used outside the if statement block. If you replace the var with let, that’s no longer possible:


if (numOfDrinks === 5) {
  let soda = "lemon-lime";
  console.log(soda);
}
// lemon-lime
 
console.log(soda);
// ReferenceError: soda is not defined

The value of the soda variable is now protected from being accessed outside the code block. Rejoice!

CONST KEYWORD

The const keyword will constrain a variable to block scope AND prevent the value from being reassigned. You’ll use const with most variables, including variables used to declare functions:


const numOfDrinks = 5;
 
const drinks = function () {
  const tea = 6 + numOfDrinks;
  console.log(tea);
};
 drinks();
// 11

If you tried to reassign any of the variables declared with const, like numOfDrinks, you’d receive an error that the value is read-only:

const numOfDrinks = 5;
numOfDrinks = 7;
 
console.log(numOfDrinks);
// SyntaxError: /script.js: "numOfDrinks" is read-only

You may also see an error in the console like “TypeError: Assignment to constant variable” when attempting to reassign a variable declared with const.

A note on reassigning: Using const will prevent data types like strings, booleans, and numbers from being reassigned to a different value. For data types like arrays and objects (coming soon!), const will prevent reassigning the variable but still allow you to modify the elements inside the array/object.

let vs. const

Here are some quick guidelines to help you decide when to use let or const in your code:

Use const for most of your variables. Like 95% of the time, really!
Use let for inside code blocks (e.g., loops, if/else if statements).
Use let when you might want to reassign the value of a variable.

GATHER INPUT & CREATE ELEMENTS
To gather input from a user and generate a list on screen, you’ll need to add a few new tools to your JS toolbox: value, createElement(), append(), and querySelectorAll().

value Property

Up until now, you’ve only used prompt() to gather input from the user. But you can also gather input using a text box and the value property. The value property will capture the content entered into the input box:


addShowButton.addEventListener("click", function () {
  const show = showInput.value;
});

HOW this WORKS IN ARROW FUNCTIONS

'this' is a concept that can be complicated to grasp, as it varies a lot depending on the
context and also varies depending on the mode of JavaScript (strict mode or not).

It's important to clarify this concept because arrow functions behave very differently compared to regular functions.
When defined as a method of an object, in a regular function this refers to the object, so you can do:

const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}
calling car.fullName() will return "Ford Fiesta" .

The this scope with arrow functions is inherited from the execution context. An arrow
function does not bind this at all, so its value will be looked up in the call stack, so in this code car.fullName() will not work, and will return the string "undefined undefined" :

const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
    fullName: () => {
    return `${this.manufacturer} ${this.model}`
  }
}

Due to this, arrow functions are not suited as object methods.
Arrow functions cannot be used as constructors either, when instantiating an object will raise a TypeError .

This is where regular functions should be used instead, when dynamic context is not
needed.This is also a problem when handling events. DOM Event listeners set this to be the target element, and if you rely on this in an event handler, a regular function is necessary:

const link = document.querySelector('#link')

link.addEventListener('click', () => {
  // this === window
})

const link = document.querySelector('#link')

link.addEventListener('click', function() {
  // this === link
})


DESTRUCTURING ASSIGNMENTS

Given an object, you can extract just some values and put them into named variables:

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54, //made up
}

const {firstName: name, age} = person

name and age contain the desired values.

The syntax also works on arrays:

const a = [1,2,3,4,5]
const [first, second] = a

This statement creates 3 new variables by getting the items with index 0, 1, 4 from the array
a :
const [first, second, , , fifth] = a

----------------------------------------------------
<div class="greeting">
  <style type="text/css">
    p {
      color: rebeccapurple;
    }
  </style>
  <p hidden>This is not rendered.</p>
  <p>Hello world!</p>
</div>

let greeting = document.querySelector('.greeting');

// Get text content
// returns "p {color: rebeccapurple;} This is not rendered. Hello world!"
let text = greeting.textContent;

// Set text content
// This completely replaces whats there, including any HTML elements
greeting.textContent = 'We can dynamically change the content.';

// Add text to the end of an element's existing content
greeting.textContent += ' Add this after what is already there.';

// Add text to the beginning of an element's existing content
greeting.textContent = 'We can add this to the beginning. ' + greeting.textContent;

// HTML elements are automatically encoded and rendered as-is
greeting.textContent = '<p>See you later!</p>';

------------------------------------------------------------------
.REPLACE(), .REPLACEALL()


By default, the String.replace() method replaces the first match. To replace all matches, you’ll need to pass in a regular expression with the global flag (g).

let chips = 'Cape Cod potato chips are my favorite brand of chips.';

// Only replaces the first instance of the word "chips"
chips.replace('chips', 'deep fried potato slices');

// Replaces all instances of the word "chips"
chips.replace(new RegExp('chips', 'g'), 'deep fried potato slices');

The String.replaceAll() method replaces all instances of a string inside another string, without the need for a regular expression.The String.replaceAll() method accepts two arguments: the string to find, and the string to replace it with.

// Awkwardly worded, but roll with it
let wizards = 'Of all the wizards in Lord of the Rings, Radagast is my favorite of the wizards.';

// returns "Of all the sorcerers in Lord of the Rings, Radagast is my favorite of the sorcerers."
let sorcerers = wizards.replaceAll('wizards', 'sorcerers');


get/sethasATTRIBUTE()

let elem = document.querySelector('#lunch');

// Get the value of the [data-sandwich] attribute
let sandwich = elem.getAttribute('data-sandwich');

// Set a value for the [data-sandwich] attribute
elem.setAttribute('data-sandwich', 'turkey');

// Remove the [data-chips] attribute
elem.removeAttribute('data-chips');

// Check if an element has the `[data-drink]` attribute
if (elem.hasAttribute('data-drink')) {
  console.log('Add a drink!');
}

TERNARY OPERATOR

let someVar = [the condition] ? [the value if true] : [the value if false];

let num = 0;
let answer = num > 10 ? num : 42;
It’s the same as doing this.

let num = 0;
let answer;

if (num > 10) {
  answer = num;
} else {
  num = 42;
}

CONVERTING ARRAYS INTO HTML

let wizards = ['Gandalf', 'Radagast', 'Merlin'];
And I want to create an unordered list from it, like this.

<ul>
  <li>Gandalf</li>
  <li>Radagast</li>
  <li>Merlin</li>
</ul>

My favorite way to do this is with the .map() and .join() methods.

wizards.map(function (wizard) {
  return '<li>' + wizard + '</li>';
});

At this point, we have a new array that looks like this.

['<li>Gandalf</li>', '<li>Radagast</li>', '<li>Merlin</li>']

Next, we need each of those list items combined into a single string.

We can use the join() method for that. It normally separates each item with a comma (,), but we can pass in an empty string to use as a delimiter instead.

wizards.map(function (wizard) {
  return '<li>' + wizard + '</li>';
}).join('');

We now have a string that looks like this.

'<li>Gandalf</li><li>Radagast</li><li>Merlin</li>'

//ADD IT TO THE DOM

let app = document.querySelector('#app');
app.innerHTML = '<ul>' + wizards.map(function (wizard) {
  return '<li>' + wizard + '</li>';
}).join('') + '</ul>';

ALTERNATIVE:

let html = '';
for (let wizard of wizards) {
  html += '<li>' + wizard + '</li>';
}

Finally, inject your markup into the DOM.

let html = '';
for (let wizard of wizards) {
  html += '<li>' + wizard + '</li>';
}

app.innerHTML = '<ul>' + html + '</ul>';

DESTRUCTURING

let [entree, drink, side, desert] = lunch;

// logs "turkey sandwich"
console.log(entree);

// logs "chips"
console.log(side);

INNERHTML AND CROSS-SITE SCRIPTING ATTACK

// The element to inject content into
var app = document.querySelector('#app');

// Some API data
var newsStories = [
  //...
];

// Inject the articles into the DOM

app.innerHTML = newsStories.map(function (story) {
  return `
    <h1>${story.title}</h1>
    <p>By ${story.author} on ${story.date}</p>
    ${story.content}`;
}).join('');

While the Element.innerHTML property is convenient and easy ways to inject markup into the DOM, they can expose you to cross-site scripting (or XSS) attacks when used with third-party content.

There is a built-in safeguard in place, though.

Just injecting a script element won’t expose you to attacks, because the section of the DOM you’re injecting into has already been parsed and run.

// This won't execute
let div = document.querySelector('#app');
div.innerHTML = '<script>alert("XSS Attack");</script>';

Links are another potential attack vector. If an href attribute is set from third-party data, a user with malicious intent can prefix the URL with javascript: to run code when the user clicks the link.

div.innerHTML = `<a href="javascript:alert('Another XSS Attack')">Click Me</a>`;

When is this an issue?

If you’re injecting your own markup into a page, there’s little cause for concern. The danger comes from injecting third-party or user-generated content into the DOM.

If you’re adding content to a page that you didn’t write, you should sanitize and encode it to protect yourself from XSS attacks.

One common solution is to use Node.textContent or Element.innerText instead of Element.innerHTML or Element.outerHTML. HTML injected using one of the text properties is automatically encoded.

// Renders a string with encoded characters
// This would show up in the DOM as an encoded string (&lt;img src=x onerror="alert('XSS Attack')"&gt;) instead of as an image element
div.textContent = '<img src=x onerror="alert(\'XSS At

document.createElement('')

let div = document.createElement('div');
div.textContent = 'Hello, world!';
div.className = 'new-div';
div.id = 'new-div';
div.setAttribute('data-div', 'new');
div.style.color = '#fff';
div.style.backgroundColor = 'rebeccapurple';

Insert one or more elements or strings at the end of a set elements inside a shared parent. Call the Element.append() method on the target node, and pass in one or more new elements or strings as arguments.

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

// Create a new element
let li = document.createElement('li');
li.textContent = 'I am new here.';

// Create another new element
let liToo = document.createElement('li');
liToo.textContent = `I'm new, too!`;

// Get the parent node
let list = document.querySelector('#list');

// Insert the new node after the last element in the parent node
// ...<li>Item 3</li><li>I am new here.</li>
list.append(li);

// You can inject more than one item by passing in multiple arguments
// ...<li>Item 3</li><li>I am new here.</li><li>I'm new, too!</li>
list.append(li, liToo);

CONVERTING A NODELIST TO AN ARRAY

You can use the Array.from() method to create a new array from an existing one, or transform an array-like object (like a NodeList) into an array. Pass the array (or array-like object) to copy in as an argument.

let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];
let sandwichesCopy = Array.from(sandwiches);

The Array.from() method also accepts an optional second method, a callback function that it will behave like the Array.map() method, transforming the values in your object while creating an array.

// Get all of the button elements
let btns = document.querySelectorAll('button');

// Create an array of their text content
let btnsArr = Array.from(btns, function (btn) {
  return btn.textContent;
});


WINDOW.LOCALSTORAGE

You can use the window.localStorage object to store data locally that the browser can access later. Data is stored indefinitely, and must be a string.

The setItem() method saves a value, and accepts a key and the value as arguments. The getItem() method retrieves an item, and accepts its key as an argument. It will return null if no item with that key is found.

The removeItem() method removes an item, and accepts the key as an argument.

// Store data
let data = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', data);

// Get data
let savedData = localStorage.getItem('myDataKey');

// Remove data
localStorage.removeItem('myDataKey');


MISCELL

const range = 5.67;
console.log(Math.ceil(range));

const body = document.querySelector("body");
const link = document.createElement("a");
const link1 = document.createElement("a");
link.href = "https://example.com";
link.textContent = "Click me";
link.style.padding = "4px";
link.style.backgroundColor = "green";
link.style.color = "black";
link.style.fontWeight = "bold";
body.appendChild(link)

link1.textContent = "Turn me red"
body.appendChild(link1)

link1.addEventListener("click", () => link1.style.backgroundColor = "red" );



*

Event bubbling with boxes

Event bubbling relates to the order in which event handlers
are called when one element is nested inside a second element
and both have a registered a listener for the same event a la a
click.

1) Capturing phase
From the window to the event target parent
The listeners that have the value of 'true' get captured
If has false then the listener is not captured

2) Target phase
Event target itself. All listeners registered on the event target
will be invoked - Js reaches the element that fired the event and
triggers all eventlistener attached to it

3) Bubbling phase
From event target parent back to window. It goes up the dom tree and
all eventlisteners with the value of false will be triggered
So js goes through every HTML eelement, starting from target back to
window

To stop bubbling up:

1) e.stopPropagation();
2) event delegation pattern - only works on events that bubbles
Attach one event listener to an ancestor element that listens to
all events in descendant elements

<ul>//SO UL IS ANCESTOR ELEMENT
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>

const list = document.querySelector("ul");
list.addEventListener('click', e => {
  console.log(e.target);
});

NB e.target is sensitive and can misfire so best to use it
with matches()

list.addEventListener('click', e => {
  if(e.target.matches('li) {
    //do sth
  })
})


IF NO NESTED ELEMENTS i.e here want only button

<button>
  <svg>
  <span>Click</span>
</button>


set pointer-events to none in css
button * {
  pointer-events: none;
}

//or

Closest - searches DOM upwards for an element that
matches selector. If can't find it returns undefined

button.addEventListener("click", e => {
  const button = e.target.closest('button');
  if(button) {
    //do sth
  }
})

/*
  <div class="boxes">
    <div class="box"></div>
    <div class="box" id="special-box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>


const boxes = document.querySelector(".boxes");
const specialBox = document.querySelector("#special-box");


boxes.addEventListener("click", function (e) {
  //console.log(e);
  if (e.target.className === "box") {
    e.target.parentNode.removeChild(e.target);
  }
}, false);

specialBox.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "green";
  e.stopPropagation();
}, false);

//or

const boxes = document.querySelector(".boxes");
const special = document.querySelector("#special-box");
boxes.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    e.target.parentNode.removeChild(e.target);
  }
}, false);

special.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "pink";
  e.stopPropagation();
}, false);




//bind()

const myDetails = {
  firstName: "Annie",
  getName: function () {
    console.log(this.firstName);
  }
}
myDetails.getName();

const bindName = myDetails.getName.bind({firstName: "Annie"});
bindName();
*/

//Callbacks

/**
 <div class="tooltips">
    <div class="tooltip"></div>
    <div class="tooltip"></div>
    <div class="tooltip"></div>
    <div class="tooltip"></div>
    <div class="tooltip"></div>
  </div>


const tooltips = document.querySelectorAll(".tooltip");

for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("click", function (e) {
    e.target.classList.toggle("active")
  }, false);
}
//or

for(let tooltip of tooltips) {
  tooltip.addEventListener("click", function(e) { 
    e.target.style.backgroundColor = "purple";
    tooltip.classList.add("active");
    //e.target.parentNode.removeChild(e.target);
  }, false)
}

tooltips.forEach(function (tooltip) {
  tooltip.addEventListener("click", e => {
    e.target.style.backgroundColor = "green";
  })
})
//or
for(let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("click", function (e) {
    tooltips[i].style.backgroundColor = "red";//or e.target
  })
}
//or
for(let tooltip of tooltips) {
  tooltip.addEventListener("click", function (e) {
    tooltip.style.backgroundColor = "red";
  })
}


//HOW TO USE MAP

//js has a lot of methods for moving through a list, forEach/for loops ex

//forEach f.ex

const list = [5, 6, 7, 8];
list.forEach(function(item, index) {
  list[index] = item + 1;
})
console.log(list);

//then in map withough mutating the original array

const listMap = list.map(function (item, index) {
  return item + 1;
});
console.log(listMap);



let numbers = [1,2,3,4,5,6,7];

numbers.forEach(function (number, index) {
  numbers[index] = number + 1;
});
console.log(numbers)

const mapNumbers = numbers.map(function (number, index) {
  return number ++;
});

console.log(mapNumbers)


//TYPES OF SCOPE

Global scope is the context for the whole program. Variables that are global scoped aren’t located inside a function or another
block of code, like an if statement. Global scoped variables are available to any part of your program. 

For example, the value for the variable numOfDrinks is available for functions and blocks of code to use:


const numOfDrinks = 5;
 
const drinks = function () {
  const tea = 6 + numOfDrinks;
  console.log(tea);
};
 
drinks();
// 11
 
if (numOfDrinks === 5) {
  const soda = "lemon-lime";
  console.log(soda);
}
//lemon-lime

Function Scope

Function scope is the context inside a function. The curly braces define the function scope beginning and end. Variables defined within a function are scoped to that function only.
const drinks = function () {
  const tea = 6 + numOfDrinks;
  console.log(tea);
};
console.log(tea);
// ReferenceError: tea is not defined


Block scope is the context inside a block of code, like an if statement or loops. Like function scope, the curly braces define the block scope beginning and end. Here, the soda variable is block scoped to the if statement:

if (numOfDrinks === 5) {
  const soda = "lemon-lime";
  console.log(soda);
}
// lemon-lime

Use the let keyword to constrain a variable to block scope. Using let prevents the variable from being accessed outside the block where it was declared.

For instance, the soda variable in the previous example could be used outside the if statement block with var. If you replace the var with let, that’s no longer possible

The const keyword will constrain a variable to block scope AND prevent the value from being reassigned. You’ll use const with most variables, including variables used to declare functions


Use let for inside code blocks (e.g., loops, if/else if statements).
Use let when you might want to reassign the value of a variable. 

VAR
if a variable is defined in a loop or in an if statement it can be accessed outside the block and accidentally redefined leading to a buggy program.



A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function. SO CLOSURE

/*Closure

function outer() {
  const b = 5;
  function inner() {
    const a = 47;
    console.log(a + b)
  }
  return inner;
}

//CREATE  A LIST OF URLs  FROM THESE LINKS?
const myTarget = document.querySelector("#mylinks");
//console.log(myTarget)
let arr = [
  { name: "Twitter", link: "https://twitter.com/" },
  { name: "Facebook", link: "https://www.facebook.com/" },
  { name: "Instagram", link: "https://www.instagram.com/" }
];

//Display list in html target id of "my-links"
// <div id="my-links"></div>

arr.forEach(function (item) {
  let el = document.createElement('a');
  el.href = item.link;
  el.innerText = item.name;
  
  myTarget.appendChild(el);
});

//MAP and for.Each again
const numbersArray = [2, 5, 7, 8];

numbersArray.forEach(function (number, index) {
  numbersArray[index] = number + 1;
})
console.log(numbersArray)//3,6,8,9

/*const numbersMapArray = numbersArray.map(function (number) {
  return number + 1;
});
console.log(numbersMapArray);//3, 6 8, 9*/

//THIS KEYWORD

/*This refers to the listening element if use a normal
function:

const button = document.querySelector("button");
button.addEventListener("click", function(e) {
  console.log(this);
});

//NB NOT WORK IF ARROW FUNCTION so => is lexically scope bound
uses this from the code that contains arrow function

//can get it through e.currentTarget

const button = document.querySelector("button");
button.addEventListener("click", e => {
  console.log(e.currentTarget)
})

const boxes = document.querySelector(".boxes");
console.log(boxes)
boxes.addEventListener("click", function (e) {
  if (e.target.classList.contains(box)) {
    e.target.parentNode.removeChild(e.target);
  }
}, false);


//Animation with JS f.ex
<p id="color" >I am changing my color every 3 seconds...</p>
p {
  color: black;
}
.animation {
  animation-name: color;
  animation-direction: alternate-reverse;
  animation-duration: 3s;
  animation-play-state: running;

}

@keyframes color {
  0% {
    color: red;
  }
  30% {
    color: yellow;
  }
  60% {
    color: green;
  }
  70% {
    color: blueviolet;
  }
  100% {
    color: blue;
  }
}
const color = document.querySelector("#color");
color.addEventListener("mouseover", function (e) {
  color.classList.add('animation');
})

const pets = document.querySelector("#my-pets");
const array = [
  {pet: "cat", name: "Charlie"},
  {pet: "dog", name: "Barney"},
  {pet: "rabbit", name: "Freya"},
  {pet: "hamster", name: "Robin"}
];

array.forEach(function (animal) {
  const el = document.createElement("p");
  el.innerText = `Here we have a ${animal.pet} called ${animal.name}!`;

  pets.appendChild(el);
})*/


/**********************************************************************
 * <div id="star-wars">
    <div class="character" data-type="good-guy">Luke Skywalker</div>
    <div class="character" data-type="good-guy">Yoda</div>
    <div class="character" data-type="villain">Darth Vader</div>
  </div>
  
<style>
  .goodguy {
    color: green;
    font-style: bold;
  }
</style>


//If get a node list use Array.from  
/*const characters = document.querySelectorAll(".character");
console.log(characters)//get a node list in an array OR CAN DO
const container = document.querySelector("#star-wars");
const characters = container.querySelectorAll(".character");


Array.from(characters).forEach(character => {
  character.style.fontSize = "2rem";
})

const goodGuys = document.querySelectorAll("[data-type='good-guy']");
for(let goodGuy of goodGuys) {
  goodGuy.classList.add("goodguy");
}

/**
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
 

const paragraphs = document.querySelectorAll("p")
console.log(paragraphs);

Array.from(paragraphs).forEach(function (p) {
  p.style.fontSize = "4rem";
})

for (let p of paragraphs) {
  p.style.color = "magenta";
}

for (let i = 0; i < paragraphs.length; i++ ) {
  paragraphs[i].style.backgroundColor = "red";
}

/*ATTRIBUTES

1)Built in:

- they are always set to true in JS unless you set them to false

<input type="checkbox" checked>
id, class are built in f.ex


2)Data attribute - make your own attributes

<div class="clown-hat" data-color="red" data-num-stripes="3">A Clown hat</div>

const clownHat = document.querySelector(".clown-hat");

const clownHatColor = clownHat.dataset.color
console.log(clownHatColor)//red
const clownHatSize = clownHat.dataset.numStripes
console.log(clownHatSize)//3

const clownHatColorMore = clownHat.dataset.color = "pink";
console.log(clownHatColorMore)//pink

//setting attributes
const element = document.querySelector(".element");
element.setAttribute('cheked', 'true');//so which attr then value

//Reading attributes
const element1 = document.querySelector(".element1");
element1.getAtrribute("data-color")//name of attr eg data-color="red"

//all attributes are strings so if need to convert it into a num f.ex
const clownHatStripes = parseInt(clownHat.getAttribute('data-num-stripes'));
console.log(clownHatStripes);// 3

//removing attributes 
const clownHat = document.querySelector("clown-hat");
clownHat.removeAttribute("data-color");*/

/*HOISTING

refers to the process of moving all declarations to the top of the current scope before code execution

no matter where functions and variables are declared they are moved to the top of their scope regardless of whether they are locally or globally scoped before code execution

It allows us to call functions before even writing them in our code

The Javascript engine hoists the variables declared using let but doesn't initialize them as they would width var

To stop hoisting use let and const, use function declarations instead of function declartions
By enabling strict mode, we opt into a restricted variant of JavaScript that will not tolerate the usage of variables before they are declared.*/

function sayHello() {
  console.log('Hello world');
}
sayHello();

//becomes
sayHello();
function sayHello() {
  console.log('Hello world');
}

//functon expression do not get hoisted so
const sayHello1 = function () {
  console.log('Hello world');
}
sayHello1()

//The Event Object
/*All event listener callbacks accept an argument
This argument is the e object (event)*/

const button = document.querySelector("#button");
button.addEventListener("click", e => {
  console.log(e);
})//get click { target: button #button etc once click on it in console}

//DOM TRAVERSALS

//1) Downwards

/*
a)

<div class="component">
  <h2 class="component__title">Component title</h2>
</div>

const component = document.querySelector('.component');
const title = component.querySelector('.component__title');

//b Children - select immediate nested elements

<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 1</a></li>
</ul>

const list = document.querySelector(".list");
const listItems = list.children

NB They return an HTML collection and can't use for.Each
method on them so if need to then use Array.from(listItems)

const array = Array.from(listItems)
array.forEach(el => {

})

c) Selecting a specific child

const listItems = document.querySelectorAll('li');

const firstItem = listItems[0]
const secondItem = listItems[1]
const thirdItem = listItems[2] etc

d) firstElementChild

const list = document.querySelector('.list');
const firstItem = list.firstElementChild

//2 SIDEWAYS

a) nextElementSibling 

<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 1</a></li>
</ul>

const firstItem = document.querySelector("li");
const secondItem = firstItem.nextElementSibling

b) previousElementSibling

const secondListItem = document.querySelector("li")[1];
const firstListItem = secondListItem.previousElementSibling

c) parentElement, children and index

const list = firstItem.parentElement
const allItems = list.children
const fourthItem = allItems[3]

const firstItem = document.querySelector("li");
const fourthItem = firstItem.parentElement.children[3]

//3) UPWARDS

a) parentElement

const firstItem = document.querySelector("li")
const list = firstItem.parentElement

b) closest

const firstLink = document.querySelector('a');
const list = firstLink.closest('.list')


//Loops

const numbers = [1, 12, 14, 16, 20, 65, 100];

for (let i = 0; i < numbers.length; i++) {
  const overFive = numbers[i];
  if (overFive > 5) {
    console.log(`This number is over 5: ${overFive}`);
  }
}

for (let number of numbers) {
  if (number > 5) {
    console.log(number)
  }
}

let newNumbers = [];

for (const number of numbers) {
  if(number = 10) {
    newNumbers.push(number);
  }
}

const numbers = [1, 12, 14, 16, 20, 65, 100];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num < 20) {
    console.log(num)
  }
}

/*Fundamentals of JS in Bootcamp

A variable is a value assigned to an identifier, so you can reference and use it later in the program.

let a = 0
a = 1

const defines a constant reference to a value. This means the reference cannot be changed.

The remainder operator
4 % 2 //0

An array is a collection of elements.

You can access any element of the array by referencing its index. The first item has index zero:

const a = [1, 2, 3]

a[0] //1
a[1] //2
a[2] //3

const fruits = ['banana', 'pear', 'apple']

const morefruits = [...fruits]

console.log(morefruits)
//[ 'banana', 'pear', 'apple' ];

const list = [1, 2]
const [first, second] = list

console.log(first) //1
console.log(second) //2


//Conditionals - do one thing or a different thing based on the 
state of our variables

Comparison operators always returns a boolean, a value that's `true` or `false`, and they are divided in 2 groups: **equality operators** , and **disequality comparison operators**.

These are equality operators:

- `===` checks for equality
- `!==` checks for inequality

These are disequality comparison operators:

- `<` means "less than"
- `<=` means "less than, or equal to"
- `>` means "greater than"
- `>=` means "greater than, or equal to"

An `if` statement is used to make the program take a route, or another, depending on the result of the evaluation of an expression.

This is the simplest example, which always executes:


if (true) {
  //do something
}

on the contrary, this is never executed:

if (false) {
  //do something (? never ?)
}


The conditional checks the expression you pass to it for true or false value. If you pass a number, that always evaluates to true unless it's 0. If you pass a string, it always evaluates to true unless it's an empty string. Those are general rules of casting types to a boolean.

Did you notice the curly braces? That is called a **block**, and it is used to group a list of different statements.


Ternary

isTrue ? /* do this / : /* do that /

const running = true

(running === true) ? console.log('stop') : console.log('run')


//FUNCTIONS - core of JS

A function is a block of code, self contained, and we can tell our program to ran that code when we need it.

Here's a **function declaration**:

function test() {
  // do something
}

The `// do something` comment is a placeholder for a set of instructions that can be long as much as you want.

When you want to run this function, you "call it" or "invoke it", like this:

test()

The difference between arguments and parameters is this: you define the parameters and that's what you see inside the function. Arguments are passed by the program when you call the function.

They are basically the value assigned to the parameter.

Functions can have default values for the parameters that are not passed by the caller:

## Returning values from a function

A function can have a return value.

By default a function returns `undefined`.

If you want to return a value from it, you add a `return` keyword with a value:

function test() {
  // do something
  return "hi!"
}


In your program you can assign the return value of the function to a variable, when you invoke the function:


function test() {
  // do something
  return "hi!"
}

const result = test()
result now holds a string with the hi! value.
//
You can only return one value from a function.

A "trick" to return multiple values from a function is to return an object, or an array, like this:


function test() {
  return ["Flavio", 37]
}

Then you can call the function and save your array to a variable, or use array destructuring like this:

const [name, age] = test()

function increment(num) {
  if(num === undefined) {
  return `Please pass a number`;//early return i.e return not at end
  }                           //of function but at the beginning when
  return num + 1;             //when validating data function        
}
increment()

//function ends at first return as that's true 

//Arrow functions 

function test() {
  //...
}

to

() => {
  //...
}


But.. notice that we don't have a name here.

Arrow functions are anonymous. We must assign them to a variable.

We can assign a regular function to a variable, and invoke the function using the variable name:

let test = () => {
  //...
}
test()

Parameters are passed in the parentheses:


const test = (param1, param2) => console.log(param1, param2)

If you have one (and just one) parameter, you could omit the parentheses completely:

const test = param => console.log(param)

//MAP

the *callback function* (the function we pass to `map()`) receives each item's value, and you can do many things now.

To start with, you can return the item, so you basically clone the original array, provided it's filled with primitive values:

const a = [1, 2, 3]
const b = a.map(item => item * 10)

//OBJECTS

Object oriented programming is one of the most important concepts in JavaScript.

Any value that's not of a primitive type (a string, a number, a boolean, a symbol, null, or undefined) is an **object**.

const car = {}

or

const car = new Object() or const car = Object.create({})

const car = {
  color: 'blue'
}

If you want to use a label name not valid as a variable name, you can use quotes around it. Here's an example with a space in the property label:

const car = {
  color: 'blue',
  'the color': 'blue'
}

car.color //'blue'
car['the color'] //'blue'

const car = {
  color: 'blue'
}

car.color = 'yellow'
car['color'] = 'red'

//Delete a property
const car = {
  model: 'Fiesta',
  color: 'green'
}

delete car.model

//With objects instead, you copy a reference to the same object:

const car = {
  color: "blue",
}

const anotherCar = car
anotherCar.color = "yellow"
car.color //'yellow'

//Mehods

const car = {
  start: function () {
    console.log("Car engine started")
  },
}
car.start()

const car = {
  brand: "Ford",
  model: "Fiesta",
  goTo: function (destination) {
    console.log(`Going to ${destination}`)
  },
}
const car = {
  brand: "Ford",
  model: "Fiesta",
  goTo: function (destination) {
    console.log(`Going to ${destination}`)
  },
}

const car = {
  brand: "Ford",
  model: "Fiesta",
  goTo: function (destination) {
    console.log(`Going to ${destination}`)
  },
}
car.goTo("Rome")
// Going to Rome

//this 

`this` is a keyword that has different values depending on where it's used, but there's just one place where it makes sense to use `this`: INSIDE OBJECT METHODS.

A method, as you know, is a function attached to an object.

You know that functions have two forms:

- regular functions
- arrow functions

If you need to reference the object instance from within a method, you can't use arrow functions. You have to use regular functions.
Arrow functions are not bound to the object, and that's why regular functions are often used as object methods.

const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log(`Started
          ${this.brand} ${this.model}`)
  },
}

car.start()
//Started Ford Fiesta

//Array of objects

const list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

You want to order it by the color name, in alphabetical order: black, red, white.

You can use the sort() method of Array, which takes a callback function, which takes as parameters 2 objects contained in the array (which we call a and b):

When we return 1, the function communicates to sort() that the object b takes precedence in sorting over the object a. Returning -1 would do the opposite.

list.sort((a, b) => {
  if(a.size > b.size) {
    return 1;
  } else {
    return -1;
  }
}) //or better


list.sort((a, b) => {
  if(a.size > b.size) {
    return 1;
  } 
  return -1;
}) //or better

//or ternary

list.sort((a, b) => (a.color > b.color) ? 1 : -1)

list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )


//Object destructuring

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54, //made up
}

You can extract just some of the object properties and put them into named variables:
const { firstName, age } = person

Now we have 2 new variables, firstName and age, that contain the desired values:
console.log(firstName) // 'Tom'
console.log(age) // 54

You can also automatically assign a property to a variable with another name:
const { firstName: name, age } = person

//Passing objects as function arguments or returning objects from a function

const printNameAndAge = ({ name, age }) => {
  console.log(name, age)
}

const person = {
  name: 'Flavio',
  age: 38
}

printNameAndAge(person)

//or

printNameAndAge({ name: 'Roger', age: 9 })

//another ex

function test() {
  const name = 'Flavio'
  const age = 38

  return { name, age }
}
const { name, age }= test()


//Cloning objects / a new object from another object

const a = { test: 'test' }
const b = { ...a }

older way: //not works if objects has methods
const b = object.assign({}, a)

const car = {
  owner: {
    name: "Flavio"
  }
}

//so
const newCar = {...car}
newCar.owner = {...car.owner}


//ASYNCHRONOUS CODE

JavaScript was born inside the browser, its main job, in the beginning, was to respond to user actions, like mouse clicks.

We needed a way to say "do this when the user clicks that button".

That’s done using **callbacks**

document.querySelector('#button').addEventListener('click', () => {
  //this function is executed when the mouse is clicked
})

() => {
  //this function is executed when the mouse is clicked
}
We call this a **callback function**.

It is only executed when the browser decides it should run, which in this case is when the user clicks the button.
And in the meantime it will keep executing other lines of JavaScript in our program, without stopping to wait when the user will click the button.

//TIMERS

Event handlers are just one possible use case for callbacks.

Another quite useful one are timers.

But I mention them because they are perfect to explain callbacks and asynchronous code.

We have 2 kinds of timers:

- `setTimeout()`
- `setInterval()`

With `setTimeout` you specify a callback function to execute later, and a value expressing how later you want it to run, in milliseconds:

setTimeout(() => {
  // runs after 2 seconds
}, 2000)

//or can do with variable 
const timer = setTimeout(() => {
  // runs after 2 seconds
}, 2000)
clearTimeOut(timer);//stops the above code from running

setTimeout(() => {
  // runs after 50 milliseconds
}, 50)


setInterval() is a function similar to setTimeout, with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):

setInterval(() => {
  // runs every 2 seconds
}, 2000)

The function above runs every 2 seconds unless you tell it to stop, using clearInterval, passing it the interval id that setInterval returned:

const id = setInterval(() => {
  // runs every 2 seconds
}, 2000)

clearInterval(id)

It's useful to call clearInterval inside the setInterval callback function, to let it auto-determine if it should run again or stop. For example, this code runs something unless status has the value done:

const interval = setInterval(() => {
  if (status === 'done') {
    clearInterval(interval)
    return
  }
  // otherwise do things
}, 100)


//PROMISES

Promises are another way to handle asynchronous code.

let done = true

const isFinished = new Promise((resolve, reject) => {
  if (done) {
    resolve('Here is the thing I built')
  } else {
    reject('Still working on something else')
  }
})

//or with .then etc

isFinished.then(() => {
  console.log('resolved')
  }).catch(() => {
  console.log('rejected')
})
//or similar
isFinished.then((msg) => {
  console.log(msg)
  }).catch((e) => {
  console.log(e)
})

You create a promise using the `new Promise()` syntax, which accepts a function.

That function gets two parameters, `resolve` and `reject`:

The promise is either fulfilled, or rejected.

In the above example, we call `resolve()` when `done` is `true`. You can change `done` to `false`, and the promise will fail.

What does it mean? It means that when we'll use the promise, we'll be able to handle a different scenario.



ASYNC

Suppose you have an isFinished function. And we can await until it’s finished using the keyword await.
When the JavaScript engine sees the await keyword, the execution of the current function will halt until isFinished is resolved.

const doSomething = async () => {
  await isFinished
  console.log(`ok it's finished!`)
}
doSomething();

//USING THE FETCH API

JavaScript provides a fetch() API we use to perform network requests.

const url = `http://api.github.com/users/flaviocopes`
fetch(url)
const response = await fetch(url)
const data = await response.json()
console.log(data)

Of course this code, using `await` must run in an async function. 

Here for example it's wrapped in an immediately-invoked async function:

(async () => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
})()

We can use a try/catch block to intercept any error occurring during the execution of the request:

try {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
} catch (error) {
  console.error(error)
}

OTHER HTTP METHOD THAN GET REQUESTS: POST, PUT, DELETE or OPTIONS.

Specify the method in the method property of the request, and pass additional parameters in the header and in the request body:

Example of a POST request:

const options = {
  method: "post",
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  body: "color=green&test=1",
}

try {
  fetch(url, options)
} catch (err) {
  console.error("Request failed", err)
}


USING JAVASCRIPT IN THE BROWSER I.E THE DOM

The DOM is the browser internal representation of a web page.

When the browser retrieves your HTML from your server, the internal parser analyzes the structure of your code, and creates a model of it.

Based on this model, the browser then renders the page on the screen.
Js is the de-fact standard to access the DOM  since it's the only
language the browsers can run.

The DOM is a tree of elements, with the Document node at the root, which points to the `html` Element node, which in turn points to its child element nodes `head` and `body`, and so on.

From each of those elements, you can navigate the DOM structure and move to different nodes.

## The `window` object

The `window` object represents the window that contains the DOM document.

With JavaScript you can interact with the DOM to:

- inspect the page structure
- access the page metadata and headers
- edit the CSS styling
- attach or remove event listeners
- edit any node in the page
- change any node attribute

Properties and methods of the `window` object can be called without referencing `window` explicitly, because it represents the **global object**.

For example, the property `window.document` can also be referenced using `document`.

Long list of properties but f.ex console.log, document, localStorage
Methods: alert(), setInterval(), addEventListener() etc
Type window in console to see all

The Document object can be accessed from window.document, and since window is the global object, you can use the shortcut document object directly from the browser console, or in your JavaScript code.

- `document.getElementById()` accepts an `id` attribute value and returns the element (only one, as `id` cannot be repeated in the page according to the HTML standard)
- `document.getElementsByTagName()` accepts a `tag` element name and returns all the elements that match it
- `document.getElementsByClassName()` accepts a `class` attribute name and returns all the elements that match it
- `document.querySelector()`
- `document.querySelectorAll()`
`querySelectorAll()` and `querySelector()` 

A NodeList object is not an array, but you can iterate it with forEach or for..of, or you can transform it to an array with Array.from() if you want.

The easiest way to loop over the results is to use the for..of loop:

for (const item of document.querySelectorAll('.buttons')) {
  //...do something
}

- `element.prepend(newChild)` alters the tree under "element", adding a new child Node "newChild" to it, before other child elements. You can pass one or more child Nodes, or even a string which will be interpreted as a Text node.
- `element.replaceChild(newChild, existingChild)` alters the tree under "element", replacing "existingChild" with a new Node "newChild".
- `element.insertAdjacentElement(position, newElement)` inserts "newElement" in the DOM, positioned relatively to "element" depending on "position" parameter value.
- first.removeChild(second) removes the child node "second" from the node "first"

//EVENT HANDLERS

**Event Handler**, which is a function that's called when an event occurs.

You can register multiple handlers for the same event, and they will all be called when that event happens.

JavaScript offer three ways to register an event handler:

- Inline event handlers
- DOM on-event handlers
- addEventListener

## Inline event handlers

This style of event handlers is very rarely used today

<a href="#" onclick="alert('link clicked')">A link</a>

## DOM on-event handlers

This is common when an object has at most one event handler, as there is no way to add multiple handlers in this case:

document.querySelector('a').onclick = () => {
  alert('link clicked')
}

if ('onclick' in document.querySelector('a')) {
  alert('onclick handler already registered')
}

## Using addEventListener

Using addEventListener is the modern way. This method allows to register as many handlers as we need, and it's the one you will find mostly used in the wild

window.addEventListener('load', () => {
  //window loaded
})

document.querySelector('div').addEventListener('click', () => {
  //
})

## The Event object

An event handler gets an `Event` object as the first parameter:
This object contains a lot of useful properties and methods, like:

- `target`, the DOM element that originated the event
- `type`, the type of event
- `stopPropagation()`,

const link = document.getElementById('my-link')
link.addEventListener('click', event => {
  // link clicked
})

const link = document.getElementById('my-link')
link.addEventListener('mousedown', event => {
  // process the event
  // ...

  event.stopPropagation()
})

See list of mouse events, touch events, keyboard events

//FLAVIO JS BITS

const list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

list.sort((a, b) => (a.color > b.color) ? 1 : -1)

//becomes this

[
  { color: 'black', size: 'M' },
  { color: 'red', size: 'XL' },
  { color: 'white', size: 'XXL' }
]



const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54, //made up
}

const { firstName, actor, age } = person
console.log(firstName)

const printNameAndAge = ({ name,age }) => {
  console.log(name,age)
}

const man = {
  name: 'Harry',
  age: 65
}
//printNameAndAge(man)
printNameAndAge({name: 'Harry', age: 70})//Harry 70

const numbers = [8, 9, 6,10, 3];
const clonedNumbers = [...numbers]
console.log(clonedNumbers);//[8, 9, 6,10, 3];"

********************

const id = setTimeout(() => {
  console.log("Hi!");
}, 2000)//says Hi once after 2 s

clearTimeout(id);//stops it doing so

setTimeout(() => {
  console.log(5+3)
}, 3000);//8

const timer = setInterval(() => {
  console.log(40 * 90)
}, 3000)//3600 every 3s unless below

clearInterval(timer)


//PROMISES

let done = false;
const isFinished = new Promise ((resolve, reject) => {
  if(done) {
    const workDone = "work done";
    resolve(workDone);
  } else {
    const notDone = "still working on it...";
    reject(notDone);
  }
})
isFinished//Promise { <rejected> 'still working on it...' }
//isFinished() doesn't work but without does

let happy = true;
const mood = new Promise((resolve, reject) => {
  if(happy) {
    resolve("Happy face!");
  } else {
    reject ("Sad face");
  }
})
mood//Promise { 'Happy face!' }




const btn = document.querySelector("#button");

//nb e object has methods/properties like target and type
btn.addEventListener("click", e => console.log(e));
btn.addEventListener("click", e => console.log(e.target));//button
btn.addEventListener("mousedown", e => console.log(e.type));//click


//LOGGING KEY EVENTS

const log = e => {
  //create a tr element
  const tr = document.createElement('tr');
  //create a td element/let as need multiple 
  let td = document.createElement('td');
  //what is inside td
  td.innerHTML = e.key;
  //append td to tr
  tr.appendChild(td);
  //append it all to tbody

  td = document.createElement('td');
  td.innerHTML = e.code;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = e.altKey ? ':)' : ':(';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = e.code;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = e.ctrlKey ? ':)' : ':(';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = e.metaKey ? ':)' : ':(';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = e.shiftKey ? ':)' : ':(';
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = e.repeat ? ':)' : ':(';
  tr.appendChild(td);



  document.querySelector('tbody').appendChild(tr);
}

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('keyup', e => {
    log(e)
  })
})

const url = `http://api.github.com/users/flaviocopes`;
const github = document.querySelector("#github");

/*const getData = async () => {
  try {
    const response = await fetch(url);
    console.log(response.headers.get('Content-Type'));//json utf-8
    console.log(response.headers.get('Date'));//null body status
    console.log(response.status);//200 - ok status
    console.log(response.url);//get the url above
    const data = await response.json();
    console.log(data)
    github.innerHTML = data.avatar_url;


  } catch (e) {
    console.log(e)
  }
}
getData()//or

fetch('http://api.github.com/users/AnnieCat73').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})//or

(async () => {
  try {
    const response = await fetch('http://api.github.com/users/AnnieCat73');
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
})()

const clickBtn = document.querySelector("#click");

clickBtn.addEventListener('click', e => {
  console.log(e)
})



const catImage = document.querySelector("#cat_result");
const dogImage = document.querySelector("#dog_result");

const catBtn = document.querySelector("#cat_btn");
const DogBtn = document.querySelector("#dog_btn");

DogBtn.addEventListener('click', e => {
  getDog();
})

catBtn.addEventListener('click', e => {
  getCat();
})

const getDog = async function () {
  const response = await fetch('https://random.dog/woof.json');
  console.log(response);
  const data = await response.json();
  //console.log(data.url)
  dogImage.innerHTML = `<img src=${data.url} >`;
}

const getCat = async () => {
  const response = await fetch('https://aws.random.cat/meow')
  const data = await response.json();
  console.log(response)
  catImage.innerHTML = `<img src=${data.file} >`;
}*/

/******************************* 

const gitImg = document.querySelector("#git-img")
const gitInfo = document.querySelector('#info')

const getMyGithub = async () => {
  try {
    const response = await fetch('http://api.github.com/users/AnnieCat73');
    console.log(response);
    const data = await response.json();
    console.log(data)
    gitImg.innerHTML = `<img src=${data.avatar_url} >`
    gitInfo.innerHTML = `
      <h2>${data.name}</h2>
      <a>${data.blog}</a>
      <p>${data.bio}</p>
      <p>${data.location}</p> `

  } catch (e) {
    console.log(e)
  }
}
getMyGithub()


const text = document.querySelector("#text");
const styleBtn = document.querySelector("#jsstyle");

styleBtn.addEventListener('click', e => {
  console.log(e.currentTarget)
  text.style.fontSize = "2rem";
  text.style.color = "green";
  text.style.fontWeight = "bold";

})

//const lname = document.querySelector("#lname")
const fname = document.querySelector("#fname")

function getInputValue() {
  let lname = document.querySelector("#lname").value;
  alert(lname)
  console.log(lname)
}
getInputValue()

const paragraph = document.querySelector('#para');

function setBackground() {
  if (paragraph.style.backgroundColor = "transparent") {
    setInterval(() => {
      paragraph.style.backgroundColor = "green";
    }, 10000)
  } else {
    paragraph.style.backgroundColor = "transparent";
  }
}
setBackground()

const table = document.querySelector('#sampleTable');
console.log(table)

function addRow(row) {
  let tr = document.createElement('tr');
  tr.innerHTML = `
    <td>Row3 Cell1</td>
    <td>Row3 Cell2</td>`;
  table.appendChild(tr);

}
addRow()*/

//Array

const array = [];
let newArray = ["pots", "pan", "knives"];

let people = [
  'Franklin Roosevelt',
  'Thomas Edison',
  'Benjamin Franklin'
]

const franklin = people[0];
let thomas = people[1];
thomas = "Thomas Edison, Iventor of the lightbulb"
//Thomas Edison, Iventor of the lightbulb


//Destructuring

// Getting values from objects
const person = {
  firstName: 'Zell',
  lastName: 'Liew'
}

const firstName = person.firstName
const lastName = person.lastName

const person = {
  firstName: 'Zell',
  lastName: 'Liew'
}

const { firstName, lastName } = person

//Arrays

const numbers = [22, 99, 100]
const [firstNumber, secondNumber] = numbers

/*If there are not enough items in the array, the destructured variable will remain undefined.*/

const numbers = [22]
const [firstNumber, secondNumber] = numbers

console.log(secondNumber) // undefined


