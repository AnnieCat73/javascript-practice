/*Exercise 1:
Write a JavaScript program to check two numbers and return true if one of the number is
100 or if the sum of the two numbers is 100*/



const checkNumbers = (num1, num2) => {
    if (num1 === 100) {
        return true;
    } else if (num2 === 100) {
        return true
    } else if (num1 + num2 === 100) {
        return true;
    } else {
        return false;
    }
};

console.log(checkNumbers(50, 50));

//or

const isEqualTo100 = (a, b) => a === 100 || b === 100;

//fx console.log(isEqualTo100(100, 0))

/*Exercise 2:
Write a JavaScript exercise to get the extension of a filename*/

let filename = "part1.js";
let extension = getExtension(filename);
console.log(extension)//js

/*or as a general function
function getExtension(filename) {
    return filename.split(".").pop();
}
//so:
The split() method will convert a string into an array of substrings, 
separated by the character you passed as the method’s parameter.*/

function getExtension(fileName) {
    return fileName.split(".").pop();
}

let fileName = "animation.html";
let fileExtension = getExtension(fileName);
console.log(fileExtension);//html

/*Exercise 3:
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet*/


/*Exercise 4:
Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

var today = new Date();//Sun Jan 23 2022
var day = today.getDate();//23
console.log(today)//23

//so

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);

