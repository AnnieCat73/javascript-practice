const track = document.querySelector('.carousel__track');//ul
const slides = Array.from(track.children);/*get the lis of ul so
//Array(3) [ li.carousel__slide , li.carousel__slide, li.
carousel__slide ]*/

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);//array(3)

//A)get the size of a slide
const slideSize = slides[0].getBoundingClientRect();//gets height and everythings and this will change with browser size
//console.log(slideSize)//DOMRect { x: 89, y: 8, width: 648, height: 600, top: 8, right: 737, bottom: 608, left: 89 }
//B)BUT ONLY WANT WIDTH:
const slideWidth = slideSize.width;//width from above(648)
//console.log(slideWidth);//648
//C) or shorthand:
//const slideSize = slides[0].getBoundingClientRect().width;


/*1)Arrange slides next to one another as on top of each other now
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';//so starts at 648px
slides[2].style.left = slideWidth * 2 + 'px';//so starts at 1296px i.e 2 slidewidths to the right BUT BETTER WITH A LOOP: */
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}); /* or better as a function in case other devs need to understand the code
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}// then
slides.forEach(setSlidePosition);*/


/*2) when I click right move slides to the right
nextButton.addEventListener('click', e => {
  //which slide are we on and what is the next slide:
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  //move to the next slide - to do that need to knw the amount to move
  const amountToMove = nextSlide.style.left;
  track.style.transform = 'translateX(-' + amountToMove + ')';
  //but need to move/remove current-slide class:
  currentSlide.classList.remove('current-slide');
  nextSlide.classList.add('current-slide');

})*/

//3)when I click left move slides to the left so as code is similar better to do a function for both like this//general code for this and dots:
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

nextButton.addEventListener('click', e => {
  //which slide are we on and what is the next slide:
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);

  updateDots(currentDot, nextDot);//updates the dot from function at bottom

});

prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);

  updateDots(currentDot, prevDot);//updates the dot from function at bottom

});



//when I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
  //What we indicator was clicked on + when clicking in area where there are no dots gets no click events as it's inside a div
  const targetDot = e.target.closest('button');
  //console.log(targetDot)//null if in whitespace or button if not
  if (!targetDot) return;//so if not clicked a btn stop the function

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');

  //which dot did you click on?
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  //console.log(targetIndex);//so when click on a dot get 0, 1 or 2
  const targetSlide = slides[targetIndex];//so instead of slides[1] etc

  moveToSlide(track, currentSlide, targetSlide);
  //so get the track, the slide you are on and the corresponding dot

  /*currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');*/
  //or do a function and add it here
  updateDots(currentDot, targetDot);
})

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}