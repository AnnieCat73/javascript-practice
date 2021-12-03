/*var str = "Hi, here's some text. Hi again. Also, hi.";
var pattern = /hi/ig;

var result = str.match(pattern);

console.log(result);
//or shorter
var str = "Hi, here's some text. Hi again. Also, hi.";
var result = str.match(/hi/ig);

console.log(result);

var str = "Hi, here's some text. Hi again. Also, hi.";

if(str.match(/hi/i)){
  console.log('We found it.');
}
else{
  console.log('We did not find it.');
}

var str = "Hi, here's some text. Hi again. Also, hi.";
var result = str.replace(/hi/gi, 'BYE');

console.log(result);

var str = "Hi, here's some text. Hi again. Also, hi.";

var result = str.replace(/hi/gi, function(currentValue){
    if(currentValue==='Hi'){ return 'Bye'; }
    else{ return 'bye'; }
});

console.log(result);*/


const str = "Hi, here's some text. Hi again. Also, hi.";
const result = str.match(/hi/gi);
console.log(result);
