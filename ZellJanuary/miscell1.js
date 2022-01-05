/*Ternary
//condition ? truthyExp : falseyExp
//from
if (isLightGreen) {
    walk();
} else {
    stop();
}
//to
isLightGreen ? walk() : stop();
//or
isLightGreen 
? walk()
: stop()

const lightColor = 'red';

lightColor === green
  ? walk()
  : stop()
//here says if lightColor is strictly green but 
//it isn't, it's red

const fruitBasket = ['apple', 'pear', 'orange'];
const appleIndex = fruitBasket.indexOf("apple");
console.log(appleIndex);//0

appleIndex === 2
    ? eat()
    : wash()*/

/*The AND operator (&&) is used to check if all expressions that are 
truthy.
&& returns the first falsey expression if any expressions is falsey
&& returns the last expression if all expressions are truthy.

The OR operator
The OR operator (||) is used to check if at least one expression 
is truthy.
|| returns the first truthy expression if any expressions are truthy
|| returns the last expression if all expressions are falsey.

'Benjamin' && 'Thaddeus'. Answer: Thaddeus
'Benjamin' || 'Thaddeus'. Answer: Benjamin
'' && null. Answer: ''
'' || null. Answer: null
2550284 && 0. Answer: 0
2550284 || 0. Answer: 2550284

//EARLY RETURNS

const multiply = (num1, num2) => {
    return num1 * num2;
    console.log('This statement will never be read!')
}
//Code after the return statement is not read.
//has return and {}

container.addEventListener('click', e => {
    const el = e.target.closest('.some-element')
    if (el) {
      // Rest of the code here
    }
  });
  //to
  container.addEventListener('click', e => {
    const el = e.target.closest('.some-element')
    if (!el) { return }
  
    // Rest of the code here
  });

//DESTRUCTURING

//OBJECTS
// Getting values from objects
const person = {
    firstName: 'Zell',
    lastName: 'Liew'
}
const firstName = person.firstName;
const lastName = person.lastName;
//to
const {firstName, lastName} = person
console.log(firstName); // Zell
console.log(lastName); // Liew

//ARRAYS
const numbers = [22, 99, 100];
//to first item, second item etc:
const [firstNumber, secondNumber] = numbers;
console.log(firstNumber);// 22
console.log(secondNumber); // 99

//FUNCTION ARGUMENTS-if argument is an array or object
const scores = [100, 99, 98];
const firstThree = ([first, second, third]) => {
  return {
    first: first,
    second: second,
    third: third
  }
}
console.log(firstThree(scores));

const posts = [{
    id: 800,
    title: 'This is 💩'
  }, {
    id: 801,
    title: 'Pooing is a natural thing.'
  }, {
    id: 802,
    title: 'Poo jokes are getting irritating'
}];

const [firstPost, secondPost] = posts;
console.log(firstPost)

const [firstPost] = posts
const {id, title} = firstPost

//DESTRUCTURED PARAMETERS-if too many parameters
//from:
const createUser = (firstName, lastName, email, password, location) => {
    // ...
}
createUser('Zell', 'Liew', 'zell@zellwk.com', '12345678', 'Singapore')
//to-pass an object instead
const createUser = (user) => {
    const { firstName, lastName, email, password, location } = user
    // ...
}
  
createUser({
    email: 'zell@zellwk.com',
    password: '12345678',
    firstName: 'Zell',
    lastName: 'Liew',
    location: 'Singapore'
});

//const createEmployee = (firstName, lastName, age, gender, position="associate") => {

//}
//to*/
const createEmployee = (employee) => {
  const { firstName, lastName, age, gender, position="associate" } = employee;
}
console.log(createEmployee({
  firstName: 'Hans',
  lastName: 'Larsen',
  age: 28,
  gender: 'male',
  position: 'associate'
}));

const array = [1,2,3];
const array2 = [...array, 5, 6];
console.log(array2);

const spreads  = [10, 11,12];
const spreading = (tenth, eleventh, twelth) => {
  console.log(tenth);
  console.log(eleventh);
  console.log(twelth);
}
spreading(...spreads);//10, 10, 12

