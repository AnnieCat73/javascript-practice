/*const div = document.getElementById("div");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

/*openBtn.addEventListener("click", () => {
  div.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  div.style.display = "none";
});

openBtn.addEventListener("click", () => {
  div.classList.toggle("close");
});*/

/*
  - basic div should show and hide
    - we need show button and hide button
  - should cover screen and be aligned properly
  - should hide when people click outside it
*/

const lightbox = document.getElementById("lightbox-container");
//const overlay = document.getElementById("overlay");
const show = document.getElementById("show");
const hide = document.getElementById("hide");

function showLightbox() {
  lightbox.style.display = "block";
}

function hideLightbox() {
  lightbox.style.display = "none";
}

show.addEventListener("click", () => {
  showLightbox();
});

hide.addEventListener("click", () => {
  hideLightbox();
});

/*overlay.addEventListener("click", () => {
  hideLightbox();
});*/


