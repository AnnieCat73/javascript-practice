let count = 0;
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
setInterval(function () {
  for (let i = 0; i < colors.length; i++) {
    div1.style.backgroundColor = colors[i];
  }
}, 2000);





