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
What is a fetch? The action of sending a request and getting a 
response is called a fetch.
What is a rate limit? The maximum number of requests you can make 
in a specific timeframe.//to prevent the API from crashing


JSON - JavaScript Object Notation
We use JSON as the main format to pass information between browsers 
and servers today

A JSON Object looks like a JavaScript object. The major difference between 
JSON and JavaScript is:

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
})*/


//HOW TO FETCH YOUR REPOS WITH (no) STARS
fetch('https://api.github.com/users/AnnieCat73/repos')
  .then(r => r.json())
  .then(repos => {
    const htmlString = repos.map(repo => {
      return {
        name: repo.name,
        url: repo['html_url'],
        stars: repo['stargazers_count']
      }
    })
      .filter(repo => repo.stars < 50)
      .map(repo => `<li>${repo.name}: ${repo.stars} stars</li>`)
      .join('')

    const ol = document.createElement('ol')
    ol.innerHTML = htmlString
    document.body.appendChild(ol)
  });

//THE ABOVE CODE WITH .then or chained .then calls
  fetch('https://api.github.com/users/zellwk/repos')
  .then(response => response.json())
  .then(data => data.map(repo => {
    return {
      name: repo.name,
      url: repo['html_url'],
      stars: repo['stargazers_count']
    }
  }))
  .then(data => data.map(repo =>
    `<li><a href="${repo.url}">${repo.name} (${repo.stars} stars)</a></li>`
  ).join(''))
  .then(HTMLString => {
    const ol = document.createElement('ol')
    ol.innerHTML = HTMLString
    document.body.append(ol)
  })

/*IF SOMETHING GOES WRONG
If an error occurs on a promise chain, the error will be passed 
into the catch call. Any then methods that are not called yet will be 
skipped.

fetch('https://api.github.com/users/zellwk/repos')
  .then(response => response.json())
  .then(data => {
    // An error occurs!
    return new Error('Something went wrong!')
  })
  // JavaScript skips these 'then' methods
  .then(massageData)
  .then(convertDataToHTMLString)
  .then(createList)
  // JavaScript calls this catch method
  .catch(e => console.log(e)) // Error: Something went wrong!


/*PROMISES

In JavaScript, a promise is an object that will return a value in future. 

When a promise gets fulfilled, you carry out the next set of instructions 
in a then method

When a promise gets rejected, you perform a contingency plan in a 
catch method.

//We promise to buy a black forest cake
buyCake('black forest')
  .then(reaction => console.log(reaction)) // 😁
  .catch(reaction => console.log(reaction)) // Skipped

//if put something else in then gets rejected
buyCake('pikachu cake')
  .then(reaction => console.log(reaction)) // Skipped
  .catch(reaction => console.log(reaction)) // 😢

A Fetch request is a promise. You can see it if you log it into the console.

const promise = fetch('https://api.github.com/users/zellwk/repos')
console.log(promise)


Finally

Promises also have a finally method. This method will be called after 
all then and catch calls.

buyCake('black forest')
  .then(celebrateBirthday)
  .catch(postponeCelebration)
  .finally(goToBed)


THE ENDPOINT

The endpoint is the URL you send a request to. It is made up of three things:

The root endpoint
The path
Query parameters

The root endpoint is the starting point of the API you’re requesting from. 
Github API’s root endpoint is https://api.github.com.

The path determines what you request for. For example, to get a user’s 
repositories from Github, you will need to use /users/:username/repo.

Here, :username is a variable. You can replace it with your Github 
username to fetch a list of your repositories.

Query parameters lets you modify a request. They begin with a question 
mark at the end of the path. Each query parameter is a key-value pair, 
separated by an ampersand.

?query1=value1&query2=value2

https://api.github.com/users/zellwk/repos?sort=pushed

Errors can occur for many reasons. The error message you get will differ 
according to the type of error. When working with APIs, you’ll usually 
get 400 errors.

The common ones are:

1) 400 Bad request—this happens for many reasons. It’s the most common 
type of error. Usually, this happens because your request didn’t contain 
required fields.
2) 401 Unauthorized—this happens because you are not authenticated. 
It also happens if you’re not authorized to perform an action.
3) 403 Forbidden—this happens because the server refuses to act on 
your action. Here’s an example: when you hit your rate limit, you’ll 
get a forbidden response.
4) 404 Not found—this happens because you tried to fetch a 
nonexistent request.
5) 405 Method not allowed—this happens because you used a wrong method.

We have a slight problem here—response.json returns a promise. We cannot send response.json via Promise.reject. We need to resolve it first.

The complete fetch request should look like this:

fetch('https://api.github.com/user/repos')
  .then(response => {
    return response.json()
      .then(body => {
        if (response.ok) return body
        return Promise.reject({ body })
      })
  })
  .then(body => console.log(`body is `, body))
  .catch(error => console.log(`error is`, error))