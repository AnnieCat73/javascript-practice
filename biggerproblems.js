/*var lightbox = document.getElementById('lightbox');

function showLightbox(){
	lightbox.style.display = 'block';
}

function hideLightbox(){
	lightbox.style.display = 'none';
}

//document.getElementById('show').onclick = showLightbox;
//document.getElementById('hide').onclick = hideLightbox;*/

const lightbox = document.getElementById('lightbox');
const container = document.getElementById("lightbox_container");//get the lightbox 
const show = document.getElementById("show");									//added to html in step 3
const hide = document.getElementById("hide");

function showLightbox(){
	lightbox.style.display = 'block';
}

function hideLightbox(){
	lightbox.style.display = 'none';
}

show.addEventListener("click", function () {
  showLightbox();
});

hide.addEventListener("click", function () {
  hideLightbox();
});