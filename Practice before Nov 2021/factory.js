const createCar = function (color, speed) {
  const car = {
    color: color,
    speed: speed,
    showCarInfo: function() {
      console.log(`Color: ${this.color}`);
      console.log(`Top Speed: ${this.speed} mph`);
    }
  }
  return car;
}
//console.log(createCar())

const car1 = createCar("red", 180);
console.log(car1);
car1.showCarInfo();

const yourCar = createCar("blue", 200);
yourCar.showCarInfo();

const otherCar = createCar("green", 150);
const yetAnotherCar = createCar("gold", 240);

console.log(otherCar.showCarInfo());
console.log(yetAnotherCar.showCarInfo());

const body = document.querySelector("body");
const firstName = document.getElementById("name");
const city1 = document.getElementById("city");
const hobby1 = document.getElementById("hobby");

const createUser = function (city, hobby) {
  const user = {
    name: "Harry",
    city: city,
    hobby: hobby,
    showProfile: function () {
      firstName.innerText = `Name: ${this.name}`;
      city1.innerText = `City: ${this.city}`;
      hobby1.innerText = `Hobby: ${this.hobby}`;
    }
  }
  return user;
};
createUser();
console.log(body)

const newUser = createUser("Lisbon", "tennis");
newUser.name = "Diego";
newUser.showProfile();


const oneMoreUser= createUser("Paris", "walking");
oneMoreUser.name = "Sally";
oneMoreUser.showProfile();

const yetAnotherUser = createUser("Dublin", "golf");
oneMoreUser.showProfile();
console.log(`We have 3 users at the moment, their names are: 
 ${newUser.name}, ${oneMoreUser.name} and ${yetAnotherUser.name}.`);