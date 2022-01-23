const div = document.getElementById("div");
const pets = ["cat", "dog", "rabbit", "hamster", "snake"];
div.innerHTML = pets[1];

const div1 = document.getElementById("div1");
const words = ["Hello!", "Goodbye"];
div1.innerHTML = words.length;

const span = document.querySelector("#span");

const dressSizes = ["small", "16", "XL", "petite"];
dressSizes[3] = "extra-small";
span.innerText = dressSizes[3];


const div2 = document.getElementById("div2");
const familyNames = ["Smith", "Nelson", "Dexter", "Hansen"];
for(let i = 0; i < familyNames.length; i++) {

  div1.innerHTML += `Hello families: ${familyNames[i]}`;
}

for(let family of familyNames) {
  div2.innerHTML = `Hello family: ${familyNames[2]}`;
}


const div3 = document.getElementById("div3");
const whaterver = ["cat", "car", "chair", "dress", "skirt"];
whaterver.push("hat", "tree");
div3.innerHTML = whaterver;
whaterver.pop();
div3.innerHTML = whaterver;

const div4 = document.getElementById("div4");
const girlNames = ["Sally", "Ann", "kelly"];
girlNames.shift();
console.log(girlNames);
girlNames.unshift("Hailey", "Petra", "Chloe");
console.log(girlNames);

const reverseOrder = girlNames.reverse();
console.log(reverseOrder);

const splice = girlNames.splice(0, 2);
console.log(splice);
console.log(girlNames);

const splice1 = girlNames.splice(1, 0, "Kerry");
console.log(splice1);
console.log(girlNames);

const splice2 = girlNames.splice(0, 3, "Polly", "Sam", "Terry");
console.log(splice2);
console.log(girlNames);

const slice = girlNames.slice();
console.log(slice);

const moreNames = girlNames.slice(0, 2);
console.log(moreNames)
const moreNames1 = girlNames.slice(-3);
console.log(moreNames1);
const moreNames2 = girlNames.slice(1);
console.log(moreNames2);

console.log(moreNames.includes("Sally"));

var index = moreNames.indexOf("Sam");
console.log(index);

const join = reverseOrder.concat(moreNames, girlNames);
console.log(join);

const newIndex = [...reverseOrder, ...moreNames, ...girlNames];
console.log(newIndex);


