const link = document.querySelector("link");
console.log(link);
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  link.href = "fancy_tickets.html";
  
});
