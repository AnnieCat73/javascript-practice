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
]

const newString = "I am an example right here! Hello! Hello!";
console.log(newString.split());//["I am an example right here!]
console.log(newString.split(""));//
console.log(newString.split(" "));//
console.log(newString.split(" ", 4));//["I", "am", "an", "example"]
console.log(newString.split("x"));//["I am an e", "ample right here"]
console.log(newString.split(","));

/*Day #2 - slice(start, end) - ARRAYS -slices out what you tell it to

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


/*substring() - same as slice but can't accept negative values

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
const groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"

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
console.log(splitArrayString);*/

const myString = "tnellecxe";
const intoArray = myString.split("");//HAS TO HAVE THIS TO REVERSE IT!
console.log(intoArray);//["t", "n", "e", "l", "l", "e", "c", "x","e"]
const intoReverse = intoArray.reverse();//["e","x","c", "e", "l", "l", "e", "n", "t"]
console.log(intoReverse);
const intoString = intoReverse.join("");
console.log(intoString);//excellent



/*GOOD EXERCISES
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

/************************************************************ *
//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)
export function getNextAge(age) {
  return Number.parseInt(age, 10) + 1; //10 is radix
}
/************************************************************ 


//Day #6 - charAt(), indexOf(), lastIndexOf()- STRINGS ONLY
//charAt(index) - returns the char at specified index of a string
//charAt(15); - returns letter at index 15
//SO WHICH POSITIONS IS A CHARACTER AT - USE charAt() method

const position = "I want to search for positions within this string.";
position.charAt(15);//h
//or store it in a variable
const position15 = position.charAt(15);
console.log(position15);

//indexOf() - gives us the position of the value so opposite of charAt()
//indexOf(what you are searching for, startingindex - optional)

const sleep = "I am going to go to sleep after this.";
sleep.indexOf("g");
const indexG = sleep.indexOf("g");
console.log(indexG);//5 - includes whitespace

console.log(sleep.indexOf("after"));//26
console.log(sleep.indexOf("to", 5));//11

/************************************************************ 
//lastIndexOf(as indexOf) - finding the last occurence of f.ex to above string
sleep.lastIndexOf("to");//17


//NB IT COUNTS BACKWARDS BUT RETURNS TO US THE INDEX STARTING AT THE BEGINNING IF USING STARTING INDEX
sleep.lastIndexOf("g", 2);//-1 - as so starts counting from index 2 but counts from left and no g so returns -1

sleep.lastIndexOf("g", 28);//14


//String(), toString(), toFixed(), Number(), parseFloat(), parseInt()

//Numbers to strings - toString(), String(), toFixed()

const numberToString = 500;
const newString = numberToString.toString();//"500" = string 500
console.log(typeof newString);//string

String(numberToString);//"500" - this is a method

const money = 3;
const moneyString = money.toFixed(2);//"3.00"
/************************************************************ 
const money1 = 3.22
money.toFixed(4);//3.2200
money.toFixed(0);//"3" - rounds down

const money3 = 3.75;
money3.toFixed(0);//4 - rounds up

//Strings to numbers

Number("10"); //10 - number
const number2 = "45";
Number(number2);//45
/************************************************************ 
//parseInt() - parses a string and returns a whole no//NB ONLY ROUNDS DOWN

const decimal = "3.22";
parseInt(decimal);//3 - number 3

//parseFloat() - parses a string and returns a number//NB USE THIS ONE IF WANT TO KEEP DECIMAL PLACES

parseFloat("3.45");//3.45 - the number but keeps decimals
/************************************************************ 

//GOOD EXERCISE
export function getNextAge(age) {
  return Number(age) + 1;
}//so if your are 10 then next year you are 11

export function getNextAge(age) {
  if (age === "") {
    return 0;
  }

  return Number.parseInt(age, 10) + 1;
}//same as above but if you entered empty string it will return 0

function getDescription(text) {
  if (text.length > 10) {
    return text.substring(0, 10) + "...";
  }
  return text;
}//RETURNS FIRST 10 CHARACTERS BUT IF LESS THAN 10 RETURNS SHORT STRING



// Day #8 Math.round(), Math.ceil(), Math.floor(), Math.max(), Math.min()
//Math methods that you can call on this object

const number12 = 12.8;
Math.round(number12);//13 - round to nearest integer
Math.ceil(number12)//13 - rounds up
console.log(Math.floor(number12));//12 - rounds down


Math.min(4, 2, 9);//2
Math.max(4, 2, 9);//9
/************************************************************ 
const array12 = [3, 2, 5.4, 10, 3.2, 11, 20, 1, 0];
Math.min(array12);//nan but in es6 use spread operator
Math.min(...array12);//0
Math.max(...array12);//20 *****************

//GOOD EXERCISE

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
/************************************************************ 
sumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum = sum + grade;
    // or
    // sum += grade
  });
  return sum;
}
// Sample usage - do not modify
console.log(sumGrades([15, 5, 10])); // 30
console.log(sumGrades([12, 10, 13, 19])); // 54

// Day #9 - forEach

//forEach() method executes a provided function once for each array element

//const numbers14 = [5, 4, 3, 2, 1, 0];

//Step 1
//numbers14.forEach()

//step 2 - insert a callback function i.e the function we are calling on each element
//numbers14.forEach(function () {

//})

//step 3 - pass the element as the iterator, i.e what represents each element here it's number but can call it anything like element
//numbers14.forEach(function (number) {

//})

//step 4 - make our function do something
//numbers14.forEach(function (number) {
// console.log(number);
//})//5, 4, 3, 2, 1, 0

const numbers14 = [5, 4, 3, 2, 1, 0];
const newNumbers = [];

numbers14.forEach(function (number) {
  newNumbers.push(number);
})

console.log(newNumbers);//[5, 4, 3, 2, 1, 0]

function sumFunction(x) {
  x = x * 3;
  console.log(x);
}

numbers14.forEach(sumFunction);//should multiply all numbers in numbers14 array by 3
//15, 12, 9, 6, 3, 0

//ADVANCED forEach() - with 2 more arguments so 3 parameters

//1 element as used above
//2 index - the array index of the current element - optional
//3 arr - the original array object - optional/rarely used

const numbers15 = [5, 4, 3, 2, 1, 0];
numbers15.forEach(function (number, index, arr) {
  //console.log(number, index, arr)
  console.log('Element: ' + number + 'Index: ' + index + 'arr:' + arr)
})//f.ex Element: 4 Index: 1 arr:5,4,3,2,1,0

const fruit = ["kiwi", "apple", "banana", "pear", "grapes", "lime", "orange", "lemon"];
fruit.forEach(function (fruit, index) {
  console.log(`${fruit} is in index ${index}`);
})//so orange is in index 5
/************************************************************ 
  .forEach(callback) iterates over every item in an array.
A callback is a function definition passed as an argument to another function.
Always start with a console.log() inside the.forEach() to visualize the shift from array to array item(you can skip that when you become used to it).
  The.forEach() method will take your function definition and call it for every item of the array.Every time it calls it, it will replace the first parameter with the corresponding array item.
Name your arrays in plural and the array item(inside the.forEach()) in singular.
Make sure to correctly place the return inside a function that contains a.forEach().

//GOOD EXERCISES
function sumPositiveNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    if (number >= 0) {
      sum = sum + number;
    }
  });
  return sum;
}
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
/************************************************************ 

//it returns the sum of all the odd numbers from the numbers
//parameter it receives. The function should also work for negative numbers.
function sumOddNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    if (number % 2 !== 0) {
      sum = sum + number;
    }
  });
  return sum;

}
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

//Day #10 - filter()
//creates a new array from the original array elements that have passed a condition, leaving out the ones that fail
//takes same parameter as forEach()

const age = [35, 14, 52, 21, 80, 18, 17];
const adult = age.filter(function (age) {
  return age >= 18;

})
console.log(adult);//[ 35, 52, 21, 80, 18]

//between 18 - 60
const btwnAge = age.filter(age => {
  return age >= 18 && age <= 60;
})
console.log(btwnAge);[35, 52, 21, 18];
//OR
function btwnAge1(age) {
  return age >= 18 && age <= 60;
}
const adult1 = age.filter(btwnAge1);

//with more parameters
//filter(element, index, arr)

//get index position for all elements 18 and up
const age3 = [35, 14, 52, 21, 11, 80, 18, 17];
age3.filter(function (age, index) {
  if (age >= 18) {
    console.log(index)
  }
})//0, 2, 3, 5, 6

//return all the days of the month after 15 - ex 22 has an index of 2
const dayOfTheMonth = [3, 15, 22, 2, 8, 30, 23];
const monthAfter15 = dayOfTheMonth.filter(function (day, index) {
  if (day > 15) {
    console.log(`${day} has an index of ${index}`);
  }
})
//22 has an index of 2 etc
//OR
function secondHalf(day, index) {
  if (day > 15) {
    console.log(`${day} has an index of ${index}`);
  }
}
dayOfTheMonth.filter(secondHalf);

//GOOD EXERCISES
function getDropdown(countries) {
  let html = `<option value="">Please select</option>`;
  countries.forEach(function (country) {
    html += `<option value="${country.toLowerCase()}">${country}</option>`;
  });
  return html;
}//fex [Netherlands, Japan, Mongolia]

//GOOD EXERCISE 

function getFreezingTemperatures(temperatures) {
  return temperatures.filter(function (temperature) {
    return temperature < 0;
  });

}
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]

let numbers = [9, 5, 14, 3, 11];
/************************************************************ 
// filter() ALWAYS returns an array
numbers.filter(function (number) {
  return number >= 12;
}); // [14]

// .find() returns the first match or undefined
numbers.find(function (number) {
  return number >= 12;
}); // 14

let numbers = [9, 5, 14, 3, 11];

// filter() ALWAYS returns an array (even if it's empty)
numbers.filter(function (number) {
  return number >= 15;
}); // []

// .find() returns the first match or undefined (when none of the items satisfy the condition)
numbers.find(function (number) {
  return number >= 15;
}); // undefined
/************************************************************ 
function getYear(years, searchYear) {
  return years.find(function (year) {
    return year === searchYear;
  });
}
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined

// Day #11 - map()
//Creates a new array and the results are going to be the results of calling a function for every array element
//like forEach??? but an important difference:
//forEach just iterates over an array and mutates things and doesn't return anything
//1)map() iterates over an array, transforms each element of the array and returns a new array with the transformed values
//Unlike filter() it is the same size and doesn't discard any elements
//The .map(callback) method allows you to transform an array into another one. Here are some common examples:

[4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array.
["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.

//map(element, index, arr)
const numbers17 = [0, 1, 2, 3, 4, 5];
const numbersMap = numbers17.map(function (number) {
  return number * 2;
})
console.log(numbersMap)//[1, 2, 4, 6, 8, 10]

//get squareroot of each number - Math.sqrt()
const numbers18 = [9, 16, 25, 400, 900];
const numbersSquare = numbers18.map(function (number) {
  return Math.sqrt(number);
})
console.log(numbersSquare);//[3,4,5,20, 30]
//or
const squareRootArray = numbers18.map(Math.sqrt);
console.log(squareRootArray);

const people = [
  { firstName: 'Jimmy', lastName: 'Brown' },
  { firstName: 'Mia', lastName: 'Knapp' },
  { firstName: 'Eloise', lastName: 'Kennedy' }
];

function listNames(name, index) {
  const fullNames = [name.firstName, name.Lastname];
  return fullNames;
}

people.map(listNames);
console.log(people);//get 3 arrays, 1 for each
//OR BETTER

function listNames(name, index) {
  const fullNames = [index + " : " + name.firstName, name.Lastname].join(" ");
  return fullNames;
}

const names = people.map(listNames);//Array(3)[0 : Jimmy Brown, 1 : Cindy Malcolm, 2 : Timothy Stumps]

//Day #12 - reduce() - executes a function for each value of the array, from left to right and reduces the array to a single value
//so iterates over an array and takes each element and reduces it to 1 value
//intial value is the value by which the accumulator will start on i.e it's specified
//if not inital value, the accumulator starts at the value of the first element

arrayExample.reduce(function (accumulator, element, index, array) {

}, initialValue);

//accumulator or acc  - a value that totals up the changes into a single value

//examples

const numbers20 = [0, 1, 2, 3, 4, 5, 6];
numbers20.reduce(function (acc, element) {
  return acc + element;
}, 8);//OR 
const numbers20Reduce = numbers20.reduce(function (acc, element) {
  return acc + element;
}, 8);
console.log(numbers20Reduce);//29

const population = [
  {
    state: "California",
    pop: 3978000,
  },

  {
    state: "Virginia",
    pop: 84112000,
  },

  {
    state: "Florida",
    pop: 20610000,
  },

  {
    state: "Maine",
    pop: 1331000,
  },
]

//Get total population of these 4 states
population.reduce(function (acc, element) {
  return element.pop + acc;
}, 0);//70133000

//reduceRight() - same as reduce but reduces the array elements from right to left instead of left to right*/


//GOOD EXERCISE

export function getNumberOfGrades(grades) {
  return grades.length;
}

/** return number of grades */
export function getSumGrades(grades) {
  let sum = 0;
  grades.forEach(function(grade) {
      sum += grade
  });
  return sum;
}

/** return sum of grades */
export function getAverageValue(grades) {
  return getSumGrades(grades) / grades.length;
}

/** get average value of grades */
export function getPassingGrades(grades) {
  return grades.filter(function(grade) {
      return grade >= 10;
  });
}

/** return all fainling grades 9 and below*/
export function getFailingGrades(grades) {
  return grades.filter(function(grade) {
      return grade < 10;
  });
}

/** return all the grades raised by 1 */
export function getRaisedGrades(grades) {
  return grades.map(function(grade) {
      if (grade + 1 > 20) {
          return 20;
      }
      return grade + 1;
  });
}


// return number of citizens that are allowed to vote. It's data from 2 arrays chain .length to get arrays of all ages =abpve 18
export function getVotersCount(ages) {
  console.log(ages);
  return ages.filter(function(age) {
      return age >= 18;
  }).length;

}
