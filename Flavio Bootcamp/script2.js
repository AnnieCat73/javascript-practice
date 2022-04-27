//form

const input = document.querySelector("input");
//or the same
const username = document.querySelector("#username");
//console.log(username)

/*input.addEventListener("input", () => {
  console.log(input.value);
}) or
input.addEventListener("input", (e) => {
  console.log(e.target.value);
})*

//or the same

username.addEventListener("change", () => {
  console.log(username.value);
})

username.addEventListener("cut", () => {
  console.log(username.value);
})//what you have cut from input field gets logged in console

username.addEventListener("copy", (e) => {
  console.log(e.target.value);
})//what you have copied from input field gets logged in console

username.addEventListener("paste", (e) => {
  console.log(e.target.value);//gets <empty string>
})//what you have copied/cut from input field gets pasted in console
//but if you:
username.addEventListener("paste", () => {
  console.log('paste');//paste gets printed in console
})

username.addEventListener("focus", (e) => {
  console.log('focus');//logs focus
})//logs <empty string> if use e.target.value

username.addEventListener("blur", (e) => {
  console.log('blur');//logs blur when click out of input field
})//with e.target.value logs <empty string>*/

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert('Submitted');
})




