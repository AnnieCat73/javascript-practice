const btn = document.getElementById("btn");
const result = document.getElementById("dog_result");


btn.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
      if(data.url.includes('.mp4')) {
        getRandomDog()
      } else {
        dog_result.innerHTML = `<img src="${data.url}"/>`
      }
      

    })

}
/*
function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      imageWrapper.innerHTML = `<img src="${data.message}`
    })

}*/