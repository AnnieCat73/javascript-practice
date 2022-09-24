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


//forEach, for Of instead of for

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