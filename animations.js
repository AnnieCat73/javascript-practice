8const div = document.getElementById("div");
const btnOut = document.getElementById("fadeout");
const btnIn = document.getElementById("fadein");
btnOut.addEventListener("click", function () {
  div.style.opacity = "0";
});
btnIn.addEventListener("click", function () {
  div.style.opacity = "1";
});

const div1 = document.getElementById("div1");
const btnMove = document.getElementById("move");
btnMove.addEventListener("click", function () {
  div1.style.transform = "translateX(300px";
});




const div3 = document.getElementById("div3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const input = document.getElementById("input");
div3.style.backgroundColor = "red";
div3.style.width = "100px";
div3.style.height = "100px";
btn1.addEventListener("click", function () {
  width();
});
btn2.addEventListener("click", function () {
  height();
  
});
function width () {
  const inputValue = input.value + 'px';
  div3.style.width = inputValue;
};
function height () {
  const inputValue = input.value + 'px';
  div3.style.height = inputValue;
};



