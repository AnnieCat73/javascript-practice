const cat = {
  breed: "Siamese",
  age: 9,
  nickName: "Noozybear",
  isSleeping: true,
  pet: function () {
    console.log("purr");
  },
  favoriteToys: ["mouse", "hairbands", "ball"]
};

console.log(cat);
console.log(cat.pet());
console.log(cat["age"]);
cat.isSleeping = false;
console.log(cat.isSleeping);
console.log(cat.favoriteToys[1]);
cat.favoriteToys[2] = "catnip toy";
console.log(cat.favoriteToys);

console.log(cat.breed.toUpperCase());

const string = "Hellooooooooooooooo!";
console.log(string.toUpperCase());
console.log(string.indexOf("o"));
console.log(string.replace("o", "p"));

console.log(parseInt("3435.9999"));
console.log(parseFloat("67.999"));

