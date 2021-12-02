//const div1 = document.querySelector(".myclass");
//const divs = document.querySelectorAll(".myclass");
//divs[1].previousElementSibling.style.color = "red";
/*div1.style.color = "black";

Array.from(divs).forEach(function (div) {
  div.style.color = "blue";
})

for (let div of divs) {
  div.style.backgroundColor = "red";
}

divs[1].style.fontSize = "2rem";*/

const divs = document.querySelectorAll(".myclass");
const showBtn = document.getElementById("show");
const hideBtn = document.getElementById("hide");

showBtn.addEventListener("click", () => {
  Array.from(divs).forEach(function (div) {
    div.style.display = "block";
  })
});

hideBtn.addEventListener("click", () => {
  Array.from(divs).forEach(function (div) {
    div.style.display = "none";
  });
});

const link = document.querySelector("#mylink");
link.href = "www.google.com";
link.style.color = "red";
link.style.backgroundColor = "pink";

const newLink = document.querySelector("#newlink");
const btn5 = document.getElementById("btn5");
console.log(btn5)

btn5.addEventListener("click", () => {

});

newLink.href = "fancy_tickets.html";
console.log(newLink)




