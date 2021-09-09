const div = document.getElementById("div");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.querySelector(".container");


openBtn.style.backgroundColor = "green";
closeBtn.style.backgroundColor = "red";

function openDiv () {
  div.style.display = "block";
  div.style.display = "inline-block";
  container.style.visibility ="visible";
}
function closeDiv () {
  container.style.visibility = "hidden";
  div.style.display = "none";
}

openBtn.addEventListener("click", function () {
  openDiv();
});

closeBtn.addEventListener("click", function () {
  closeDiv();
});