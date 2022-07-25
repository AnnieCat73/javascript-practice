/* write your code below
function performMath(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;

  } else if (operation === '*') {
    return number1 * number2;

  }
}
console.log(performMath(4, 2, '*'));//8*



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


//Destructuring
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3);//Array(6) [ 1, 2, 3, 4, 5, 6 ]

const arr4 = [{
  name: 'mehul',
}]
const arr5 = [{
  name: 'John',
}]

const arr6 = [...arr4, ...arr5]
console.log(arr6)//Array [ {"name:" "mehul"}, {"name": "john"} ]

const obj1 = {
  name: 'mehul'
}
const obj2 = {
  age: '22'
}

const obj3 = {
  ...obj1,
  ...obj2
}

console.log(obj3)//Object { name: "mehul", age: "22" }*/



const promiseObject = fetch('/data.json');

promiseObject.then(response => {
  const promiseObject = response.json()
  promiseObject.then(data => {
    console.log(data)
  })
})


