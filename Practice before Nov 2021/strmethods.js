const div = document.getElementById("div");
const string = "There is a big black cat called Nelson and he is scary!";
const result = string.slice(10, -17);
console.log(result)
/*console.log(result);
const replace = string.replace("cat", "dog");
div.innerText = replace;*/

const btn = document.getElementById("click");
console.log(btn)
btn.addEventListener("click", function () {
  div.style.backgroundColor = "green";
});
