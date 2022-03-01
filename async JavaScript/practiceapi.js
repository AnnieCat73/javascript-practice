const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

const cat_fact = document.getElementById('cat_fact');
const dog_fact = document.getElementById('dog_fact');

const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener("click", getRandomCatFact);
dog_btn.addEventListener("click", getRandomDog);

function getRandomCatFact () {
  fetch('https://meowfacts.herokuapp.com')
    .then(response => response.json())
    .then(data => {
      cat_result.innerHTML = `<p>${data.data}</p>`
    })
}
function getRandomDog () {
  fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {
      dog_result.innerHTML = `<img>${data.image}</img>`
    })
}

//with async await