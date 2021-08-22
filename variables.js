const body = document.querySelector("body");
const div1 = document.createElement("div1");
body.appendChild(div1);
const string = "My name is Charles!";
div1.innerText = string;

const div2 = document.getElementById("div2");
const greeting = "My name is\ Mary!";
div2.innerHTML = greeting;

const div3 = document.getElementById("div3");
const sentence = "Hello, my name is John." + "What is your name?";
div2.textContent = sentence;

const div4 = document.getElementById("div4");
const newSentence = sentence + " My name is Paul.";
div4.textContent = newSentence;

const div5 = document.getElementById("div5");
const anotherSentence = "What's your favorite color?" + " Mine is green!";
div5.innerHTML = anotherSentence;

const div6 = document.getElementById("div6");
const firstName = "Harry";
const friendName = "My friend's name is " + firstName + ".";
div6.innerText = friendName;

const div7 = document.getElementById("div7");
const numberString = "I have " + 7 + " cats!";
div7.innerText = numberString;

const div8 = document.getElementById("div8");
const numbersSentence = 6 + 2;
div8.innerText = numbersSentence;
