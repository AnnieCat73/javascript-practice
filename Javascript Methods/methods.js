/*Day #1 - split()

//split(separator, limit)

//splits a string into an array of substrings/so from string to array
//separator - (,) (&) or if left empty () returns it as 1 array
//limit - no of splits
//console.log(`Today was a very good day!`);//string
//console.log(['Today', 'was', 'a', 'very', 'good', 'day!'])//array

const today = `Today was a very good day!`;
today.split(" ", 3);
console.log(today);//['Today','was', 'a'];

const string = "This is going to be fun!";
string.split();
console.log(string.split());//#array ["This is going to be fun!"]
console.log(string.split(""));//[
    "T",
    "h",
    "i",
    "s",
    " ",
    "i",
    "s",
    " ",
    "g",
    "o",
    "i",
    "n",
    "g",
    " ",
    "t",
    "o",
    " ",
    "b",
    "e",
    " ",
    "f",
    "u",
    "n",
    "!"
  ]

console.log(string.split(" "));//[
    "This",
    "is",
    "going",
    "to",
    "be",
    "fun!"
  ]

console.log(string.split("g"));/*[
    "This is ",
    "oin",
    " to be fun!"
  ]
console.log(string.split("g", 2));//["This is ","oin"]

const tricky = "goshgoshgoshgoshgoshgoshgoshgosh";
console.log(tricky.split("sh", 7));/*[
    "go",
    "go",
    "go",
    "go",
    "go",
    "go",
    "go"
  ]*


//Day #2 - slice(start, end) - ARRAYS -slices out what you tell it to

//NB (start, end)- start inclusive in what you get but end isn't
//so slices right before it ended

const array = ["fire", "water", "ice", "steam", "sand", "grass"];

//console.log(array.slice(0, 4));
//console.log(array.slice(3));//here starts at 3["steam", "sand", "grass"]

//Get last one
//console.log(array.slice(5));//[grass]
//console.log(array.slice(-1));//[grass]
//console.log(array.slice(-2));//["sand" "grass"]//give you last 2 at end

//get water, ice and steam with 2 - nos
console.log(array.slice(-5, -2));

//Day #3 - slice(), substring(), substr()


function myFunction(num1, num2) {

  return num1 + num2;
}
console.log(myFunction(1, 2));

/*Substrings

A substring is a part or a portion of a string. For example, "rain"
is a substring of the string "brain" because you can get "rain" by
taking the last 4 characters.

someString.substring(indexStart, indexEnd); //first character you like

to include and last character you like to ignore SO like slice()

Do not use the .substr method as it's deprecated and works differently. Always use the
.substring method.

The indexEnd parameter is optional, which means you can pass the indexStart and it'll assume the indexEnd to be the same as the string length. Here's an example:
language.substring(4); //"Script"*/

//Day #4 - slice() as a string method/slicing characters
//slice(startchar, endcharnotincluded) - whitespaces counts


//substring() - same as slice but can't accept negative values*/

const string = "This is day three";

const string2 = "Now it's my turn to try it out!";
console.log(string2.slice(27, 30));//out
console.log(string2.slice(-2));//t
console.log(string2.substring(0, 7));//Now it'


//Good one so capitalise a name
function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();

}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"


//Day #4
//reverse() - reverses an array with no parameters
//join() - joins elements of an array into a string and returns a string
//one parameter, separator so join(&) //default is ,

const array3 = ["r", "e", "t", "u", "p", "m", "o", "c"];
console.log(array3.reverse());//computer

console.log(array3.join());//c,o,m,p,u,t,e,r = into string sep by ,
console.log(array3.join("-"));//c-o-m-p-u-t-e-r
console.log(array3.join("&"));//c&o&m&p&u&t&e&r
console.log(array3.join(", and"));//c, ando, andm, andp, andu, andt, ande, andr
console.log(array3.join(" "));//c o m p u t e r
console.log(array3.join("] ["));//c] [o] [m] [p] [u] [t] [e] [r


//reverse this string
const task = "tnellecxe";

//1 turn into an array as reverse only for array
const taskArray = task.split("");//want no space between
console.log(taskArray);// [ "t", "n", "e", "l", "l", "e", "c", "x", "e" ]

//2 Reverse the new array with reverse()
const taskReverse = taskArray.reverse();
console.log(taskReverse);// [ "e", "x", "c", "e", "l", "l", "e", "n", "t" ]

//3 Then join it into a string
const taskFinalString = taskReverse.join("");
console.log(taskFinalString);//excellent



//Turn into "Great work today!"
const today = "today work Great!";

//1 - split every word into an array
const splitArray = today.split(" ");
console.log(splitArray);// Array [ "today", "work", "Great!" ]

//2 then reverse the Array
const reverseSplitArray = splitArray.reverse();
console.log(reverseSplitArray);//Array  [ "Great!", "work", "today" ]

//3 Then join it into a string
const splitArrayString = reverseSplitArray.join(" ");
console.log(splitArrayString);

//GOOD EXERCISES
function getNumberOfChars(name) {
  // number of characters in: name
  return name.length;
}


function getFirstChar(name) {
  // first character of: name
  return name[0];
}

function getFirstChar(name) {
  // last character of: name
  return name[name.length - 1];
}


function getLower(name) {
  // name all in lower case (example: "ABC" becomes "abc")
  return name.toLowerCase();
}

function getUpper(name) {
  // name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();
}

function getCapitalized(name) {
  // capitalized version of name (example: "alEX" becomes "Alex")
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

//Day #5 shift(), unshift(), pop(), push() - array
//shift and pop -removes
//unshift and pop - adds

//NB

const array = [1, 2, 3, 4, 5];
const storedShiftElement = array.shift();
console.log(storedShiftElement);//1 so shift creates a new array with '1'and can store that in a variable
(array.unshift(1));//adds it back again
console.log(array)//[ 1, 2, 3, 4, 5 ]
console.log(array.unshift());//5 - returns the amount of elements in the array

array.pop();//takes 5 out of array and can store it
const poppedElement = array.pop();
console.log(poppedElement);//5
array.push(5);// pushes it back onto the array
array.push();//returns 5 elements in the array

//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)
export function getNextAge(age) {
  return Number.parseInt(age, 10) + 1; //10 is radix
}



//Day #6 - charAt(), indexOf(), lastIndexOf()
