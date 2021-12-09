const createCar = function () {
  const car = {
    color: "red",
    topSpeed: 180,
    showCarInfo: function () {
      console.log(`Color: ${this.color}`);
      console.log(`Top speed: ${this.topSpeed}`);

    }
  }
  return car;
}

const car1 = createCar();
console.log(car1.showCarInfo());


console.log(createCar());

const createOutfit = function (shirt, pants) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    size: "medium",
    isNew: true,
    showOff: function () {
      this.isNew = false;
      console.log("Show me your old outfit!");
    },
    accessories: "bangles",
    shoes: "sandals"
  }
  return outfit;
}

console.log(createOutfit());
const monday = createOutfit();
monday.shirt = "blue";
monday.shoes = "wellies";
monday.isNew = false;
//console.log(Monday);

const tuesday = createOutfit("red", "grey");
//console.log(tuesday);

/*for (let key in tuesday) {
  console.log(key, tuesday[key]);
}*/

const outfitArray = ["monday", "tuesday"];

for (let outfit of outfitArray) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}

const div = document.getElementById("div");
const createUser = function (name, city, hobby) {
  const user = {
    name: name,
    city: city,
    hobby: hobby,
    isHappy: true,
    willParticipate: function () {
      console.log(`this.name will only participate in this.golf!`)
    },
    showProfile: function () {
      div.innerHTML = this.user;
    }
  }
  return user;
}

/*console.log(createUser());
const user1 = createUser();
user1.name = "Bob";
user1.city = "London";
user1.hobby = "fishing";
user1.willParticipate = function () {
  console.log(`this.user1.name will not participate in anything!`);
}
console.log(user1);*/

const user1 = createUser("Sally", "Dublin", "golf");
const user2 = createUser("Henry", "Paris", "tennis");
const user3 = createUser("John", "London", "football");

//console.log(user3)