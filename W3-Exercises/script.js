/*1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepend = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepend === ' PM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = ' Noon';
  }
  else {
    hour = 12;
    prepend = ' PM';
  }
}
if (hour === 0 && prepend === ' AM ') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = ' Midnight';
  }
  else {
    hour = 12;
    prepend = ' AM';
  }
}
console.log(`Current Time : ${hour}${prepend} : ${minute} : ${second}`);

//Today is : Monday. script.js:8:9
//Current Time : 6 AM  : 16 : 5

function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));


/*Write a JavaScript program to generate a random hexadecimal color code.

Use Math.random() to generate a random 24-bit (6 * 4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal string using Number.prototype.toString(16).*/

const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code());//#8353e0


/*Write a JavaScript program to target a given value in a nested JSON object, based on the given key.

Use the in operator to check if target exists in obj.
If found, return the value of obj[target].
Otherwise use Object.values(obj) and Array.prototype.reduce() to recursively call dig on each nested object until the first matching key/value pair is found */

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);

const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};

const dog = {
  "status": "success",
  "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));
//some data script.js:84:9
//undefined script.js:85:9
//https://images.dog.ceo/breeds/african/n02116738_1105.jpg


/*Write a JavaScript program to remove specified elements from the left of a given array of elements.*/

function remove_from_left(arr, n = 1) {
  return arr.slice(n);
}
console.log(remove_from_left([1, 2, 3]));//Array [ 2, 3 ]
console.log(remove_from_left([1, 2, 3], 1));//Array [ 2, 3 ]
console.log(remove_from_left([1, 2, 3], 2));//Array [ 3 ]
console.log(remove_from_left([1, 2, 3], 4));//Array []


//Write a JavaScript program to decapitalize the first letter of a string.

const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
console.log(decapitalize('W3resource'))
console.log(decapitalize('Red', true));//rED

//Write a JavaScript program to test the first character of a string is uppercase or not.

function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  }
  else {
    console.log("String's first character is not uppercase");
  }
}
upper_case('Abcd');//String's first character is uppercase
upper_case('abcd');//String's first character is not uppercase


//Write a JavaScript program that accept two integers and display the larger.

let num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
}
else
  if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
  }
  else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
  }


//Write a JavaScript program to convert a value to a safe integer.

const toSafeInteger = num =>
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
console.log(toSafeInteger('5.2'));//5
console.log(toSafeInteger('5.52'));//6
console.log(toSafeInteger(Infinity)); //9007199254740991


//Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number.

decToBho = function (n, base) {

  if (n < 0) {
    n = 0xFFFFFFFF + n + 1;
  }
  switch (base) {
    case 'B':
      return parseInt(n, 10).toString(2);
      break;
    case 'H':
      return parseInt(n, 10).toString(16);
      break;
    case 'O':
      return parseInt(n, 10).toString(8);
      break;
    default:
      return ("Wrong input.........");
  }
}

console.log(decToBho(120, 'B'));//1111000
console.log(decToBho(120, 'H'));//78
console.log(decToBho(120, 'O'));//170


//Write a JavaScript function to generate a random integer.

rand = function (min, max) {
  if (min == null && max == null)
    return 0;

  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(rand(20, 1));//7
console.log(rand(1, 10));//2
console.log(rand(6));//5
console.log(rand());//0

//Write a JavaScript function to find the highest value in an array.

function max(input) {
  if (toString.call(input) !== "[object Array]")
    return false;
  return Math.max.apply(null, input);
}

console.log(max([12, 34, 56, 1]));//56
console.log(max([-12, -34, 0, -56, -1]));//0

//Write a JavaScript function to find the lowest value in an array.

function min(input) {
  if (toString.call(input) !== "[object Array]")
    return false;
  return Math.min.apply(null, input);
}

console.log(min([12, 34, 56, 1]));//1
console.log(min([-12, -34, 0, -56, -1]));//-56


//Write a JavaScript program to get the width and height of the window (any time the window is resized).


function getSize() {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  // put the result into a h1 tag
  document.getElementById('wh').innerHTML = "<h1>Width: " + w + " â€¢ Height: " + h + "</h1>";
}


//Write a JavaScript function to format a number up to specified decimal places.

function decimals(n, d) {
  if ((typeof n !== 'number') || (typeof d !== 'number'))
    return false;
  n = parseFloat(n) || 0;
  return n.toFixed(d);
}
console.log(decimals(2.100212, 2));//2.10
console.log(decimals(2.100212, 3));//2.100
console.log(decimals(2100, 2));//2100.00


//Write a JavaScript function to subtract elements from one another in an array.

function subtraction(arr) {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++) {
      if (typeof (arr[i]) === 'number') {
        total -= arr[i];
      }
      else
        return false;
    }
    return total;
  }
  else
    return false;
}
console.log(subtraction([7, 3, 2, -1]));//3


