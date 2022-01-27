/*Day #1 - split()

//split(separator, limit)

//splits a string into an array of substrings/so from string to array
//separator - (,) (&) or if left empty () returns it as 1 array
//limit - no of splits
//console.log(`Today was a very good day!`);//string
//console.log(['Today', 'was', 'a', 'very', 'good', 'day!'])//array

const today = `Today was a very good day!`;
today.split(" ", 3);
console.log(today);//['Today','was', 'a'];

const string = "This is going to be fun!";
string.split();
console.log(string.split());//#array ["This is going to be fun!"]
console.log(string.split(""));//[
    "T",
    "h",
    "i",
    "s",
    " ",
    "i",
    "s",
    " ",
    "g",
    "o",
    "i",
    "n",
    "g",
    " ",
    "t",
    "o",
    " ",
    "b",
    "e",
    " ",
    "f",
    "u",
    "n",
    "!"
  ]

console.log(string.split(" "));//[
    "This",
    "is",
    "going",
    "to",
    "be",
    "fun!"
  ]

console.log(string.split("g"));/*[
    "This is ",
    "oin",
    " to be fun!"
  ]
console.log(string.split("g", 2));//["This is ","oin"]

const tricky = "goshgoshgoshgoshgoshgoshgoshgosh";
console.log(tricky.split("sh", 7));/*[
    "go",
    "go",
    "go",
    "go",
    "go",
    "go",
    "go"
  ]*/


//Day #2 - slice(start, end) - slices out what you tell it to

//NB (start, end)- start inclusive in what you get but end isn't
//so slices right before it ended

const array = ["fire", "water", "ice", "steam", "sand", "grass"];

//console.log(array.slice(0, 4));
//console.log(array.slice(3));//here starts at 3["steam", "sand", "grass"]

//Get last one
//console.log(array.slice(5));//[grass]
//console.log(array.slice(-1));//[grass]
//console.log(array.slice(-2));//["sand" "grass"]//give you last 2 at end

//get water, ice and steam with 2 - nos
console.log(array.slice(-5, -2));

//Day #3 - slice(), substring(), substr()


function myFunction(num1, num2) {

  return num1 + num2;
}
console.log(myFunction(1, 2));

//Substrings

