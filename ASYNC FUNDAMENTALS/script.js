let url = "https://jsonplaceholder.typicode.com/todos/1"
fetch(url)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("Oops, there has been a network error", err);
  });

let url1 = "https://jsonplaceholder.typicode.com/todos/1"
fetch(url1)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.log("Oops, there has been a network error", err);
  });