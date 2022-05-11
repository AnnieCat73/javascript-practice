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


//Nested object properties, here company is*/

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
const { name } = company;//Google*/

//How to get California
const { company } = person;
const { address } = company;
console.log(address)//Object { state: "California" }






