const div = document.getElementById("div");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  div.classList.remove("fade");
});

btn2.addEventListener("click", function () {
  div.classList.add("fade");
});

const div1 = document.getElementById("div1");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function () {
  div1.style.transform = "translateX(300px)";
});


const div2 = document.getElementById("div2");
const btn4 = document.getElementById("btn4");
const input = document.getElementById("input");

btn4.addEventListener("click", function () {
  transition();
});

function transition() {
  const inputValue = input.value + 'px';
  div2.style.width = inputValue;
  div2.style.height = inputValue;
};