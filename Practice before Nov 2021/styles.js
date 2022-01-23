const myDiv = document.getElementById("mydiv");
myDiv.style.backgroundColor = "gold";
myDiv.style.color ="green";

const span = document.getElementById("mytext");
//span.className = "highlighted";
span.classList.add("highlighted");

const body = document.querySelector("body");
const div1 = document.createElement("div1");
body.appendChild(div1);
function checkSpeed (speed) {
  if (speed > 100) {
    div1.style.backgroundColor = "red";
    div1.innerText = "Too fast."
  } else {
    div1.style.backgroundColor = "green";
    div1.innerText = "Good speed!";
  }
};
console.log(checkSpeed(90));

const div2 = document.getElementById("div2");
const winner = false;
if (winner) {
  div2.style.display = "block";
} else {
  div2.style.display = "none";
}