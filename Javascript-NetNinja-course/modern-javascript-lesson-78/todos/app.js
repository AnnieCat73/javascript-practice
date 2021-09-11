const addForm = document.querySelector(".add");
const list = document.querySelector(".todos"); //reference to ul
const search = document.querySelector(".search input");/*get the reference
to input field of .search*/

//
const generateTemplate = function (todo) {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
  </li> `; //can use createElement
  list.innerHTML += html;//this is like appending it to ul
};

addForm.addEventListener("submit", function (e) {

  e.preventDefault();// to prevent page reloading
  const todo = addForm.add.value.trim(); //get what the user types into here. trim() prevents  accidental typed empty space
  console.log(todo);

  if (todo.length) { //so if user has typed sth i.e will have length then will generateTempl function. If not will not generate
    generateTemplate(todo);//todo is what user has typed in and goes in as value in function above
    addForm.reset();//clears the form once you have added something
  }
  
});

// delete todos ie clicking on the trash can

list.addEventListener("click", function (e) {
  if(e.target.classList.contains("delete")) {//e.target finds us the what was clicked (delete is i and li is parent)
    e.target.parentElement.remove();//parentElement gets the parent which here is the li tag. li gets removed
  }
});

/*matching 'search todos' with the text content of todo using filter method
so if what we search mathes a todo item we keep it and if not then we will hide the item*/

const filterTodos = function (term) {
  Array.from(list.children).filter(function(todo) {//get all the li todo list items and turn them into an array so can use filter()
    return !todo.textContent.includes(term);//see if todo/li tags has term/what the user typed in. If not keep it in array.
        //so only include it in array if it doesn't contain the term then cycle thru the array
  })
  filterTodos.forEach(function (todo) {//here add if not contain term
    todo.classList.add("filtered");
  });

  Array.from(list.children).filter(function(todo) {//here remove if contains term
    return todo.textContent.includes(term); 
    filterTodos.forEach(function (todo) {
    todo.classList.remove("filtered");
  });
};

search.addEventListener("keyup", function () {
  const term = search.value.trim();//get what user types in without any empty spaces
  filterTodos(term); // this function fires everytime a user types in sth
});


