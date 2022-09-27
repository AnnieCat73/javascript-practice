// = to a falsy value:

false
0
""
null
undefined
NaN

//Objects

const user = {
  name: 'Ed',
  age: 25,
  married: false,
  greet: function () {
    console.log("Hello there!");
  }
};

console.log(user.name);
user.greet();

//for in
for (let x in user) {
  console.log(x); //names, age, married etc only get the keys
}

//if need values
console.log(user.age)//25 or
console.log(user[x]);


/////forEach, for Of instead of for

const names = ['Sally', 'Punk']

/*for (let name of names) {
  if(name === 'Punk')
}*/
for (let name of names) {
  console.log(name);
  break;
}

// but can't access index


//specifically for ARRAYS ONLY forEach can get index

names.forEach(function (name, index) {
  console.log(name, index);
})

/*while - if this values to true the computer not like it
let i = 20;
while (i < 30) {
  console.log(i);
  i++;
}*/


//FUNCTIONS

function max(num1 = 0, num2 = 0) {
  num1 + num2;
}
max(); // if don't pass any params or just one can set default values


//for loops

for (let i = 0; i < 100; i++) {//so run from 0-99

  if (i === 20) {
    console.log("You hit 20!");
    continue;//so will keep going after hit 20
    break;//stop after 20
  }
  console.log(i);
}

const texts = ['Singing', 'Watching', 'Cats', 'Dogs']

for (let i = 0; i < texts.length; i++) {
  console.log(texts[i]);
}




//switch

const text = 'kiwi';//so default runs
let fruitNr = 0;

switch (text) {
  case 'banana':
    console.log('I love bananas!');
    fruitNr = 1;
    break;
  case 'apple':
    console.log(`I don't like apples!`);
    fruitNr = 2;
    break;
  case 'avocado':
    console.log(`What fruit is this?`)
    fruitNr = 3;
    break;
  default:
    console.log(`What fruit is that?`)
    break;
}

//Guess game

function guessGame() {
  let randomNr = Math.floor(Math.random() * 11); //number between 1 - 10
}


//Nodelist vs html collection

const collectionItems = document.getElementsByClassName("item");
const nodeItems = document.querySelectorAll(".item");

//getElementByTagname/ById,ByClassName returns an html collection and can only hold node items

//queryselectorAll returns a node list but can hold different node types: nodetext, nodecomments - <!--sjfjd-->

//both can use for loops, for(let item of ManyItems){}

//nodelist you can also use forEach butnot for collection


