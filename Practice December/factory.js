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

const GroceryList = () => (
  <ul>
    <li>Eggs</li>
    <li>Bagels</li>
    <li>Cheese</li>
    <li>Sausage</li>
    <li>Butter</li>
    <li>Old Bay</li>
  </ul>
);


