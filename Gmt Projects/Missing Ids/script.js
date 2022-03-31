//THIS IS TO GENERATE THE MISSING IDs of h2s

// Get the DOM elements

let headings = document.querySelectorAll('h2');

function getId (heading) {
  if (!heading) {
    heading.id = heading.textContent.replaceAll('', '-').toLowerCase();
  }
  return heading.id;
}

//so here replaces text within heading: <h2></h2> with - 
//so f.ex<h2>The Sloop</h2> becomes the-sloop - check function above

//create the HTML
let html = '';
for (let heading of headings) {
  html += `<li><a href="#${getId(heading)}">${heading.textContent}</a></li>`;
}