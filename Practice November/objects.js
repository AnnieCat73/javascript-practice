const hat = {
  size: 3,
  color: "green"
}

console.log(hat.size);
console.log(hat['color']);

const car = {
  color: "red",
  size: "small",
  engine: true
}

const div = document.getElementById("div");
div.innerHTML = car.color;


const div1 = document.getElementById("div1");
const fiat = {
  color: "blue",
  size: "medium",
  drive: function () {
    div1.innerText = `I'm driving a ${this.color} Fiat and its size is ${this.size}!`;
  }

}
fiat.drive();

const div2 = document.getElementById("div2");
const person = {
  favoriteColor: "green",
  greet: function (name) {
    div2.innerHTML = `Hello, ${name} and your favorite color is ${this.favoriteColor}!`;
  }
}
person.greet("Hans");

