
/*old code

fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data)
})

try {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()//get body of it and into a readable format
  //console.log(data); //just for testing
  createBreedList(data.message);
} catch (e) { //e is referencing the error property
  console.log("There was a problem fetching the breedlist.")
}
}*/

//modern

let timer;
let deleteFirstPhotoDelay;

async function start() {
try {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  createBreedList(data.message);
  } catch (e) { //e is referencing the error property/so if catch if server error or internet goes down??
    console.log("There was a problem fetching the breedlist.")
  }
}
start();

/*
To catch error use code above

async function start() {//response from the dog server
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()//get body of it and into a readable format
  //console.log(data); //just for testing
  createBreedList(data.message);
}
start();//must do this see the data*/

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
      <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
          return `<option>${breed}</option>`
        }).join('')}
    </select>`;

}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
   const data = await response.json();
   console.log(data);
   createSlideShow(data.message);
  }
}

function createSlideShow(images) {
  //console.log(images);
  let currentPosition = 0;
  clearInterval(timer)
  clearTimeout(deleteFirstPhotoDelay)

  if(images.length > 1) {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')"></div>
    <div class="slide" style="background-image: url('${images[1]}')"></div>
    `;
    currentPosition += 2;
    if(images.length == 2) currentPosition = 0;
    timer = setInterval(nextSlide, 3000)
  } else {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')"></div>
    <div class="slide"></div>
    `;
  }

  

  function nextSlide() {
    document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`)
    deleteFirstPhotoDelay = setTimeout(function() {
      document.querySelector(".slide").remove()
    }, 1000)
    if (currentPosition + 1 >= images.length) {
      currentPosition = 0;
    } else {
      currentPosition++
    }
  }
}
