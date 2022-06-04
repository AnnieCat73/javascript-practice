/*Question #1:
How to define a class with properties and methods in 
JavaScript?

Answer 
A class declared with a name which acts as its identifier. We can use the name to create new objects using the keyword new*

class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
    this.stop = function () {
      console.log(`${this.model} has stopped running!`)
    }
  }//or
  start() {
    console.log(`${this.name} engine started`)
  }
}
const car1 = new Car("fiesta", "ford");
car1.start();
car1.stop();

const car2 = new Car("s", "tesla");
car2.start();
car2.stop();
//or

/*class HouseKeeper {
  constructor(yearsOfEperience, name, cleaningRepertoire) {
    this.yearsOfEperience = yearsOfEperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
      alert("Cleaning in progress!");
    }
  }
}
const houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
houseKeeper1.clean();)*/

/*Question #2:
How to implement class inheritance in JavaScript?

Answer 
A class can be extended by another class, and the new class will inherit all of its parent class methods. The object that initializes the child class will then be able to use methods from both classes.*

class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
    /*this.stop = function () {//THIS NO WORK HERE
      return "From parent stop function"
    }*
  }
  stop() {
    return "From parent stop function"
  }
  start() {
    return "From Parent Start Function"
  }

}

class ElectricCar extends Car {
  start() {
    const fromParent = super.start(); // calling parent class constructor 
    console.log(`${fromParent} Battery at 95%.`);
  }
  stop() {
    const fromParentAgain = super.stop();
    console.log(`${fromParentAgain} Stop the car!`)
  }
}
let tesla = new ElectricCar("Tesla", "Model 3");
let honda = new ElectricCar("Honda", "Model 5");
tesla.start();//From Parent Start Function Battery at 95%.
honda.stop();//From parent stop function Stop the car!

/*Question #3:

How to find duplicate elements in a given array?
Given Input Array: [10, 5, 5, 10, 2, 3, 18] 
Expected output: [5, 10] 

Answer 
To find duplicates in an array, we can make use of the Array filter method. Filter method takes 3 parameters, element, index and array on which filter is applied. Then we check for the indexOf each element and return whichever does not match with the index. *

const numbers = [10, 5, 5, 10, 2, 3, 18];

const duplicateNumbers = numbers.filter((num, index, array) => array.indexOf(num) !== index);
console.log(duplicateNumbers)//Array [ 5, 10 ]//or

const duplicateNumbersAgain = numbers.filter(function (num, index, array) {
  return array.indexOf(num) !== index;
});
console.log(duplicateNumbersAgain)////Array [ 5, 10 ]


/*Question #4:

How to find the count of duplicates in an array?
Given Input Array: [‘Banana’, ‘April’, ‘May’, ‘Mark’, ‘May’, ‘Apple’, ‘May’] 
Expected output { 
 App: 1, 
 April: 1, 
 Mark: 1, 
 May: 3 
} 

Answer 
This one can be really tricky and can be asked in multiple variations. The fix will be the same for both number array as well as array of strings. We will make use of the Array reduce method and using an object instance we will check if the key value is present in object if yes, increment or else return 1*

const months = ["May", "April", "May", "Mark", "May", "App"];
const countOfMonths = months.reduce((obj, month) => {
  if (obj[month] == undefined) {
    obj[month] = 1;
    return obj;
  }
  else {
    obj[month]++;
    return obj;
  }

}, {});
console.log(countOfMonths); //Object { May: 3, April: 1, Mark: 1, App: 1 }

/*Question #5:
How to check if a given number is an integer?
Given Input Array 10.5 
Expected output true 

Answer 
To check if a given variable is integer, we can make use of the 
isNaN() method. 
This method can also be used to check if a variable is not an integer 
*
const tax = 10.5; // true value 
const str2 = "this is false"; // false value 
console.log(isNaN(tax));//false as in isnotanumber = false as it is
console.log(!isNaN(tax));//true as isnotanumber saying it is so it's true 
console.log(isNaN(str2));//true as in isnotanumber
console.log(!isNaN(str2));//false so kind of saying it's a number

console.log(Number(tax))//10.5 
console.log(Number(str2));//nan


/*Question #6:
Explain the difference between Object.freeze() vs 
const?

Answer 
const applies to bindings ("variables"). It creates an immutable binding, i.e. you cannot assign a new value to the binding. 

Object.freeze works on values, and more specifically, object values. It makes an object immutable, i.e. you cannot change its properties. 
const person = { 
 name: "Leonardo" 
}; 
person = 'some'; 
console.log(person); // Uncaught TypeError: Assignment to constant variable. 

///////////////////
let person = { 
 name: "Leonardo" 
}; 
Object.freeze(person); 
person.name = "ARC"; // Uncaught SyntaxError: Identifier 'person' has already been declared*/

