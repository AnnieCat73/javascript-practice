//get buttons
const rock = document.querySelector("btn-rock");
const paper = document.querySelector("btn-paper");
const scissors = document.querySelector("btn-scissors");
const player1 = document.getElementById("you");
const player2 = document.getElementById("house");

//Array for choices
const choices = ["rock", "paper", "scissors"];

//You pick
function mePicks () {
  for (let i = 0; i < choices.length; i++) {
    if (choices[i] === "rock") {
      player1.innerText = "rock"
    } else if (choices[i] === "paper") {
      player1.innerText ="paper";
    } 
  }

};
console.log(mePicks())

//computer picks
function computerPicks () {

};

//What happens when each button is clicked

rock.addEventListener("click", function () {

});

paper.addEventListener("click", function () {

});

scissors.addEventListener("click", function () {

});