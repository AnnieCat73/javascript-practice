const output = document.getElementById("output");
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


btn3.addEventListener("click", () => {
  let increment = div3;
  increment.value = div3;


  if (div3 <= 5) {
    div3++;
  } else {
    div3.innerText = "Game over!";
  }
});




