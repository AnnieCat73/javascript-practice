/*CHANGING TEXT AND HTML

1) innerHTML - lets you change HTML inside an element
IF YOU WANT TO CHANGE THE HTML INSIDE AND ELEMENT USE
innerHTML

2) textContent - changes text of element
IF YOU WANT TO CHANGE TEXT ALWAYS USE textContent

const element = document.querySelector('div')
element.textContent = 'Hello world!';
element.innerHTML = '<p class="red">The quick brown fox ...</p>';

NB Intitally the div has text 'Hello World' but when you
 do innerHTML on it replaces 'Hello world' with the <p> above.
 So replaces and adds the new HTML


//CAN CREATE MULTIPLE HTML LINES WITH `` templ literals:

const element = document.querySelector('div')
element.innerHTML =
  `<ol>
    <li>Pizza</li>
    <li>Bread</li>
    <li>Onion</li>
    <li>Broccoli</li>
  </ol>`;

CREATING HTML ELEMENTS

1) Before adding elements like p to the dom you need to create them
first:*

const paragraph = document.createElement('p');
const div = document.createElement('div');
paragraph.classList.add('red');
paragraph.textContent = `I'm red!`;

//2) ADDING THE ELEMENTS TO THE DOM

//A) appendChild() - add your element as the final child of the
/*specified element

<ol>
  <li>Banana</li>
  <li>Pineapple</li>
  <li>Orange</li>
</ol>

* Add strawberry to the end of the list

const strawberry = document.createElement("li");
strawberry.textContent = "Strawberry";

const fruitList = document.querySelector("ol");
fruitList.appendChild(strawberry);

/*Get:

  1. Banana
  2. Pineapple
  3. Orange
  4. Strawberry
  
  NB DON'T USE appendChild() TO MOVE ELEMENTS. IF NEED TO DELETE IT
  FIRST BEFORE MOVING IT


//B) insertBefore - adds an element before another element

//parentElement.insertBefore(newElement, referenceElement);

//newElement = element you want to insert
//referenceElement tells browser where to (insertBefore) the
//newElement

//EX insert PEAR element before PINEAPPLE

const pear = document.createElement("li");//newElement
pear.textContent = "Pear";

const fruitParent = document. querySelector("ol");//get parentElement
const banana = fruitParent.children[0];//get banana/the referenceElement
fruitParent.insertBefore(pear, banana);

/*Gets

1. Pear
2. Banana
3. Pineapple
4. Orange*


//Exercise
const bilbo = document.createElement("li");
bilbo.textContent = "Bilbo Baggins";

const characters = document.querySelector(".characters");
const hobbitsParent = characters.querySelector(".hobbits");
hobbitsParent.appendChild(bilbo);

const legolas = document.createElement("li");
legolas.textContent = "Legolas";

const elves = characters.querySelector(".elves");
const glorfindel = elves.children[0];
elves.insertBefore(legolas, glorfindel);

//ADDING MULTIPLE ELEMENTS TO THE DOM

//1) Change an element's innerHTML directely

//Just have this in your html:
// <ol></ol>

//Then want to add 3 devs to the list

const ol = document.querySelector("ol");
ol.innerHTML = `
  <li>Helena</li>
  <li>Sam</li>
  <li>Pedro</li>`;

/*Same as 
<ol>
  <li>Addy Osmani</li>
  <li>Vitaly Friedman</li>
  <li>Chris Coyier</li>
</ol> 

or on your webpage

  1. Helena
  2. Sam
  3. Pedro
*

//In reality you will propably have an array of devs to add to the DOM
const devs = [
  'Addy Osmani',
  'Vitaly Friedman',
  'Chris Coyier'
]
/*To produce the HTML string, you want to use map to modify each arrayitem into a list. Then, use join to convert the array into a string.*
const string =
  devs.map(dev => `<li>${dev}</li>`).join('');

//console.log(string)

//Once you have the final HTML String, you can change the innerHTML.
ol.innerHTML = string

//WHAT IF YOU HAVE EXISTING ITEMS IN THE LIST

/*In your HTML already have:
<ol>
  <li>Rachel Andrew</li>
  <li>Jen Simmons</li>
  <li>Una Kravets</li>
</ol>*

// Devs to add to <ol>
const devs = [
  'Addy Osmani',
  'Vitaly Friedman',
  'Chris Coyier'
];
//then add it to original ol.innerHTML
const string = devs.map(dev => `<li>${dev}</li>`)
  .join('')
ol.innerHTML = ol.innerHTML + string



//REMOVING ELEMENTS FROM THE DOM

/*Let’s see it in action. Say you want to remove Jen Simmons from the list below.

<ol>
  <li>Rachel Andrew</li>
  <li>Jen Simmons</li>
  <li>Una Kravets</li>
</ol>*

const jen = document.querySelectorAll('li')[1];
jen.parentNode.removeChild(jen);
//PARENTNODE REFERS TO THE PARENT, cld be list as ex below

//MOVING THE HTML ELEMENT

/*Let’s say you want to move Jen from the second position to the first position in the following HTML.

<ol>
  <li>Rachel Andrew</li>
  <li>Jen Simmons</li>
  <li>Una Kravets</li>
</ol>*

const list = document.querySelector('ol');
const rachel = list.children[0];

const jen = list.removeChild(list.children[1]);
list.insertBefore(jen, rachel);

/*result is:

<ol>
  <li>Jen Simmons</li>
  <li>Rachel Andrew</li>
  <li>Una Kravets</li>
</ol>

//EXERCISES

const characters = document.querySelector(".characters");

const humans = document.createElement("ul");
humans.classList.add("humans");
humans.innerHTML = `
  <li>Gandalf</li>
  <li>Saruman</li>
  <li>Aragorn</li>
  <li>Boromir</li>
  <li>Faramir</li>
  `;
characters.appendChild(humans);

const glorofindel = document.createElement("li");
glorofindel.textContent = "Glorofindel";
const elrond = document.createElement("li");
elrond.textContent = "Elrond";

const elves = characters.querySelector(".elves");
const arwen = elves.children[1];
elves.insertBefore(glorofindel, arwen);
elves.insertBefore(elrond, glorofindel);

elves.removeChild(elrond);*/


const nav = document.querySelector("nav");
const personlist = nav.querySelector(".personlist");

const contact = document.createElement("li");
contact.textContent = "Contact";

const address = personlist.children[2];

personlist.insertBefore(contact, address);

//personlist.appendChild(contact);//if at end of list

const animalList = document.createElement("ul");
animalList.classList.add("animalList");
//console.log(animalList);

animalList.innerHTML = `
  <li>Name</li>
  <li>Breed</li>
  <li>Type</li>
  <li>Owner</li>
  <li>Colour</li>
`;

nav.appendChild(animalList);