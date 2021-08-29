const link0 = document.querySelector(".whatever span");
const link1 = document.querySelector(".whatever #link1");

const divs = document.querySelectorAll(".whatever1");
//console.log(divs);
divs[0].innerText = `
  Hello World!`;
divs[1].innerHTML = `<p>Blah blah blah.....</p>`;
divs[0].style.backgroundColor = "Blue";
divs[1].style.backgroundColor = "red";

const myClass = document.querySelectorAll(".myclass");
const btn1 = document.getElementById("show");
const btn2 = document.getElementById("hide");
myClass[0].style.backgroundColor = "gold";
myClass[1].style.color = "green";
myClass[1].style.fontSize = "2rem";

for (let i = 0; i < myClass.length; i++) {
  myClass[i].style.backgroundColor = "blue";
}


