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

API (Application programming interface) is just an organised
way for one application to communicate with a separate and totally
different application. So we can work with an API on Dogs f.ex fromour
application. Request data from the Dog Api.

Promises i.e fetch - they take un unknown amount of time and once
they complete we want to do something with them


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

//READING API DOCUMENTATION

Pay attention to seven things when you read an API.

1) Authentication

Do you need to authenticate yourself to use an API? 
If yes, how do you perform the authentication?

Do you need to sign up for their service first?

Do you need an API key?

Do you use basic authentication?

Do you need OAuth?

This information will tell you if it’s possible to send requests 
through your browser. If you need to protect your credentials, 
you’ll have to authenticate through a server.



2) CORS SUPPORT

Cross-origin resource sharing (CORS) is a mechanism that allows restricted 
resources on a web page to be requested from another domain outside the 
domain from which the first resource was served.
CORS is safer and more flexible than earlier techniques such as JSONP.

You can only send requests through a browser if the API supports CORS. 
If they don’t support cross-origin requests, you’ll get a 
No Access-Control-Allow-Origin error.

If the API doesn’t support CORS, you’ll have two ways to make 
a request:

A) Send it through a server
B) Use JSONP

3) JSONP

CORS is safer and more flexible than earlier techniques such as JSONP.

4) Pagination

When you request for a list of items, many APIs respond with an incomplete 
list. For example, Github sends you 30 repositories even if the user 
has more than 30 repositories.

5) Content types

What content should you expect from the server? Are you expecting JSON?

6) API Versions

If you did not specify a version, APIs will point you to the latest stable version.

You can see Twitter’s API is at version 1.1 through its endpoint.
https://api.twitter.com/1.1/account/settings.json

To tell Github to use version 3 (the current version), you need to set an Accept header.

fetch ('https://api.github.com', {
  headers: { 'Accept': 'application/vnd.github.v3+json' }
})


7) Rate limits

Rate limits will tell you how many requests you can send per hour or per day. 