/*Question #7:
How to Sort a Number Array?

By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

Given Input Array [10, 5, 12, 8, 30, 2, 20, 101] 
Expected output [2, 5, 8, 10, 12, 20, 30, 101] 
Answer 
To sort an array of numbers we will have to use a comparison method inside the sort method. *

//Ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });
console.log(points); //Array(6) [ 1, 5, 10, 25, 40, 100 ]

//Descending order 
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function (a, b) { return b - a });
console.log(points1);//100,40,25,10,5,1

const studentIds = [10, 5, 12, 8, 30, 2, 20, 101];

studentIds.sort((a, b) => {
  return a - b;
});
console.log(studentIds); //Array(8) [ 2, 5, 8, 10, 12, 20, 30, 101 ]

/*If not numbers array: The sort() method sorts an array alphabetically:


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());//Array(4) [ "Apple", "Banana", "Mango", "Orange" ]

/*Question #8:
Sort a given array of strings
Given Input Array ['Mark','Ram', 'Larry', 'Adam', 'Sita', 'Lisa']
Expected output ["Adam", "Larry", "Lisa", "Mark", "Ram", "Sita"] 

Answer 
To sort an array of numbers we will have to use a comparison method inside the sort method
const students = ['Mark', 'Ram', 'Larry', 'Adam', 'Sita', 'Lisa'];
console.log(students.sort()); //Array(6) [ "Adam", "Larry", "Lisa", "Mark", "Ram", "Sita" ]


/*Question #9:
How to find unique values in an array?
Given Input Array [10, 5, 5, 10, 2, 3, 18]
Expected output [10, 5, 2, 3, 18]

Answer

To find unique values in an Array we are going to use the Array filter method and check if the value is present using indexOf method.

const Ids = [10, 5, 5, 10, 2, 3, 18];
const uniqueIds = Ids.filter((e, i, a) => a.indexOf(e) == i);
//Array(5) [ 10, 5, 2, 3, 18 ]//element,index, array

console.log(uniqueIds);
/*
Question #10:
How to find unique values from an Array in sorted 
order?

Given Input Array [10, 5, 12, 8, 30, 2, 20, 101] 
Expected output [2, 5, 8, 10, 12, 20, 30, 101] 

Answer 

We will be using the Array filter method first and check if the element is present using the indexOf and then we will use the sort method to sort the Array elements. 

const Ids = [10, 5, 5, 10, 2, 3, 18];
const uniqueIds = Ids.filter((e, i, a) => a.indexOf(e) == i).sort((a, b) => {
  return a - b;
});
console.log(uniqueIds);//Array(5) [ 2, 3, 5, 10, 18 ]


/*Question #11:

Find maximum value in a numbered array?
Given Input Array [10, 5, 12, 8, 30, 2, 20, 101] 
Expected output 101 

Answer 
To find maximum value in a numbered array, we are implementing a method  which will find Max value. Inside the method, we are making use of the Array  reduce method and for each element, we will check if the value is greater than the previous one. 

const studentIds1 = [10, 5, 12, 8, 30, 2, 20, 101];

function arrayMax(arr) {
  return arr.reduce(function (previous, currentValue) {
    return (previous > currentValue ? previous : currentValue);
  });
}
console.log(arrayMax(studentIds1));//101

/*Question #12:

Find minimum value in a numbered array?

Given Input Array [10, 5, 12, 8, 30, 2, 20, 101] 
Expected output 2 
Answer 

To find minimum value in a numbered array, we are implementing a method which will find minimum value. Inside the method, we are making use of the Array reduce method and for each element, we will check if the value is less than the previous one.

const studentIds2 = [10, 5, 12, 8, 30, 2, 20, 101];
function arrayMin(arr) {
  return arr.reduce(function (previous, value) {
    return (previous < value ? previous : value);
  });
}
console.log(arrayMin(studentIds2));//2

/*Question #13:
Find the average of the numbers in the numbered array?
Given Input Array [10, 5, 12, 8, 30, 2, 20, 101] 
Expected output 23.5 

Answer 
Using the Array reduce method, we will get the total count first, and then we will 
get the total length of the Array. Divide the total sum with the length of the array 
and we get the average of the numbers in the Array. 

const studentIds3 = [10, 5, 12, 8, 30, 2, 20, 101];
const arrTotal = studentIds3.reduce((a, b) => a + b, 0);
const arrLength = studentIds.length;
console.log(arrTotal / arrLength);//23.5


/*Question #14:

How can you uppercase the first character in a string 
array?
Answer 
To capitalize the first character of every element in the Array, we will have to get  the first character using charAt method and then apply toUpperCase and finally we will concatenate all the other characters using substring(1) 

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday',
  'saturday'];
for (let day of days) {
  day = day.charAt(0).toUpperCase() + day.substring(1);
  console.log(day);
}//Sunday, Tuesday etc



/**************TO BE PRINTED BELOW HERE************************ */

