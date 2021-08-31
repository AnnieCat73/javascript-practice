const checkBox = document.getElementById("mycheckbox");
checkBox.addEventListener("click", function () {
  if (this.checked) {
    console.log("checked");
  } else {
    console.log("unchecked");
  }
});

let priceDiv = document.getElementById("priceDiv");
const priceCheckBox = document.getElementById("pricecheck");
let price = 50;
priceDiv.innerHTML = price;

priceCheckBox.addEventListener("click", function () {
 addPremium() 
});

function addPremium () {
  let premiumPrice = Number(priceCheckBox.value);
  if (priceCheckBox.checked) {
    price += premiumPrice;
  } else {
    price -= premiumPrice;
  }
  priceDiv.innerHTML = price;
};

const radioa = document.getElementById("radioa");
const radiob = document.getElementById("radiob");
radioa.addEventListener("click", () => {
 console.log(radioa.value);
});
radiob.addEventListener("click", () => {
  console.log(radiob.value);
});

const carDiv = document.getElementById("cardiv");
const green = document.getElementById("colora");
const blue = document.getElementById("colorb");
const red = document.getElementById("colorc");
green.addEventListener("click", function () {
 carDiv.innerHTML += this.value; 
});
blue.addEventListener("click", function () {
  carDiv.innerHTML += this.value; 
});
red.addEventListener("click", function () {
  carDiv.innerHTML += this.value; 
});

const span = document.getElementById("color");
const dropdown = document.getElementById("colorselect");
span.innerHTML = "";
dropdown.addEventListener("change", function (e) {
 const userInput = this.value;
  //console.log(userInput)
  if (userInput === "Blue") {
    span.innerText = "blue";
  } else if (userInput ==="Red") {
    span.innerText = "red";
  } else if (userInput === "Black") {
    span.innerText = "black";
  } 
});








