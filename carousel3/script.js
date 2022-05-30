const carousel = document.querySelectorAll(".slider");
const prev = document.querySelector(".btn-left");
const next = document.querySelector(".btn-right");

/*Then we convert our slider to an array and set our current to zero, so it sets the first image */

//get current and carousel array
let current = 0;
const carArr = [...carousel];

//remove images
function removeimg() {
  carArr.forEach(function (current) {
    current.style.display = "none";
  })
}
removeimg();

//display first img
function displayimg() {
  carArr[0].style.display = "block";
}
displayimg();

//display next image
function nextimg() {
  //hide img
  removeimg();

  //check position
  if (current === carArr.length - 1) {
    current = 0;
  } else {
    current++;
  }
  //display image
  carArr[current].style.display = "block";
}

//event listener
next.addEventListener('click', function () {
  nextimg();
})


//display prev image
function previmg() {
  //hide img
  removeimg();

  //check position
  if (current === 0) {
    current = carArr.length - 1;
  } else {
    current--;
  }
  //display image
  carArr[current].style.display = "block";
}

//event listener
prev.addEventListener('click', function () {
  previmg();
})

