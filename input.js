const div = document.getElementById("div");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
btn.addEventListener("click", () => {
  const text = input.value;
  div.innerText = "Hello [name goes here].";
});

const div = document.getElementById("div");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
btn.addEventListener("click", () => {
  const tshirtInput = input.value;
  const sum = tshirtInput * 2;
  div.innerHTML = `$${sum}`;
});

const outputDiv = document.getElementById("output");
const input = document.getElementById("miles");
const btn = document.getElementById("convert");

btn.addEventListener("click", function () {
  const milesInput = input.value;
  const kmOutput = milesInput * 1.609344;
  outputDiv.innerHTML = `km ${kmOutput}`;
});

