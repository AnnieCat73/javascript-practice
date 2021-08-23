const whatever = "some text";
console.log(whatever);

const div = document.getElementById("div");//or can be inside
function hello () {
  const person = "Henrietta";
  const div = document.getElementById("div");
  div.innerHTML = person;
}
hello();

const pet = "cat";
const body = document.querySelector("body");
const div1 = document.createElement("div1");
body.appendChild(div1);
div1.innerText = pet;