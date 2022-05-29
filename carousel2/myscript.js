//Get variables
const track = document.querySelector(".carousel__track");
const slides = document.querySelectorAll(".carousel__slide");

const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");

const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);



nextButton.addEventListener("click", event => {
  const currentSlide = track.querySelector(".current-slide");

  //get to nxt slide
  const nextSlide = currentSlide.nextElementSibling;
  //console.log(nextSlide)
  //get values of next slide
  const destination = getComputedStyle(nextSlide).left;

  //console.log(destination);
  //use destination value to set track
  track.style.left = "-" + destination;
  //update .current-slide class
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
  //show previous button when clicking on next button*/

  //show previous button when clicking on next button
  prevButton.removeAttribute("hidden");
  //hide next button when on last slide
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute("hidden", true);
  }

  //updating dots when click on next button
  const currentDot = dotsNav.querySelector(".current-slide");
  //find next dot
  const nextDot = currentDot.nextElementSibling;
  //remove .is-selected from currentDot
  currentDot.classList.remove("current-slide");
  //add .is-selected to nextDot
  nextDot.classList.add("current-slide");
});


prevButton.addEventListener("click", event => {
  //find currentSlide
  const currentSlide = track.querySelector(".current-slide");
  //get to previous slide
  const prevSlide = currentSlide.previousElementSibling;
  //get values of the previous slide(s)
  const destination = getComputedStyle(prevSlide).left;
  //use destination value to set .carousel-content
  track.style.left = "-" + destination;
  //update .is-selected class
  currentSlide.classList.remove("current-slide");
  prevSlide.classList.add("current-slide");

  //show next button when clicking on previous button
  nextButton.removeAttribute("hidden");
  //hide previous button when on first slide
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute("hidden", true);
  }

  //updating dots when click on previous button
  const currentDot = dotsNav.querySelector(".current-slide");
  //find previous dot
  const prevDot = currentDot.previousElementSibling;
  //remove .is-selected from currentDot
  currentDot.classList.remove("current-slide");
  //add .is-selected to previousDot
  prevDot.classList.add("current-slide");
});


//MOVE THE SLDES /Position the slides with Javascript - forEach loop
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
})


//WORKING THE DOTS
//When a dot is clicked we need to find its corresponding slide
dots.forEach(dot => {
  dot.addEventListener("click", event => {
    let clickedDotIndex;
    for (let index = 0; index < dots.length; index++) {
      if (dots[index] === dot) {
        clickedDotIndex = index;
      }
    }
    //use clidkedDotIndex to find slide to show
    const slideToShow = slides[clickedDotIndex];
    const destination = getComputedStyle(slideToShow).left;
    track.style.left = "-" + destination;

    //update location of .is-selected
    slides.forEach(slide => {
      slide.classList.remove("current-slide");
    })
    //then add .is-selected to newly displayed slide
    slideToShow.classList.add("current-slide");

    //update dot state so the selected dot is black
    dots.forEach(dot => {
      dot.classList.remove("current-slide");
    })
    dot.classList.add("current-slide");

    //Showing/hiding previous and next buttons when click on a dot
    if (clickedDotIndex === 0) {
      prevButton.setAttribute("hidden", true);
      nextButton.removeAttribute("hidden");
    } else if (clickedDotIndex === dots.length - 1) {
      prevButton.removeAttribute("hidden");
      nextButton.setAttribute("hidden", true);
    } else {
      prevButton.removeAttribute("hidden");
      nextButton.removeAttribute("hidden");
    }

  });

})