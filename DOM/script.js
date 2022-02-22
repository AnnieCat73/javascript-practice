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
  </ol>`;*/

  

  


