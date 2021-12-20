const component = document.querySelector(".component");
const componentTitle = component.querySelector(".component__title");
console.log(componentTitle);//OR but above is better
//const componentTitle1 = document.querySelector(".component__title");
//console.log(componentTitle1);

const list = document.querySelector(".list");
const listChildren = list.children;
const listItem4 = list.children[3]
console.log(listItem4);
const listItem3 = listItem4.previousElementSibling;
console.log(listItem3);
const firstChild = list.firstElementChild;
console.log(firstChild);
const parent1 = listItem4.parentElement;
console.log(parent1);

//Or IF querySelectorAll
const allListChildren = document.querySelectorAll("li");
const firstItem = allListChildren[0];
console.log(firstItem);

//closest
const firstLink = document.querySelector("a");
const list1 = firstLink.closest(".list");
console.log(list1);

//LAST EXAMPLE BEFORE WRAPPING UP



