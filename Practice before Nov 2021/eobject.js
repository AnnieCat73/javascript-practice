/*document.addEventListener("click", function (e) {
  console.log(e);
});

document.addEventListener("click", function (e) {
  console.log("x = " + e.pageX);
  console.log("y = " + e.pageY);
});

document.addEventListener("click", function (e) {
  console.log(e);
  console.log(KeyboardEvent);
});

document.addEventListener("keydown", function (e) {
  console.log(e);
});

const btn = document.getElementById("btn");
function doThing () {
  console.log("Do it!!");
};
btn.addEventListener("click", () => {
  doThing();
});//or
btn.addEventListener("mouseover", doThing);

function doOtherThing(e) {
  console.log(e);
};

btn.addEventListener("click", doOtherThing);//or
btn.addEventListener("click", function () {
  doOtherThing();
});

//Listen for events on the whole window
function showMouseLocation(e){
	console.log('x=' + e.clientX + ', y=' + e.clientY);
}
window.addEventListener('mousemove', showMouseLocation);

const btn = document.getElementById("btn");
btn.addEventListener('click', function(){
	console.log('here\'s an anonymous function');
});


const btn = document.getElementById("btn");
function respondOnlyOnce () {
  console.log("You should see this only once!");
  btn.removeEventListener("click", respondOnlyOnce);
};
btn.addEventListener("click", respondOnlyOnce);

const btn = document.getElementById("btn");
const outputDiv = document.getElementById("output");

function showSuccessMessage () {
  outputDiv.innerHTML = "Success!";
  outputDiv.style.color ="green";
  outputDiv.style.fontSize ="30px";
};
btn.addEventListener("click", showSuccessMessage);


//show coordinates of when user clicks anywhere
function showClickLocation(e){
	console.log('x=' + e.clientX + ', y=' + e.clientY);
};
window.addEventListener("click", showClickLocation);

const body = document.querySelector("body");
const btn1 = document.getElementById("btn1");
btn.addEventListener("click", function () {
  const div1 = document.createElement("div");
  div1.innerText = "Hello!";
  body.appendChild(div1);
  
});*/



const buttons = {
  top: 0,
  middle: 0,
  bottom: 0
};

const topBtn = document.getElementById("top");
const middleBtn = document.getElementById("middle");
const bottomBtn = document.getElementById("bottom");

topBtn.addEventListener("click", function () {
  
  }
  
});

middleBtn.addEventListener("click", function () {

});

bottomBtn.addEventListener("click", function () {

});
