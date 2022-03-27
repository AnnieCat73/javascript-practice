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


*/
