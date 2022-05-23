//get buttons/every drum
const drumBtns = document.querySelectorAll(".drum");
//console.log(drumBtns) gets a nodelist


//function for listening for a drum click
/*for (let i =0; i < drumBtns.length; index++) {
  drumBtns[i].addEventListener('click', function () {

  })
}
//same as*/
Array.from(drumBtns).forEach(function (drumBtn) {
  drumBtn.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    //console.log(buttonInnerHTML);
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);
  })
})



//listening for keyboard press
window.addEventListener("keydown", function (e) {
  //console.log(e.key)
  makeSound(e.key);
  buttonAnimation(e.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio(`sound/tom-1.mp3`);
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
      const kick = new Audio(`sounds/kick-bass.mp3`);
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }

}

//animating the key pressed

function buttonAnimation(drum) {//call it what you like
  let activeBtn = document.querySelector(`.${drum}`);
  activeBtn.classList.add('pressed');
  setTimeout(() => {
    activeBtn.classList.remove('pressed');
  }, 100)

}