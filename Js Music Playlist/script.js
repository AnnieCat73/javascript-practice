const music = new Audio('vande.mp3');
//music.play();

//Create Array

const songs = [
  {
    id: '1',
    songName: `On My Way <br>
    <p class="subtitle">Cat</p>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg"
  },
  {
    id: '2',
    songName: `Alan Walker-Fade <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg"
  },
  {
    id: '3',
    songName: `Alan Walker-Fade <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg"
  },
  {
    id: '4',
    songName: `Alan Walker-Fade <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg"
  },
  {
    id: '5',
    songName: `Alan Walker-Fade <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg"
  },
  {
    id: '6',
    songName: `Alan Walker-Fade <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg"
  },
]

Array.from(document.getElementsByClassName('song-item')).forEach((element, index) => {
  element.getElementsByTagName('img')[0].src = songs[index].poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[index].songName;
})

let masterPlay = document.getElementById