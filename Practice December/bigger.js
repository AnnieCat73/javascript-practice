const div = document.getElementById("div");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

/*openBtn.addEventListener("click", () => {
  div.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  div.style.display = "none";
});*/

openBtn.addEventListener("click", () => {
  div.classList.toggle("close");
});