var url = window.location.href;
console.log(url);
window.location.href = "http://www.twitter.com";

var path = window.location.pathname;
console.log(path);

var previousPage = document.referrer;
console.log(previousPage)*/

const type = document.getElementById("type");
const button = document.getElementById("button");
const input = document.getElementById("text");

button.addEventListener("click", () => {
  takeMeTo(inputValue);
});

function takeMeTo (inputValue) {
  let inputValue = input.value;
  if (inputValue === "Business") {
    window.location.href = "http://www.google.com/business";
  } else {
    window.location.href = "http://www.google.com/";
  }
}
