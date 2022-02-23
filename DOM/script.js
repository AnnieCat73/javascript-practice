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
first:*/

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
4. Orange*/

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




