//Strings to integers


/*Example 1
const numStr1 = "111";
const numStr2 = "222";

function addNumbers(numStr1, numStr2) {
  const str1 = Number(numStr1);
  const str2 = parseInt(numStr2)
  const total = str1 + str2;
  return total;
}
console.log(addNumbers(numStr1, numStr2));/333


//Example 2
const str3 = "1";
const str4 = "222";

const numStr3 = parseInt(str3);
const numStr4 = Number(str4);



function addNumbersAgain(numStr3, numStr4) {
  const totalNumbers = numStr3 + numStr4;
  return totalNumbers;

}
console.log(addNumbersAgain(numStr3, numStr4));//223*/

//Ternary

//const result = condition ? value1 : value2;


/*const y = 100;

y <= 100 ? console.log("y is 100") : console.log("y is greater than 100");//y is 100


const y = 100;
y <= 100
  ? y == 100
    ? console.log("y is 100")
    : console.log("y is less than 100")
  : console.log("y is greater than 100")

//y is 100 and same as

if (y <= 100) {
  if (y == 100) {
    console.log("y is 100");
  } else {
    console.log("y is less than 100");
  }
} else {
  console.log("y is greater than 100");
}

//y is 100*/

/*DATA TYPES AND OBJECT NESTING

//function x {} - function data type

//object example
const personYogi = {
  name1: "Sleepless Yogi",
  age: 30,
};

console.log(personYogi.name1);//or
console.log(personYogi["name1"]);
//destructuring
const { name1, age } = person;


//Nested object properties, here company is

const person = {
  name: "Sleepless Yogi",
  company: {
    name: "Google",
    address: {
      state: "California",
    },
    experience: 3
  }
};

//console.log(person.company.name);//Google]
//console.log(person["company"]["name"]);//Google

/*destructuring of the above. How to get to it
const { company } = person;
const { name } = company;//Google

//How to get California
const { company } = person;
const { address } = company;
console.log(address)//Object { state: "California" }

//Prime numbers - if divide a number by 2 get a whole number

function printPrimeNumbers(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}
//NOT QUITE UNDERSTANDING
console.log(printPrimeNumbers(2, 3, 5, 7, 11, 13, 17, 19, 23, 29))//true

var prime = function () {
  var num;
  for (num = 0; num < 11; num++) {
    if (num % 2 === 0) {
      break;
    }
    else if (num % 3 === 0) {
      break;
    }
    else if (num % 4 === 0) {
      break;
    }
    else if (num % 5 === 0) {
      break;
    }
    else if (num % 6 === 0) {
      break;
    }
    else if (num % 7 === 0) {
      break;
    }
    else if (num % 8 === 0) {
      break;
    }
    else if (num % 9 === 0) {
      break;
    }
    else if (num % 10 === 0) {
      break;
    }
    else if (num % 11 === 0) {
      break;
    }
    else if (num % 12 === 0) {
      break;
    }
    else {
      return num;
    }
  }
};
console.log(prime());*/


//OPTIONAL CHAINING PROPERTY

/*In real world applications objects get complicated with a lot of properties and nested properties
Often times some properties are defined for some objects but not for others
For example: some customers have their addresses updated on your site but some customers do not
Accessing such undefined properties can cause errors
These errors can be avoided using optional-chaining operator*

const student = {
  languages: [
    {
      javascript: {
        exertise: 10,
      }
    },
    {
      reactJs: null,
    },
  ]
};

//console.log(student.reactJs.expertise); error cannot read properties of undefined
//SO TO FIX IT use OPTIONAL CHAINING OPERATOR ?

//console.log(student.reactJS?.expertise);//undefined instead of error

//console.log(student.languages[1].reactJs.expertise);//error cannot read properties of undefined SO:

console.log(student.languages[1].reactJs?.expertise)//undefined


//compound interest = P (1 + R/)^(n t) - P

//principal amount (P) = 1000;
//time invested for (t) = 5;
//annual interest rate (R) = 5;
//number of time interested compounded (n) = 12;

/*let p = 1000;
let t = 5;
let r = .08;
let n = 12;

function calculateCompoundInterest(p, r, n, t) {
  return p(1 + r /) ^ (n t) - p;//needs reformulating
}
console.log(calculateCompoundInterest(1000, .8, 12, 5))*/


/*Switch Statements

You'd want to use switch statements when there are multiple conditions you want to check. So, instead of repeating if-else, if-else - just use a simple switch statement*/

let today = new Date().getDay();
//console.log(today)//6 i.e Sat

switch (today) {
  case 6:
    day = "Saturday";
    break;
  case 0:
    day = "Sunday";
    break;
  default:
    day = "Weekday";
}

console.log(day);//Saturday

//For loop with break and continue

for (let i = 0; i < 10; i++) {
  console.log(i); //prints 0 -9
}

//Loop starts at 0 and exectes 10 times
//When value of "i" is 5 - it breaks the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) { //so prints 0 - 4
    break;
  }
  console.log(i); //prints 0-4
}

//When value of "i" is 5 it skips the printing operation
//Instead continues with the next loop iteration
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);//so actually prints 0-9
}


