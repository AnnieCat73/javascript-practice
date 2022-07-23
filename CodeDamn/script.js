/* write your code below
function performMath(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;

  } else if (operation === '*') {
    return number1 * number2;

  }
}
console.log(performMath(4, 2, '*'));//8*/



const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterEl = document.querySelector('.counter');
let counter = 0;

function incrementCounter() {
  counter++;
  counterEl.innerText = counter;
}

function decrementCounter() {
  counter--;
  counterEl.innerText = counter;
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);

