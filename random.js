var rand = Math.random();
console.log(rand);

const power = Math.pow(4, 3);
console.log(power);

console.log(10*Math.random() +1);
console.log(Math.floor(10*Math.random() +1));

const randomNo = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNo);

console.log(Math.floor(Math.random() * ((8-3) + 1) +3));

const div = document.getElementById("div");
const btn = document.getElementById("btn");
const people = ["John", "Sylvia", "Jens", "Christian"];
btn.addEventListener("click", function () {
  
  const randomPick = people[Math.floor(Math.random() * people.length)];
  //console.log(randomPick)
  div.innerHTML = randomPick;

});