/*Write a JavaScript function to get the current date.

var curday = function (sp) {
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return (mm + sp + dd + sp + yyyy);
};
console.log(curday('/'));
console.log(curday('-'));


/*Write a pattern that matches e-mail addresses.

The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character .( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other*/

function is_email(str) {
  // Scott Gonzalez: Email address validation

  regexp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_email("admin@example.com"));//true
console.log(is_email("mysite@.org.org "));//false


/*Write a JavaScript function to get the values of First and Last name of the following form.

<head>
<meta charset=utf-8 />
<title>Return first and last name from a form - w3resource</title> 
</head><body>
<form id="form1" onsubmit="getFormvalue()">
First name: <input type="text" name="fname" value="David"><br>
Last name: <input type="text" name="lname" value="Beckham"><br>
<input type="submit" value="Submit">
</form>
</body>
*/

function getFormvalue() {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != 'Submit') {
      console.log(x.elements[i].value);
    }
  }
}//David Beckham


//Write a JavaScript program that works as a trim function (string) using regular expression.

function Trim(str) {
  let result;
  if (typeof str === 'string') {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else {
    return false;
  }
}
console.log(Trim(' w3resource '));//w3resource


//Write a JavaScript program to search a date within a string.

function is_dateString(str) {
  regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_dateString("01/01/2015"));//true

console.log(is_dateString("01/22/2015"));//true

console.log(is_dateString("32/01/2015"));//false


// Write a JavaScript function to check whether a given value is an valid url or not.

function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_url("http://www.example.com"));//true
console.log(is_url("https://www.example.com"));//true
console.log(is_url("www.example.com"));//false



//Write a JavaScript function to check whether a given value is alpha numeric or not.

function is_alphaNumeric(str) {
  regexp = /^[A-Za-z0-9]+$/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_alphaNumeric("37828sad"));//true

console.log(is_alphaNumeric("3243#$sew"));//false


//Write a JavaScript function to check whether a given value is time string or not.


function is_timeString(str) {
  regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_timeString("11:35:30"));//true

console.log(is_timeString("90:90:90"));//false


//Write a JavaScript function to check whether a given value is UK Post Code or not

function is_ukPostCode(str) {
  regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_ukPostCode("B294HJ"));//true

console.log(is_ukPostCode("7892"));//false


//Write a JavaScript function to check whether a given value is hexadecimal value or not.


function is_hexadecimal(str) {
  regexp = /^[0-9a-fA-F]+$/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_hexadecimal("ffffff"));//true

console.log(is_hexadecimal("fz5500"));//false


//Write a JavaScript function to check whether a given value is hexcolor value or not. 

function is_hexcolor(str) {
  regexp = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_hexcolor("#444"));//true

console.log(is_hexcolor("#3333"));//false


//Write a JavaScript function to check whether a given value represents a domain or not

function is_domain(str) {
  regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_domain('www.example.com'));//true

console.log(is_domain('www.npm.co.uk'));//true

console.log(is_domain('http://www.example.com'));//false

console.log(is_domain('https://www.example.com'));//false

console.log(is_domain('www.example.com'));//true


//Write a JavaScript function to check whether a given value is html or not.

