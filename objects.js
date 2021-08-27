const shirt = {
  size: "medium",
  color: "red",
  sleevelength: 6
}

console.log(shirt.size);
console.log(shirt["sleevelength"]);

const language = "English";
const greeting = {
  English: "Hi",
  Spanish: "Hola"
}
console.log(greeting[language]);
console.log(greeting.Spanish);

const person = {
  name: "Hans",
  greet: function (otherperson) {
    console.log(`Hello! ${otherperson}`);
  },
  favoriteColor: "green"
}
person.greet("Matilda");

const div = document.getElementById("div");
const span = document.getElementById("span");
const car = {
  color: "red",
  size: "large",
  engine: 1,
  drive: function () {
    span.innerText = "I'm driving!";
  }
  
}
div.innerHTML = car.color;
car.drive();

const div2 = document.getElementById("div2");
const person1 = {
  favoriteColor: "green",
  greet: function (firstName) {
    div2.innerHTML = `Hello! ${firstName}`;
  }
}
person1.greet("Bob");