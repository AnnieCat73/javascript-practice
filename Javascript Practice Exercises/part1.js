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

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) ===100;

//console.log(isEqualTo100(100, 0))//true
//console.log(isEqualTo100(50,50));//true
//console.log(isEqualTo100(0,50));//false

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

//or
const getfileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getfileExtension('methods.html'));//.html

/*Exercise 3:
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet*/

//use String.fromCharCode and charCodeAt

const moveCharsForward = (str) => str.split('').map(char => String.fromCharCode(charCodeAt(0) + 1)).join('');
console.log(moveCharsForward('abcd'));//bcde
//so turn str into an array then mutate with start index of 0 and add 1, then turn into a string again

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

//or
const formatDate = (date = new Date()) => {
    const days = date.getDate() + 1;
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(formatDate());