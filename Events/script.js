
//this can't be used with =>
const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  this.style.color = "red";
  console.log(this);
})

console.log(button)

//if use =>
const button2 = document.querySelector("#btn2");

button2.addEventListener("click", e => {
  console.log(e.currentTarget);
  e.currentTarget.style.color = "green";
});

const checkbox = document.getElementById("check");

checkbox.addEventListener("click", e => {
  e.preventDefault();
});

//HERE STOPS DEFAULT BEHAVIOUR AND CHECKBOX DOESN'T UNCHECK