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