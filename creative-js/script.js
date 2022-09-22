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


//