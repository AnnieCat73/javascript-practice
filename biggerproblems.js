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
const overlay = document.getElementById("overlay");//get overlay added to html

function showLightbox(){
	lightbox.style.display = 'block';
}

function hideLightbox(){
	lightbox.style.display = 'none';
}

/*show.addEventListener("click", function () {
  showLightbox();
});*/


hide.addEventListener("click", function () {
  hideLightbox();
});
////////////////////////////////////////////////////////

//to make button work again

function showContainer () {
	container.style.display = "block";
}
show.addEventListener("click", function () {
  showContainer();
});

//then the overlay

overlay.addEventListener("click", function () {
	//container.style.display = "none" or;
	hideLightbox();
});