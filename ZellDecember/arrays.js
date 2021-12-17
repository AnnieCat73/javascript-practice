const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let num of numbers) {
  if (num > 5) {
    console.log(num);
  }
}


let newArray = [];
for (let num of numbers) {
  if (num > 10) {
    newArray.push(num);
  }
}

let anotherNewArray = [];
for (let num of numbers) {
  anotherNewArray.push(num * 5);
}