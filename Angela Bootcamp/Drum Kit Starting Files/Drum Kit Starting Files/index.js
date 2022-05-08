//A) Just for one button i.e the first one

/*document.querySelector("button").addEventListener('click', handleClick);

function handleClick() {
  alert("I got clicked!")
}

//or

const btn = document.querySelector("button");
btn.addEventListener("click", e => {
  handleClick();//or just alert("I got clicked!")
})

//B For all buttons

/*const btns = document.querySelectorAll("button");
console.log(btns);

Array.from(btns).forEach(btn => {
  btn.addEventListener("click", e => {
    alert("I will click on all buttons!")
  })
})*/

//or

const numberOfDrumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
  numberOfDrumButtons[i].addEventListener("click", e => {
    alert("I got clicked!")
  });

}

//Higher Order functions and passing functions as arguments

function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function calculator(num1, num2, operator) {//3rd arg is function passe
  return num1 + num2;
}
debugger;
calculator(4, 5, multiply);//9 or can do add etc



