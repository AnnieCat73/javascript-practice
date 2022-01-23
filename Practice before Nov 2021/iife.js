/*An immediately-invoked function expression is a function that is declared and immediately run.
It is often abbreviated as IIFE and pronounced “iffy”.
You can use an IIFE to keep your code out of global scope, which is awesome because:
You won’t overwrite someone else’s variables
Your variables won’t get over-written*/

(function() {
  const message = "Secret message!";
  console.log(message);
})();

/*Step 1: Create an anonymous function.
function(){}
//Step 2: Put your function in parentheses (spaces don’t matter here).
( function(){} )
//Step 3: Run your function.
( function(){} )();
//Step 4: Put whatever you want in your function.
(function(){
	console.log('stuff');
})();*/

//PARAMETERS IN IIFFEs
(function(a,b) {
  console.log(a+b);
})(10, 15);//25


// From this <h3 id="whatever"></h3>
(function(d){
  d.getElementById('whatever').innerHTML = 'something!';
})(document);
//To this <h3 id="whatever">something!</h3>

(function () {
  console.log("It worked!")
})();

(function (num1, num2) {
  console.log(num1 * num2)
})(7, 7);//49

(function () {
  const anotherMessage = "Trying another message!";
  console.log(anotherMessage);
})();