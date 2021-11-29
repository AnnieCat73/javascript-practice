/*const output = document.getElementById("output");
const button = document.getElementById("mybutton");

function showSum(a, b) {
  const sum = a + b;
  output.innerHTML = `Sum: ${sum}`;
}

button.addEventListener("click", () => {
  showSum(6, 10);
});

const myDiv = document.getElementById("mydiv");

function changeText() {
  myDiv.innerHTML = "new text";
}

myDiv.addEventListener("click", function () {
  changeText();
});

const funcBtn = document.getElementById("funcbtn");
const span = document.getElementById("span");
function runMe(num1, num2) {
  return num1 + num2;
}

funcBtn.addEventListener("click", () => {

  span.innerHTML = runMe(5, 9);
});

const btn = document.getElementById("btn");


btn.addEventListener("click", function () {
  div2.style.background = "blue";
});

//7
const btn2 = document.getElementById("btn2");
const div2 = document.getElementById("div2");
btn2.addEventListener("click", () => {
  if (div2.classList.contains("hide")) {
    div2.classList.remove("hide");
  } else {
    div2.classList.add("hide");
  }
});

const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

const txt = document.getElementById("mytext");
const click = document.getElementById("click");
const output1 = document.getElementById("output1");

const txtInput = txt.value;
console.log(txtInput)
click.addEventListener("click", () => {
  output1.innerHTML = `Hello ${txtInput}!`;
});

const body = document.querySelector("body");
const input = document.getElementById("t-input");
const btn5 = document.getElementById("btn5");
const outputDiv = document.getElementById("output");

btn5.addEventListener("click", () => {
  const noTshirt = input.value;
  outputDiv.innerText = noTshirt;
  let sum = noTshirt * 2;
  outputDiv.innerHTML = sum;
});

const input = document.getElementById("name-input");
const outputDiv = document.getElementById("div7");

input.addEventListener("keyup", function () {
  outputDiv.innerText = "Hello! Name goes here:";
});*/

const input = document.getElementById("focus");

input.addEventListener("focus", function () {

  input.style.border = "solid green 3px";

});








