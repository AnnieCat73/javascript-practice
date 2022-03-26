/*Understanding DOM

var colors = [
  "#C94C24", //orange
  "#268BD2", //blue
  "#C4226F", //pink
  "#859835", // lime
  "#6D73C2", // purple
  "#37A198", // green
  "#DA3637", //red
  "#F0AD4E" //yellow
];

function makeBoxes(howMany) {//howmany is a parameter for makeBoxes()
  var colorAmt = colors.length;//how many colors
  var currColor = 0;//starting index
  var myElement;//the element you are creating
  var myNode = document.querySelector(".boxes");//where will put myElement in, the node


  //generating the myElement
  for (var i = 0; i < howMany; i++) {
    myElement = document.createElement("div");
    myElement.className = "box";
    myElement.style = "background-color: " + colors[currColor];//the index we are in colors array
    myNode.appendChild(myElement);//add it to the dom

    if (currColor === colorAmt - 1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }

  myNode.addEventListener(
    "click",
    function (e) {
      e.target.parentNode.removeChild(e.target);
    },
    false
  );//false makes it bobble properly
}

makeBoxes(30);*/

/**CONSTRUCTOR */
function Hamburger(nodeName) {
  var myNode = document.querySelector(nodeName + ' .hamburger');

  return {
    activate: function() {
      myNode.addEventListener('click', function(e) {
      myNode.parentNode.querySelector('.navbar').classList.toggle('hidden');
      }, false);
    }, // activate
    hide: function() {
      myNode.parentNode.querySelector('.navbar').classList.add('hidden');
    } // hide
  } //return
} //Hamburger

var topMenu = new Hamburger('#topMenu');
topMenu.activate();

var bottomMenu = new Hamburger('#bottomMenu');
bottomMenu.activate();
bottomMenu.hide();

//Array that becomes mutable /immutability = an element is unchangeable

const myArr = [5, 6, 7];

myArr.forEach(function(item,index) {
  myArr[index] = item + 1;
})
console.log(myArr);//6, 7, 8 - so items in array have changed/mutated

//better use map as it's an imutable function/doesn't modify it but return an new array that we can use in a variable
const myArray = [5, 6, 7];

function inc(item) {
  return item + 1;
}

var modArr = myArray.map(inc);
console.log(modArr);