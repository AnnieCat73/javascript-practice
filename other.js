/*const array = ["blue", "purple", "red", "black"];
function containsPurple (array) {
  for(let color of array) {
    if (color === "purple" || color === "magenta") {
      return true;
    } else {
      return false;
    }
  }
}
containsPurple(["blue", "purple", "red", "black"]);

const arr = [1, 2, 3]
function doubleArr (arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}
doubleArr([1, 2, 3]);*/

let password = "heloo kitty";
if (password.length >= 6) {
  if (password.indexOf("") === -1) {
    console.log("Valid password!")
  } else {
    console.log("Password is long enough but can't contain spaces!");
  }
}