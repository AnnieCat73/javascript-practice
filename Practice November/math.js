//console.log(Math.floor(10 * Math.random()) + 1);

const random = Math.floor(10 * Math.random() + 1);
console.log(random);

console.log(Math.floor(5.7));

const randomNumber = Math.ceil(Math.random());
console.log(randomNumber)

const random10 = Math.floor(10 * Math.random() + 1);
console.log(random10)

function randomNumberAgain(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumberAgain(3, 8));//7


const manyNames = ["Sally", "Harry", "Petra", "Spencer"];
const btn = document.getElementById("btn");
const div = document.getElementById("div");

btn.addEventListener("click", function () {
  const randomPick = manyNames[Math.floor(Math.random() * manyNames.length)];
  div.innerHTML = randomPick;

});
