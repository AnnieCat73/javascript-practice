
//this keyword can't be used with =>
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


//Event delegation with nested elements
const list =  document.querySelector("ul");

list.addEventListener("click", e => {
 //console.log(e.target);
 if(e.target.matches("li")) {
   e.target.style.color = "red";
 }
});

//still nesting but no ul/li f.ex

/*<button id="button">
  <svg></svg>
  <span>Click me</span>
</button>*/

const button3 = document.querySelector("#button");

/*1 in css to prevent events bubbling  can do

#button * {
  pointer-events: none;
} OR*/

//2 use closest

button3.addEventListener("click", e => {
  const button3 = e.target.closest("#button");
  if(button3) {
    e.target.style.color = "green";
  }
})//span text turns green


const button4 = document.querySelector(".button");

/*button4.addEventListener("click", function() {
  const body = document.body;
  if(button4.classList.contains("is-clicked")) {
    button4.classList.remove("is-clicked");
  } else {
    body.classList.add("button-is-clicked");
    button4.classList.add("is-clicked");
  }
})*/

//or
button4.addEventListener("click", function() {
  const body = document.body;
  body.classList.toggle("is-clicked");
  button4.classList.toggle("is-clicked")
})

//or




