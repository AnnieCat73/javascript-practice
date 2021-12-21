const characters = document.querySelector(".characters");

const humans = characters.querySelector(".humans");

const allHumans = humans.querySelectorAll("li");
//console.log(allHumans);

const hobbits = characters.querySelector(".hobbits");
//console.log(hobbits);
const hobbitsChildren = hobbits.children;

const merry = hobbitsChildren[2];

const elves = merry.parentElement.nextElementSibling.nextElementSibling;
//console.log(elves);

const glorfindel = elves.children[1];
const elrond = glorfindel.nextElementSibling;
console.log(elrond);

const legolas = glorfindel.previousElementSibling;

const enemies = characters.querySelector(".enemies");
console.log(enemies);
const nazgul = enemies.children[1];

const charactersDiv = nazgul.closest(".characters");
console.log(charactersDiv);


//SEARCH FOR A NOTE
//Headers.JS
import React from "react";

const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header className="app-header">
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          type="text"
          placeholder="Type here to search..."
          className="search"
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};
export default Header;







