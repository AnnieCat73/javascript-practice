//Inline js f.ex <body onload="alert('Hello');">

//document.getElementsByTagname("li");//gets all lis

//Dom exercise
const heading = document.querySelector("#heading");
heading.classList.add("huge");
heading.classList.remove("huge");
heading.classList.toggle("huge");

heading.innerHTML = "<em>Good Bye</em>";//gets emph goodbye

document.querySelector("a").attributes;//gives you the attributes i.e href

document.querySelector("a").getAttribute("href");//gets www.google.com
document.querySelector("a").setAttribute("href", "https://www.bing.com");