/*let count = 0;
const sayHi = setInterval(function () {
  console.log(`Current number: ${count}`);
  count++;
  if (count > 9) {
    clearInterval(sayHi);
  }
}, 6000);
console.log(sayHi);
clearInterval(sayHi);

setTimeout(function () {
  console.log("Hi");
}, 10000);


const div = document.getElementById("div");
setTimeout(function () {
  div.style.display = "block";
}, 5000);


const div1 = document.getElementById("div1");
const colors = ["red", "orange", "#ff0"];
let i = 0;
function changeColor() {
  div.style.backgroundColor = colors[i];
  i++;
  if (i > colors.length - 1) {
    i = 0;
  }

}
setInterval(changeColor, 2000);

const div2 = document.getElementById("div2");
let countAgain = 11;
const counter = setInterval(timer, 2000);

function timer() {
  countAgain = countAgain - 1;
  if (countAgain <= 0) {
    clearInterval(counter);
  }
  div2.innerHTML = countAgain;
}
*/
var d = new Date();
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());

d.setDate(d.getDate() + 120);
console.log(d)

console.log(d.getTime());

const div3 = document.getElementById("div3");
div3.innerHTML =










