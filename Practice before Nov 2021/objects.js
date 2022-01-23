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

const tractor = {
  speed: 20,
  driveMe: function () {
    console.log(`I am driving at ${this.speed} mph!`);
  },
  driveFaster: function () {
    this.speed += 10;
    this.driveMe();
  }
}
tractor.driveMe();
tractor.driveFaster();

const shoe = {
  size: 5,
  bigger: function () {
    this.size += 1;
    console.log(`My shoe size is now ${this.size}`);
  }, 
  smaller: function () {
    this.size -= 1;
    console.log(`My shoe size was ${this.size}`);
  }
}
shoe.bigger();
shoe.smaller();

const div3 = document.getElementById("div3");
div3.addEventListener("click", function () {
  this.style.backgroundColor = "green";
});

const plane = {
  isFlying: true,
  fly: function () {
    console.log(`This plane has ${this.passengers} passengers!`);

  },
  addPassengers: function () {
    this.passengers += 20;
    this.fly();
    console.log(`This plane has now ${this.passengers} passengers!`);
  },
  passengers: 50,
  isAtFullCapacity: false,
}
plane.fly();
plane.addPassengers();
console.log(plane.isAtFullCapacity);