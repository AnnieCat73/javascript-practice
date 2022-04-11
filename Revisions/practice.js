/*
const colors = [
  "#C94C24", //orange
  "#268BD2", //blue
  "#C4226F", //pink
  "#859835", // lime
  "#6D73C2", // purple
  "#37A198", // green
  "#DA3637", //red
  "#F0AD4E" //yellow
];


function makeBoxes (howMany) {
  const myNode = document.getElementById("my-node");

  const colorAmt = colors.length;
  let currColor = 0;
  for (let i = 0; i < howMany; i++) {
    const myElement = document.createElement("div");
    myElement.classList.add("box");
    myElement.style = "background-color: " + colors[currColor];
    myNode.appendChild(myElement);

    if (currColor === colorAmt -1) {
      currColor = 0
    } else {
      currColor++;
    }
  }
  myNode.addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  }, false);

}
makeBoxes(20);*/

//Swatches

const swatchContainer = document.querySelector("#swatch-container");

const swatchData = [
  {
    hex: "#fde2e4",
    rgb: "rgb(253, 226, 228)",
  },
  {
    hex: "#e2ece9",
    rgb: "rgb(226, 236, 233)",
  },
  {
    hex: "#bee1e6",
    rgb: "rgb(190, 225, 230)",
  },
  {
    hex: "#cddafd",
    rgb: "rgb(205, 218, 253)",
  },
];

swatchContainer.innerHTML = `
  <div class="swatch">
  <div class="color pink"></div>
  <div class="content">
    <p>#fde2e4</p>
    <p>rgb(253,266,228)</p>
  </div>
  </div>
  <div class="swatch">
  <div class="color green"></div>
  <div class="content">
    <p>#e2ece9</p>
    <p>rgb(266,236,233)</p>
  </div>
  </div>
  <div class="swatch">
  <div class="color blue"></div>
  <div class="content">
    <p>#bee1e6</p>
    <p>rgb(190,255,230)</p>
  </div>
  </div>
  <div class="swatch">
  <div class="color purple"></div>
  <div class="content">
    <p>#cddafd</p>
    <p>rgb(205,218,253)</p>
  </div>
  </div>`;

