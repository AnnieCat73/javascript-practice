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