function is_html(str) {
  regexp = /<([a-z]+) *[^/]*?>/;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_html(''));//false

console.log(is_html(''));//false

console.log(is_html('.selector'));//false


//Write a JavaScript function to check a given value contains alpha, dash and underscore. 

function is_alphaDash(str) {
  regexp = /^[a-z0-9_\-]+$/i;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_alphaDash('12-133'));//true

console.log(is_alphaDash('100_23'));//true


//Write a JavaScript function to print an integer with commas as thousands separators.

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

console.log(thousands_separators(1000));//1,000
console.log(thousands_separators(10000.23));//10,000.23
console.log(thousands_separators(100000));//100,000


//Write a JavaScript function to validate whether a given value type is boolean or not. 

function is_boolean(value) {
  return value === true || value === false || toString.call(value) === '[object Boolean]';
}

console.log(is_boolean(true));//true

console.log(is_boolean('bar'));//false


//Write a JavaScript function to validate whether a given value type is error or not.

function is_Error(input) {
  return input instanceof Error || toString.call(input) === '[object Error]';
}

console.log(is_Error(new Error('foo')));//true
console.log(is_Error(100));//false
console.log(is_Error('foo'));//false


//Write a JavaScript function to validate whether a given value type is NaN or not.

function is_nan(val) {
  return val !== val;
}

console.log(is_nan(NaN));//true

console.log(is_nan('bar'));//false


//Write a JavaScript function to validate whether a given value type is null or not.

function is_null(val) {
  return val === null;
}

console.log(is_null(null));//true

console.log(is_null('bar'));//false


//Write a JavaScript function to validate whether a given value is number or not.

function is_number(value) {
  return !isNaN(value) && toString.call(value) === '[object Number]';
}

console.log(is_number(NaN));//false

console.log(is_number(42.32));//true

console.log(is_number(72));//true


// Write a JavaScript function to validate whether a given value is object or not

function is_object(value) {
  var datatype = typeof value;
  return datatype === 'function' || datatype === 'object' && !!value;
}

console.log(is_object({ name: 'Robert' }));//true

console.log(is_object('bar'));//false

console.log(is_object(72));//false


//Write a JavaScript function to validate whether a given value is object or not.

function is_object(value) {
  var datatype = typeof value;
  return datatype === 'function' || datatype === 'object' && !!value;
}

console.log(is_object({ name: 'Robert' }));//true

console.log(is_object('bar'));//false

console.log(is_object(72));//false


//Write a JavaScript function to validate whether a given value type is pure json object or not. 

function is_json(value) {
  return toString.call(value) === '[object Object]';
}

console.log(is_json({ name: 'Robert' }));//true

console.log(is_json('bar'));//false

console.log(is_json(72));//false


//Write a JavaScript function to validate whether a given value is RegExp or not. 

function is_regexp(value) {
  return toString.call(value) === '[object RegExp]';
}

console.log(is_regexp(/test/));//true

console.log(is_regexp('bar'));//false

console.log(is_regexp(72));//false


//Write a JavaScript function to validate whether a given value type is char or not. 

function is_char(value) {
  if (Object.prototype.toString.call(value) !== '[object String]')
    return false;
  return value && value.length === 1;
}

console.log(is_char('f'));//true
console.log(is_char('*'));//true

//Write a JavaScript function to check a given value contains alpha, dash and underscore. 

function is_alphaDash(str) {
  regexp = /^[a-z0-9_\-]+$/i;

  if (regexp.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

console.log(is_alphaDash('12-133'));//true

console.log(is_alphaDash('100_23'));//true

//Write a JavaScript function to print an integer with commas as thousands separators.

function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

console.log(thousands_separators(1000));//1,000
console.log(thousands_separators(10000.23));//10,000,23
console.log(thousands_separators(100000));//100,000

//Write a JavaScript program that accept two integers and display the larger.

//var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
  console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
}
else
  if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
  }
  else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
  }

//Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 

var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
}
else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
}
else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
}
else {
  console.log("The sign is -");
}//The sign is -


//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1

