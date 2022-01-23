const nameInput = document.getElementById("name");
const div = document.getElementById("div");
nameInput.addEventListener("keyup", function () {
  div.innerText = "Hello [name goes here]";
});

const div1 = document.getElementById("div1");
const inputBox = document.getElementById("box");
inputBox.addEventListener("focus", () {
  inputBox.style.border = "5px";
});

const textBox = document.getElementById("input");
const input = textBox.value;
function borderColor () {
  if (input === "") {
    textBox.style.borderColor = "red";
  } else {
    textBox.style.borderColor = "black";
  }
};
textBox.addEventListener("keyup", () => {
  borderColor();
});

const output = document.getElementById("output");
const textBox = document.getElementById("mytext");
textBox.addEventListener("focus", () => {
  output.innerText = "text box selected";
});
textBox.addEventListener("blur", () => {
  output.innerText = "text box deselected";
});
