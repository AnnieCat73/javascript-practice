const music = new Audio('audio/Pray - Anno Domini Beats.mp3');
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
    songName: `Silly Love Songs <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-jonathan-borba-3076516.jpg"
  },
  {
    id: '3',
    songName: `Hello <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/pexels-karolina-grabowska-4498553.jpg"
  },
  {
    id: '4',
    songName: `Fade <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/16104017791582534645-128.png"
  },
  {
    id: '5',
    songName: `Shout <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/kike-vega-F2qh3yjz6Jk-unsplash.jpg"
  },
  {
    id: '6',
    songName: `Kittycat <br>
    <p class="subtitle">Alan Walker</p>`,
    poster: "images/edgar-nKC772R_qog-unsplash (1).jpg"
  },
]

Array.from(document.getElementsByClassName('song-item')).forEach((element, index) => {
  element.getElementsByTagName('img')[0].src = songs[index].poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[index].songName;
})

let masterPlay = document.querySelector('.master-play');
let wave = document.getElementsByClassName('wave')[0];


masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
  } else {
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
  }

})

const makeAllPlays = () => {
  Array.from(document.querySelector('.playListPlay')).forEach((element) => {

    element.classList.add('bi-play-circle-fill');
    element.classList.remove('bi-pause-circle-fill');

  })

}



let index = 0;
//May not need to usee
let posterMasterPlay = document.getElementById('poster-master-play');
let title = document.getElementById('title');
//
Array.from(document.querySelector('.playListPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle-fill');
    e.target.classList.add('bi-pause-circle-fill');
    music.src = `audio/${index}.mp3`;
    music.play();
    //May not use
    posterMasterPlay.src = `img/${index}.jpg`;
    let songTitle = songs.filter((ele) => {
      return ele.id == index;
    })
    songTitle.forEach(ele => {
      let { songName } = ele;
      title.innerHTML = songName;
    })
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
    music.addEventListener('ended', () => {
      masterPlay.classList.add('bi-pause-fill');
      masterPlay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
    })
    //

  })
})