var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  }
  else {
    console.log(x + ", " + z + ", " + y);
  }
}
else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  }
  else {
    console.log(y + ", " + z + ", " + x);
  }
}
else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  }
  else {
    console.log(z + ", " + y + ", " + x);
  }
}
//4, 0, -1


//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (var x = 0; x <= 15; x++) {
  if (x === 0) {
    console.log(x + " is even");
  }
  else if (x % 2 === 0) {
    console.log(x + " is even");
  }
  else {
    console.log(x + " is odd");
  }
}

/*
0 is even
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
11 is odd
12 is even
13 is odd
14 is even
15 is odd*/


// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log(i + " Fizz");
  }
  else if (i % 5 === 0) {
    console.log(i + " Buzz");
  }
  else {
    console.log(i);
  }
}

/*
1
2
3 Fizz
4
5 Buzz
6 Fizz
7
8
9 Fizz
10 Buzz
11
12 Fizz
13
14
15 FizzBuzz
16
17
18 Fizz
19
20 Buzz
21 Fizz
22
23
24 Fizz
25 Buzz
26
27 Fizz
28
29
30 FizzBuzz
31
32
33 Fizz
34
35 Buzz
36 Fizz
37
38
39 Fizz
40 Buzz
41
42 Fizz
43
44
45 FizzBuzz
46
47
48 Fizz
49
50 Buzz
51 Fizz
52
53
54 Fizz
55 Buzz
56
57 Fizz
58
59
60 FizzBuzz
61
62
63 Fizz
64
65 Buzz
66 Fizz
67
68
69 Fizz
70 Buzz
71
72 Fizz
73
74
75 FizzBuzz
76
77
78 Fizz
79
80 Buzz
81 Fizz
82
83
84 Fizz
85 Buzz
86
87 Fizz
88
89
90 FizzBuzz
91
92
93 Fizz
94
95 Buzz
96 Fizz
97
98
99 Fizz
100 Buzz*/


/*According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers.*/

function happy_number(num) {
  var m, n;
  var c = [];

  while (num != 1 && c[num] !== true) {
    c[num] = true;
    m = 0;
    while (num > 0) {
      n = num % 10;
      m += n * n;
      num = (num - n) / 10;
    }
    num = m;
  }
  return (num == 1);
}

var cnt = 5;
var num = 1;
var f5 = '';
while (cnt-- > 0) {
  while (!happy_number(num))
    num++;
  f5 = f5 + (num + ", ");

  num++;
}
console.log('First 5 happy numbers are : ' + f5);

//First 5 happy numbers are : 1, 7, 10, 13, 19,


//Write a JavaScript program to find the armstrong numbers of 3 digits.

function three_digit_armstrong_number() {
  for (var i = 1; i < 10; ++i) {
    for (var j = 0; j < 10; ++j) {
      for (var k = 0; k < 10; ++k) {
        var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
        var plus = (i * 100 + j * 10 + k);
        if (pow == plus) {
          console.log(pow);
        }
      }
    }
  }
}
three_digit_armstrong_number();
//153
//370
//371
//407


//Write a JavaScript program to construct the following pattern, using a nested for loop



var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + ("*");
  }
  console.log(chr);
  chr = '';
}

/*
undefined
*
**
***
****
*****
*/

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
  }
}
console.log(sum);//233168


//1. Write a JavaScript function to check whether an `input` is an array or not.

is_array = function (input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;
};
console.log(is_array('w3resource'));//false
console.log(is_array([1, 2, 4, 0]));//true


//Write a JavaScript function to clone an array. 

array_Clone = function (arra1) {
  return arra1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));//Array(4) [ 1, 2, 4, 0 ]
console.log(array_Clone([1, 2, [4, 0]]));//Array(3) [ 1, 2, (2) […] ]

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

console.log(first([7, 9, 0, -2]));//7
console.log(first([], 3));//[]
console.log(first([7, 9, 0, -2], 3));//[7, 9, 0]
console.log(first([7, 9, 0, -2], 6));//[7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3));//[]