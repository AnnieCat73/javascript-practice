const cat = {
  nickName: "Noozybear",
  breed: "Siamese",
  play: function () {
    return `${this.nickName} is playing with a ball!`;
  }
};

console.log(cat["breed"]);
cat.age = 9;
console.log(cat);
cat.isPurring = true;
console.log(cat);

console.log(cat.play());

const james = 22;
const valerie = 25;
const kenneth = 27;
const annie = 27;

if (annie < james) {
  console.log(`Annie is younger than James!`);
} else if (annie > valerie) {
  console.log(`Annie is older than Valerie!`);
} else if (annie !== kenneth) {
  console.log(`Annie is the same age as Kenneth!`);
}

console.log(document)

const p = document.querySelector("p");
p.style.color = "yellow";

const dataRocket = document.querySelector("[data-type=rocket]");
console.log(dataRocket)

const humans = document.querySelector(".humans");
//const gandalf = humans.querySelector("li");
//console.log(gandalf)

const allHumans = document.querySelectorAll("li");
const boromir = allHumans[3];
boromir.style.fontSize = "2rem";
const saruman = allHumans[1];
saruman.style.fontSize = "3rem";
const aragorn = saruman.nextElementSibling;
aragorn.style.fontStyle = "italic";
const gandalf = allHumans[0];
const mainParent = gandalf.parentElement;
console.log(mainParent);

const characters = document.querySelector("#star-wars-characters");
const starWarsCharacters1 = document.querySelector("ul");

const luke = characters.querySelector(".luke");
const luke1 = characters.querySelector("li");
const luke2 = characters.querySelector("[data-type=hero]");

const yoda = characters.querySelector(".yoda");
const yoda1 = characters.querySelector("[data-type=master]");
console.log(yoda1)

const vader = characters.querySelector(".badboy");
const vader1 = characters.querySelector("[data-type=villain]");
console.log(vader)

const addDiv = document.querySelector(".add");
addDiv.classList.add("red");

const removeDiv = document.querySelector(".remove");
removeDiv.classList.remove("remove");

const toggle = document.querySelector(".toggle");
toggle.classList.toggle("red");

const contains1 = document.querySelector(".contains1");
contains1.classList.contains("blue");

const contains2 = document.querySelector(".contains2");
contains2.classList.contains("blue");

const button = document.querySelector("#btn");
const body = document.body;

button.addEventListener("click", () => {
  if (body.classList.contains("button-is-clicked")) {
    body.classList.remove("button-is-clicked");
    button.classList.remove("is-clicked");
  } else {
    body.classList.add("button-is-clicked");
    button.classList.add("is-clicked");
  }
});


const button1 = document.querySelector("#btn1");

button1.addEventListener("click", () => {
  if (boromir.classList.contains("pink")) {
    boromir.classList.remove("pink");
  } else {
    boromir.classList.add("pink");
  }
});







