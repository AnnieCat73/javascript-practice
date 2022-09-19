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
