const check = document.getElementById("mycheckbox");

check.addEventListener("click", function () {
  if (this.checked) {
    console.log("checked")
  } else {
    console.log("unchecked");
  }
});

const h1 = document.getElementById("h1");
const priceSpan = document.getElementById("price");
const checkbox = document.getElementById("addpremiumoption");

let price = 50;
priceSpan.innerHTML = price;

checkbox.addEventListener("click", function () {
  addPremium();
});

function addPremium() {
  let premiumPrice = Number(checkbox.value);
  if (this.checked) {
    price -= premiumPrice;
  } else {
    price += premiumPrice;
  }
  priceSpan.innerHTML = price;
}

const radioA = document.getElementById("radioa");
const radioB = document.getElementById("radiob");

radioA.addEventListener("click", (e) => {
  console.log(e.currentTarget);
});

radioB.addEventListener("click", (e) => {
  console.log(e.currentTarget);
});

/*document.getElementById('radioa').onclick = function () {
  console.log(this.value);
};

document.getElementById('radiob').onclick = function () {
  console.log(this.value);
};*/

const green = document.getElementById("green");
const blue = document.getElementById("blue");
const spanDiv = document.getElementById("spandiv");

green.addEventListener("click", function () {
  spanDiv.innerHTML = "green";
});

blue.addEventListener("click", function () {
  spanDiv.innerHTML = "blue";
});

const dropdown = document.getElementById("myselect");

dropdown.addEventListener("change", function (e) {
  console.log(e.target.value);
});

const shoeSpan = document.getElementById("color");
const dropdownMenu = document.getElementById("mycolor");
let defaultValue = "Yellow";
const blueCar = document.getElementById("blue");

dropdownMenu.addEventListener("change", function (e) {
  defaultValue = e.target.value;
  //console.log(defaultValue)
  if (defaultValue === "Blue") {
    shoeSpan.innerText = "Blue";
  } else if (defaultValue === "Red") {
    shoeSpan.innerText = "Red";
  } else {
    shoeSpan.innerText = "Yellow";
  }

});










