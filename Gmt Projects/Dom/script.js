/*const toc = document.querySelector("#table-of-contents");
let headings = document.querySelectorAll("h2");

let html = "";
for (let heading of headings) {
  html += `<li><a href="#${heading.id}">${heading.textContent}</a></li> `;
}

if(html) {
  toc.innerHTML = `
    <p><strong>Table of Contents</strong></p>
    <ol>${html}</ol>
    `;
} OR*/

const tOfC = document.querySelector("#table-of-contents");
const h2s = document.querySelectorAll("h2");


let html = "";
for (let h2 of h2s) {
  html += `<li><a href="#${h2.id}">${h2.textContent}</a></li>`;
}

tOfC.innerHTML = `
  <h3><strong>Table of Contents</strong></h3>
  <ol>${html}</ol>`;