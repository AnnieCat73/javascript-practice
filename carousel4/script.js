//Get variables

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);//track.querySelectorAll(".carouel__slide")

const prevBtn = document.querySelector(".carousel__btn--left");
const nextBtn = document.querySelector(".carousel__btn--right");

const dotsNav = document.querySelector(".carousel__nav");
const dots = dotsNav.querySelectorAll(".carousel__indicator");//Array.from(dotsNav.children)



//get slidewidth plus loop for slides - position slides
const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
})

//click on left btn
nextBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  //find nextSlide destination computed style
  const destination = getComputedStyle(nextSlide).left
  //set track
  track.style.left = "-" + destination;

  //remove/add .current-slide class
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");

  //show prev btn when clicking next
  prevBtn.removeAttribute("hidden");
  //hide nxt btn when get to end of slides
  if (!nextSlide.nextElementSibling) {
    nextBtn.setAttribute('hidden', true);
  }

  //dots

})


//click on right btn

prevBtn.addEventListener('click', e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const destination = getComputedStyle(prevSlide).left;
  track.style.left = "-" + destination;
  currentSlide.classList.remove("current-slide");
  prevSlide.classList.add("current-slide");
  //show next btn when clicking prev
  nextBtn.removeAttribute("hidden");
  //hide prev btn when get to beginning of slides
  if (!prevSlide.previousElementSibling) {
    prevBtn.setAttribute('hidden', true);
  }
})





//working the dots - when a dot is clicked we find the corresponding slide

