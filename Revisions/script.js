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

*/