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

/*Higher Order functions and passing functions as arguments

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
calculator(4, 5, multiply);//9 or can do add etc*/

//a) DETCTING BUTTON PRESS

const numberOfDrumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
  numberOfDrumButtons[i].addEventListener("click", function () {
    //console.log(this.innerHTML);//gets the button that gets clicked
    //this.style.color = "#fff";//changes the btn you press to color #

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });

}

//b) DETECTING KEYBOARD PRESS

//don't need to listen of letters on keyboard to be pressed
//can use window.document to listen for it//entire webpage listens
//for it

document.addEventListener("keydown", function (e) {
  //which key was pressed - use e so e.key to get a key
  //console.log(e.key)
  makeSound(e.key);
});


function makeSound(key) {
  //const audio = new Audio(`sounds/tom-1.mp3`);
  //audio.play();

  switch (key) {
    case "w":
      const tom1 = new Audio(`sounds/tom-1.mp3`);
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio(`sounds/tom-2.mp3`);
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio(`sounds/tom-3.mp3`);
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio(`sounds/tom-4.mp3`);
      tom4.play();
      break;
    case "j":
      const snare = new Audio(`sounds/snare.mp3`);
      snare.play();
      break;
    case "k":
      const crash = new Audio(`sounds/crash.mp3`);
      crash.play();
      break;
    case "l":
      let kick = new Audio(`sounds/kick-bass.mp3`);
      kick.play();
      break;

    default: console.log(buttonInnerHTML)

  }
}

/*Callback function - because it allows us to wait for something to finish happening, for example waiting for a click event, and then the callback function gets called back and executed. The event object, e, will pass in the event that triggered the callback function. So if console.log(e) you will see what event f.ex mouse event plus all properties/methods
Use debugger; to help to understand*/




