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
const div1 = document.getElementById("div1");
const div3 = document.getElementById("div3");
const div2 = document.getElementById("div2");

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
      div.innerText = `Name: ${this.name}`;
      div1.innerText = `City: ${this.city}`;
      div2.innerText = `Hobby: ${this.hobby}`;
    }
  }
  return user;
}
createUser();


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

user2.showProfile();
user1.showProfile();
user3.showProfile();

//console.log(user3)

window.addEventListener("click", function (e) {
  div3.innerHTML = e.target;
})

//4
const div4 = document.getElementById("div4");
div4.style.backgroundColor = "orange";
div4.style.display = "inline-block";

const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
function doSomething() {
  console.log("I am cleaning my room!");
};

btn.addEventListener("click", doSomething);

function add(a, b) {
  console.log(a + b);
}

btn1.addEventListener("click", function () {
  add(5, 9);
});

btn3.addEventListener("click", function () {
  console.log("Here I am!")
});

function respondOnlyOnce() {
  console.log("You should see this only once!");
  btn4.removeEventListener("click", respondOnlyOnce);
}

btn4.addEventListener("click", respondOnlyOnce);





