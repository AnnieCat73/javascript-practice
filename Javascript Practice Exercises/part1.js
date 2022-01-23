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

