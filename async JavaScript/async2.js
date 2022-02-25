/*ASYNC JS FROM LEARN JS

AJAX - Asynchronous JavaScript and XML

As a term to say: 

Get (or send) some data to the server
Wait for the server to send something back
Update the page without refreshing it

XML - extensible markup language used to pass info
btwn browsers and servers in the past. Now use JSON

const request = new XMLHttpRequest()
request.addEventListener('load', e => {
   /* do something * }
   console.log(e.target));
request.open('get', 'https://api.github.com/users/zellwk/repos')
request.send();

What is AJAX? Asynchronous JavaScript and XML.
Why do we use Ajax? To fetch resources.
What is a request? Information you send to the server.
What is a response? Information you get back from the server.
What is a fetch? The action of sending a request and getting a response is called a fetch.
What is a rate limit? The maximum number of requests you can make in a specific timeframe.//to prevent the API from crashing


JSON - JavaScript Object Notation
We use JSON as the main format to pass information between browsers and servers today

A JSON Object looks like a JavaScript object. The major difference between JSON and JavaScript is:

1) JSON can only contain strings
2) JSON property and value pairs are always wrapped with double quotes
Here’s an example of a JSON object (that’s formatted for you to read).

{
  "firstName": "Zell",
  "lastName": "Liew",
  "occupation": "developer",
  "age": "30"
}

A) To convert a JavaScript object to JSON, we use JSON.stringify.

const macbook = {
  operatingSystem: 'macOS Sierra',
  screenResolution: '2880x1800',
  usbPorts: 2
}

const jsonMac = JSON.stringify(macbook);

B) To convert JSON to JavaScript, we use JSON.parse.

const jsMac = JSON.parse(jsonMac);

THE FETCH API

fetch(url, options) - to send a request use fetch()
fetch() - url of zells repos
.then() - to convert it into JSON so we can read it
.then - to see response from Fetch() need to write .then()

fetch('https://api.github.com/users/zellwk/repos')
  .then(response => response.json())
  .then(data => console.log(data))
})

fetch('https://api.github.com/users/zellwk/repos')
  .then(response => response.json())
  .then(data => {
    // Massage data and output to DOM here
  })