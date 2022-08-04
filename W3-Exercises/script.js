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