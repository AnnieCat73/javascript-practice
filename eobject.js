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
window.addEventListener('mousemove', showMouseLocation);*/

const btn = document.getElementById("btn");
btn.addEventListener('click', function(){
	console.log('here\'s an anonymous function');
});