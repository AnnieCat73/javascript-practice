const myDiv = document.getElementById("mydiv");
myDiv.style.color = "green";
myDiv.style.backgroundColor = "gold";
myDiv.style.fontSize = "2em";
myDiv.style.opacity = "1";
myDiv.style.display = "inline-block";

const myText = document.getElementById("mytext");
//myText.className = "highlighted";
myText.classList.add("highlighted");

const div = document.querySelector(".div");
const h1 = div.querySelector(".h1");
console.log(h1)

function checkSpeed(speed) {
  if (speed > 100) {
    h1.innerText = "Too fast!";
    h1.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "green";
    h1.textContent = "Good speed!";
  }
}
checkSpeed(300);

const divId = document.querySelector("#divId");
const p = divId.firstElementChild;
//const p = divId.querySelector(".p");

const winner = false;
if (winner) {
  p.style.display = "block";
} else {
  p.style.display = "none";
}