var d = new Date();
console.log(d);

var d = new Date("march 17 2022");
console.log(d);

var d = new Date();
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getFullYear());


var d = new Date();
d.setDate(d.getDate() + 90);
console.log(d);

var d = new Date();
console.log(d.getTime());

const div = document.getElementById("div");
const d = new Date();
div.innerHTML = d;

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
div1.innerHTML = new Date().getFullYear();
div2.innerHTML = new Date().getMonth(0,11);
div3.innerHTML = new Date().getDate(1, 31);

const div4 = document.getElementById("div4");
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function myFunction () {
  const d = new Date();
  const n = d.getDay();
  div4.innerHTML = n;
};
myFunction();
div4.innerHTML = daysOfWeek[3];





