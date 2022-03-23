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

*/
