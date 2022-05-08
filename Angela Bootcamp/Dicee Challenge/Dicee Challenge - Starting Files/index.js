/*Other examples:
Math.random() - returns a floating random number in the range
from 0 inclusive up to but not including 1, so 0 - 0.99999999
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;*/


//Create a random number btwn 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);

// gets dice1.png to dice6.png
//let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomDiceImage = `dice ${randomNumber1} .png`;

//gets the source of the images as inside folder images/
let randomImageSource = "images/dice" + randomNumber1 + ".png";
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";


//Change both images

let image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}







