const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

/*Connect to API

async function getImage() {
  const response = await fetch('https://picsum.photos/v2/list?limit=100');
  const images = await response.json();
  //console.log(images);
  selectRandomImage(images);
}
getImage();
//Get a random image

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex]
  //console.log(randomImage)
}

//Display the random image in the dom + other info

const displayImage = function (randomImage) {
  const author = randomImage.author;
  //console.log(author);
  const imageAddress = randomImage.download_url;
  //console.log(imageAddress)
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");



} 

//Get a random image when clicking on a button

button.addEventListener("click", function () {
  getImage();
});

*/
async function getImage() {
  const response = await fetch('https://picsum.photos/v2/list?limit=100');
  const images = await response.json();
  selectRandomImage(images);
  //console.log(images);
}
getImage()

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  //console.log(randomIndex)//to confirm a random no
  const randomImage = images[randomIndex];
  //console.log(randomImage)
  displayImage(randomImage);
}

const displayImage = function (randomImage) {
  const author = randomImage.author;
  //console.log(author);
  const imageAddress = randomImage.download_url;
  //console.log(imageAddress)
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
}

button.addEventListener("click", function () {
  getImage();
})
