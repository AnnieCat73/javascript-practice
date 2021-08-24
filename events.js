/*const myDiv = document.getElementById("mydiv");
function changeText () {
  myDiv.innerHTML = "new text";
}
myDiv.addEventListener("click", function () {
  changeText();
});

const body = document.querySelector("body");
const blue = document.getElementById("blue");
const btn = document.createElement("button");
body.append(btn);
btn.style.padding = ".5rem";
btn.addEventListener("click", function () {
  blue.style.backgroundColor = "blue";
});

const span = document.getElementById("span");
const spanBtn = document.getElementById("spanbtn");
function showSum (num1, num2) {
  return num1 + num2;
};
spanBtn.addEventListener("click", () => {
  span.innerText = showSum(3,6);
});

const btnDiv = document.getElementById("btndiv");
const hideBtn = document.getElementById("hide");
const showBtn = document.getElementById("show");
hideBtn.addEventListener("click", () => {
  btnDiv.style.display = "none";
});
showBtn.addEventListener("click", () => {
  btnDiv.style.display = "block";
});*/

const classBtn = document.getElementById("class");
const div3 = document.getElementById("div3");
classBtn.addEventListener("click", () => {
  if(div3) {
    div3.className = "hide";
  } else {
    div3.remove("hide");
  }
});

