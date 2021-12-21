const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  console.log(this);
});

btn.addEventListener("click", e => {
  console.log(e.currentTarget);
});

btn.addEventListener("click", function (e) {
  console.log(btn === this);
  console.log(btn === e.currentTarget);
});

const googleLink = document.querySelector("a");
console.log(googleLink);

googleLink.addEventListener("click", e => {
  e.preventDefault();
});

const checkbox = document.querySelector("input");
checkbox.addEventListener("click", e => {
  e.preventDefault();
});



