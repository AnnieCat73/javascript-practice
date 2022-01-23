/*const x = 6;
if (x > 7) {
  console.log("large");
}
else if (x >= 4) {
  console.log("medium");
} else {
  console.log("small");
}

let y = 5;
if (y === 5) {
  console.log(`The condition is true!`);
} else {
  console.log("The condition is false!");
}

const div = document.getElementById("div");
function checkAge (age) {
  if (age >= 10) {
    div.innerText = "You can go on the rollercoaster!";
  } else {
    div.innerText = "No rollercoaster for you!";
  }
}
checkAge(7);

const div1 = document.getElementById("div1");
function doubleCheck (age, height) {
  if (age >= 10 && height >= 42) {
    div1.innerText = "You can go on the rollercoaster";
  } else {
    div1.innerText = "No rollercoaster for you!";
  }
};
doubleCheck(11, 42);

const firstName = "Sally";
if (firstName === "Sally" || firstName === "Ann") {
  console.log("You get the VIP table");
};

function vip (firstName) {
  if (firstName === "Sally" || firstName === "Ann") {
    console.log("You get the VIP table");
  };
}
vip("Bertie");*/

const div = document.getElementById("div");
let skill = 91;
const person = "Henry";
if (skill > 90 && person === "Falco") {
  div.innerText = "Falco wins!";
} else {
  div.innerText = "Who are you?";
}

const p = document.getElementById("p");
let score = 5;
let timeLeft = 0;
if (score === 5 && timeLeft === 0) {
  p.innerText = "Game over!";
} else {
  p.innerText = "Play some more!";
}

const didPractice = true;
if (!didPractice) {
  console.log("You practised well!")
} else {
  console.log("You need to practise more...!")
}

const div2 = document.getElementById("div2");
const isCelebrity = true;
const validTicket = false;
const bribe = 9500;
if ((isCelebrity === true && validTicket === true) || bribe > 9000) {
  div2.innerText = "Welcome to the concert!";
} else {
  div2.innerText = "No concert for you!";
}



