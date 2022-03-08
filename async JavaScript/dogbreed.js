
/*old code

fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json()
  }).then(function(data) {
    console.log(data)
})*/

//modern

async function start() {//response from the dog server
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()//get body of it and into a readable format
  //console.log(data); //just for testing
  createBreedList(data.message);
}
start();//must do this see the data

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
   const data = await response.json()
   console.log(data)
  }
}