/*Question #15:
How to make a sentence out of the given string array?

Answer 
We need to use the string join() method applied on the Array 
var a = ['arc', 'tutorials'];
var sentence = a.join(" ");
console.log(sentence) //arc tutorials

/*Question #16:
How to check if an array contains any element of another 
array?

Answer 
To check if the array contains elements in another array, we will make use of the 
Array includes method to see if it includes any values from the Array.
let arr1 = [1, 2, 3];
let arr2 = [2, 3];
let isFounded = arr1.some(ai => arr2.includes(ai));//true but ???
let isFounded2 = arr2.includes(3);

console.log(isFounded2); //true

/*Question #17:
Given two strings, how can you check if the strings are 
anagram for each other? 
Answer 
To sort an array of numbers we will have to use a comparison method inside the 
sort method.

var firstWord = "Mary";
var secondWord = "Army";
function isAnagram(first, second) {
  var a = first.toLowerCase();
  var b = second.toLowerCase();
  // Sort the strings, and join the resulting array to a string. Compare the results 
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
}
console.log(isAnagram(firstWord, secondWord));//true


Question #18:
How can you extract a few fields from the given JSON 
object and form a new array?

Given Input const input = {
  "students": [{
    "studentName": "ARC Tutorials",
    "uuid": "124748ba-6fc4f"
  }, {
    "studentName": "Mark",
    "uuid": "1249b9ba-64d"
  }, {
    "studentName": "Lisa",
    "uuid": "124c78da-64"
  }, {
    "studentName": "Ram",
    "uuid": "124ee9da-6"
  }]
};
/*
Expected output ["ARC Tutorials", "Mark", "Lisa", "Ram"] 
Answer 
We will need to use the map() method, we will pass the element and then return only the required key from that element.
const input = {
  "students": [{
    "studentName": "ARC Tutorials",
    "uuid": "124748ba-6fc4f"
  }, {

    "studentName": "Mark",
    "uuid": "1249b9ba-64d"
  }, {
    "studentName": "Lisa",
    "uuid": "124c78da-64"
  }, {
    "studentName": "Ram",
    "uuid": "124ee9da-6"
  }]
};
var op = input.students.map(function (item) {
  return item.studentName;
});
console.log(op); //Array(4) [ "ARC Tutorials", "Mark", "Lisa", "Ram" ]


Question #19:
Filter the given object based on certain conditions and 
return the corresponding object? 
Given Input Object “Select the students whose rank is more than 10” 
const input = { 
 "students": [{ 
 "studentName": "ARC Tutorials", 
 "rank": 10, 
 "uuid": "124748ba-6fc4f" 
 }, { 
 "studentName": "Mark", 
 "rank": 15, 
 "uuid": "1249b9ba-64d" 
 }, { 
 "studentName": "Lisa", 
 "rank": 30, 
 "uuid": "124c78da-64" 
 }, { 
 "studentName": "Ram", 

 "rank": 20, 
 "uuid": "124ee9da-6" 
 }] 
}; 

Expected output [{ 
 rank: 15, 
 studentName: "Mark", 
 uuid: "1249b9ba-64d" 
}, { 
 rank: 30, 
 studentName: "Lisa", 
 uuid: "124c78da-64" 
}, { 
 rank: 20, 
 studentName: "Ram", 
 uuid: "124ee9da-6" 
}] 

Answer 
We will make use of the Array filter method and using if-else conditions we will check for conditions and return the element. 
const input = {
  "students": [{
    "studentName": "ARC Tutorials",
    "rank": 10,
    "uuid": "124748ba-6fc4f"
  }, {
    "studentName": "Mark",
    "rank": 15,
    "uuid": "1249b9ba-64d"
  }, {
    "studentName": "Lisa",
    "rank": 30,
    "uuid": "124c78da-64"
  }, {
    "studentName": "Ram",

    "rank": 20,
    "uuid": "124ee9da-6"
  }]
};
var op = input.students.filter(function (item) {
  if (item.rank > 10)
    return item
});
console.log(op);
//Array(3)[{… }, {… }, {… }] - as above


Question #20:
Given an array of strings, reverse each word in the 
sentence?

Answer 
We will be using the string methods reverse, split and join to reverse each word in the sentence */
var string = "Welcome to ARC Tutorials";
// Output becomes slairotuT CRA ot emocleW 
var reverseEntireSentence = reverseBySeparator(string, "");
// Output becomes emocleW ot CRA slairotuT 
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseEntireSentence)//slairotuT CRA ot emocleW
console.log(reverseEachWord)//emocleW ot CRA slairotuT
