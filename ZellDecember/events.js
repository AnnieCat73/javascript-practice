const list = document.querySelector("ul");
list.addEventListener("click", e => {
    console.log(e.target);
});

// We can check whether the event target is a list item with matches.
list.addEventListener("click", e => {
   if(e.target.matches("li")) {
       e.target.style.fontSize = "3rem";
   }
});


const people = document.querySelector(".people");
people.addEventListener("click", e => {
    if (e.target.closest("li")) {
        console.log(e.target.fontSize = "4rem");
    }
});

const allPeople = document.querySelectorAll("li");
Array.from(allPeople).forEach(person => {
    person.addEventListener("click", e => {
        person.style.background = "red";
        person.style.fontSize = "3rem";
        person.style.display = "inline-block";
    })
    
})

