/*Question #1:
How to define a class with properties and methods in 
JavaScript?

Answer 
A class declared with a name which acts as its identifier. We can use the name to create new objects using the keyword new*

class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
    this.stop = function () {
      console.log(`${this.model} has stopped running!`)
    }
  }//or
  start() {
    console.log(`${this.name} engine started`)
  }
}
const car1 = new Car("fiesta", "ford");
car1.start();
car1.stop();

const car2 = new Car("s", "tesla");
car2.start();
car2.stop();
//or

/*class HouseKeeper {
  constructor(yearsOfEperience, name, cleaningRepertoire) {
    this.yearsOfEperience = yearsOfEperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
      alert("Cleaning in progress!");
    }
  }
}
const houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
houseKeeper1.clean();)*/

/*Question #2:
How to implement class inheritance in JavaScript?

Answer 
A class can be extended by another class, and the new class will inherit all of its parent class methods. The object that initializes the child class will then be able to use methods from both classes.*/

class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
    /*this.stop = function () {//THIS NO WORK HERE
      return "From parent stop function"
    }*/
  }
  stop() {
    return "From parent stop function"
  }
  start() {
    return "From Parent Start Function"
  }

}

class ElectricCar extends Car {
  start() {
    const fromParent = super.start(); // calling parent class constructor 
    console.log(`${fromParent} Battery at 95%.`);
  }
  stop() {
    const fromParentAgain = super.stop();
    console.log(`${fromParentAgain} Stop the car!`)
  }
}
let tesla = new ElectricCar("Tesla", "Model 3");
let honda = new ElectricCar("Honda", "Model 5");
tesla.start();//From Parent Start Function Battery at 95%.
honda.stop();//From parent stop function Stop the car!

/*Question #3:

How to find duplicate elements in a given array?
Given Input Array: [10, 5, 5, 10, 2, 3, 18] 
Expected output: [5, 10] 

Answer 
To find duplicates in an array, we can make use of the Array filter method. Filter method takes 3 parameters, element, index and array on which filter is applied. Then we check for the indexOf each element and return whichever does not match with the index. */

const numbers = [10, 5, 5, 10, 2, 3, 18];

const duplicateNumbers = numbers.filter((num, index, array) => array.indexOf(num) !== index);
console.log(duplicateNumbers)//Array [ 5, 10 ]//or

const duplicateNumbersAgain = numbers.filter(function (num, index, array) {
  return array.indexOf(num) !== index;
});
console.log(duplicateNumbersAgain)////Array [ 5, 10 ]


