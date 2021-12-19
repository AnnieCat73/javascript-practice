const clownHat = document.querySelector(".clown-hat");
const clownHatColor = clownHat.getAttribute("data-color");
//console.log(clownHatColor);
const numOfStripes = parseInt(clownHat.getAttribute("data-num-stripes"));
//console.log(numOfStripes)
clownHat.dataset.clownHatColor = "blue";
//console.log(clownHat);


//setAttribute
const div = document.getElementById("div");
div.setAttribute("data-color", "pink");
div.dataset.stripes = "7";
console.log(div);

//getAttribute
const color = div.getAttribute("data-color");
console.log(color);
const stripes = div.dataset.stripes;
console.log(stripes);

//removeAttribute
div.removeAttribute("data-stripes");/////
console.log(div);



