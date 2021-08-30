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

const select = document.getElementById("myselect");
select.addEventListener("change", function (e) {
  //console.log(e.target.value);
  console.log(this.value);
});

const colorDiv = document.getElementById("color");
const dropdown = document.getElementById("colorselect");
let selection = "red";
dropdown.addEventListener("change", function (e) {
  selection = e.target.value;
  if(selection === "red") {
    colorDiv.innerText += "red"
  } else if (selection === "blue") {
    colorDiv.innerText  += "blue";
  }
   else if (selection === "black") {
    colorDiv.innerText  += "black";
  }
});




