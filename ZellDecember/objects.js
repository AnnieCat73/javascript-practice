const cat = {
  nickName: "Noozybear",
  breed: "Siamese",
  play: function () {
    return `${this.nickName} is playing with a ball!`;
  }
};

console.log(cat["breed"]);
cat.age = 9;
console.log(cat);
cat.isPurring = true;
console.log(cat);

console.log(cat.play());

const james = 22;
const valerie = 25;
const kenneth = 27;
const annie = 27;

if (annie < james) {
  console.log(`Annie is younger than James!`);
} else if (annie > valerie) {
  console.log(`Annie is older than Valerie!`);
} else if (annie !== kenneth) {
  console.log(`Annie is the same age as Kenneth!`);
}



