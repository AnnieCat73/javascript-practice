/*
	- goal: let users select options, then show price
	- handling the price:
		- we can store it in a variable
		- the price should change when an option is clicked
	- handling the options:
		- use checkboxes for options that can all be added
		- use radio buttons where user can only select one
		- data can be stored in an object
	- handling the display:
		- we want to show a list of selections, not just price
*/

//Start price of car and show it 
let price = 20000;
let priceSpan = document.getElementById("price");
priceSpan.innerHTML = price;

// when user clicks sunroof, handle it properly
const sunroofOption = document.getElementById("sunroof");

sunroofOption.addEventListener("click", function () {
  handleOption();
});

// when user clicks an option...
function handleOption () {
  //convert value from string to number
  const sunroofPrice = Number(sunroofOption.value);//can't use (this.value)
  //console.log(sunroofPrice)
  //if checked, add to total price
  if(sunroofPrice) {
      price += sunroofPrice;
    } 
    //otherwise subtract from total price
    else {
      price -= sunroofPrice;
    }
  //show price*/
  priceSpan.innerHTML = `$${price}`
};
