const str = "Hi, here's some text. Hi again. Also, hi.";
const result = str.match(/hi/gi);
console.log(result);
const replaceResult = str.replace(/hi/ig, "Bye");
console.log(replaceResult);*/

var string = "Hi, here's some text. Hi again. Also, hi.";
var result = string.replace(/hi/gi, function (currentValue) {
  if (currentValue === "Hi") {
    return "Bye";
  } else {
    return "bye";
  }
});
console.log(result);

const str1 = "Tahth, taht is good, taht is!";
function autocorrect () {
  const result1 = str1.replace(/taht/gi, function (currentValue1) {
    if (currentValue1 === "Taht") {
      return "That";
    } else {
      return "that";
    }
  })
  
};
console.log(result1);

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const div = document.getElementById("div");

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", function () {
 validateEmail(input);
});

function validateEmail (input) {
  if (input.value.match(validRegex)) {
    div.innerText = "Valid email";
    return true;
  } else {
    div.innerText = "Invalid email";
    return false;
  }
};

	