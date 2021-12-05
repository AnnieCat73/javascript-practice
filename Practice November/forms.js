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



