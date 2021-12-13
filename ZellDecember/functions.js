function add2(num) {
  return num + 2;
}
//const number = add2(8);
//console.log(number);
console.log(add2(18));



const ten = _ => 10;
console.log(ten());
const eleven = () => 11;
console.log(eleven());

const logger = num => `The number is ${num}.`;
console.log(logger(7));

const add = (num1, num2) => num1 + num2;
console.log(add(7, 7));

function addMore(num3, num4) {
  return num3 + num4;
}
console.log(addMore(4, 4));

const multiply1 = function (num5, num6) {
  return num5 * num6;
}
console.log(multiply1(6, 6));

const multiply2 = (num7, num8) => `The two numbers multiplied will be ${num7 * num8}.`;
console.log(multiply2(10, 10));