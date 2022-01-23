const div1 = document.getElementById("div1");
let x = 5;
let y = 3;
const sum = x+ y;
div1.innerText = sum;

let a = 5;
let increase1 = a +1;
let increase2 = a += 1;
let increase3 = a++;

const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const slicesOfPizza = 11;
const noOfFriends = 3;
const noOfSlicesEach = slicesOfPizza / noOfFriends;
const leftOverSlices = slicesOfPizza % 3;
div2.innerHTML = "Slices for each friend: " + noOfSlicesEach;
div3.innerText = "Leftover slices: " + leftOverSlices;

const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const billAmount = 10;
const tip = (billAmount * 20) /100;
const total = billAmount + tip;
div4.innerText = "Bill: $" + billAmount;
div5.innerText = "Tip: $"  + tip;
div6.innerText = "Total: $" + total;
