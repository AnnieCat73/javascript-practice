const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

const cat_btn = document.getElementById("cat_btn");
const cat_result = document.getElementById("cat_result");

const dFactBtn = document.getElementById("dog-btn-fact");
const dFactResult = document.getElementById("dog-fact-result");


dog_btn.addEventListener("click", getRandomDog);
cat_btn.addEventListener("click", getRandomCat);

dFactBtn.addEventListener("click", getDogFacts);



function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
      cat_result.innerHTML = `<img src="${data.file}"/>`

    })
}

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then(data => {
      dog_result.innerHTML = `<img src="${data.url}"/>`
    })
}

function getDogFacts() {
  fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    .then(response => response.json())
    .then(data => {
      dFactResult.innerHTML = `<p>${data.fact}</p>`
    })
}

