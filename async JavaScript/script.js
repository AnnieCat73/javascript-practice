/*
Sync = happening now in order instantanously like:
console.log(1);
console.log(2);

async - happens at a later date f.ex
setTimeout (() => {
    console.log(4);
}, 3000);

BUT SOMETIMES IN APIS YOU NEED TO ASYNC IN ORDER AND YOU HAVE PROMISES FOR THAT

A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). ... Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
The Promise object supports two properties: state and result. While a Promise object is "pending" (working), the result is undefined. When a Promise object is "fulfilled", the result is a value. When a Promise object is "rejected", the result is an error object.

//1) Firstly, we use a constructor to create a Promise object:

const myPromise = new Promise();
It takes two parameters, one for success (resolve) and one for fail (reject):

const myPromise = new Promise((resolve, reject) => {  
    // condition
});

Finally, there will be a condition. If the condition is met, the Promise will be resolved, otherwise it will be rejected:

const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

//2) then( ) for resolved Promises:

If you revisit the picture at the beginning of this post, you'll see that there are 2 cases: One for resolved promises and one for rejected. If the Promise gets resolved (success case), then something will happen next (depends on what we do with the successful Promise).

myPromise.then();
The then() method is called after the Promise is resolved. Then we can decide what to do with the resolved Promise.

For example, let’s log the message to the console that we got from the Promise:

myPromise.then((message) => {  
    console.log(message);
});
catch( ) for rejected Promises:
However, the then( ) method is only for resolved Promises. What if the Promise fails? Then, we need to use the catch( ) method.

Likewise we attach the then( ) method. We can also directly attach the catch( ) method right after then( ):

myPromise.then((message) => { 
    console.log(message);
}).catch((message) => { 
    console.log(message);
});
So if the promise gets rejected, it will jump to the catch( ) method and this time we will see a different message on the console.
//////////////////

//PROMISES - resolve sends successful value back, reject sends a rejected value back
//Pass in a reject and a resolve function and do something with the spitted out value
//OR STILL BE PENDING meaning that neither situation happened

const promise = new Promise((resolve, reject) => {

    if (true) {
        resolve('Successful');
    }

    else {
        reject('Error');
    }
});
//GET THE DATA FROM THE PROMISE - GET THE ASYNC VALUE
promise.then((data) => {
    console.log(data);//Successful but if (false) on first line instead get uncaught error so to catch the error do .catch()
}).catch((error) => {
    console.log(error);//error
});

 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('one');
    }, 50);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('two');
    }, 100);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('three');
    }, 500);
});

//Promise.race() method - Let's say a user has to make 2 different choices and both async and only wants to handle for one. Promise.race() could take in array 
//of promises like below returns and it's going to resolve/return the first one to complete.
Promise.race([promise1, promise2]).then((data) => {
    console.log(data);//one - as that's the one that resolves first i.e 50 timeout
});

//Promise.all() method - allows us to resolve an array of promises that we are passing into it and then do something with those values. Essentially 
//waiting for all of them to resolve
Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log(data);//["one", "two", "three"]
});

//Fetch -JSON -Fetching data from a server 
//fetch() returns a promise - inside (url) it you will fetch a url
//Take the data that is coming back and put it in into a value we understand like json (promise 1)...then get that data/json (promise2 - both promises chained together with .then). Once we returned this value then do this and we get a js object we can work with
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
    console.log(response); 
    return response.json();//Take the data that is coming back and put it in into a value we understand like json
})
.then((json) => {
    console.log(json);//then get that data/json
});

//Async/Await - HOW TO REWRITE THE ABOVE WITH THESE KEYWORDS
//async is a way to get data

async function getPosts() {
    const response =  await fetch("https://jsonplaceholder.typicode.com/posts");//so get the data
    const json = await response.json();//call json on the data
    //console.log(json);//gets the data
}
getPosts();

//BUT WITH ASYNC/AWAIT NOT CATCHING ERROR SO TO DO THAT DO THIS:

async function getPosts() {
    try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/posts");//so get the data
        const json = await response.json();//call json on the data
        //console.log(json);//gets the data
    }   catch (e) { //catch the error
        console.log(e);
    }   finally { //so after our 'try' resolves and after our catch rejects if any we are finally going to do this
        console.log('Always runs');
    }


    //THIS WOULD BE THE SAME AS ABOVE BUT IN THE Async getPosts():
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json)
    .finally(() => {
        console.log('Always....')
    })
}
getPosts();


//EXAMPLE with options appended

async function addPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            firstName: "Dylan",
            lastName: "Israel",
            title: "My Blog Post"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    const json = await response.json();
    console.log(json)
}

addPost();//Object { firstName: "Dylan", lastName: "Israel", title: "My Blog Post", id: 101 }
//script.js:178:13


//fetch() - Working with Data and API's in JS


//fetch can do both:
//get request - please get some information
//post request - can I send some info to you

//Ex simple get request with fetch()
//1 call fetch(path to the resourse)
//2 deal with the response back. This involves with the idea of a promise. A promnise is a way in js to handle asynchronous events. It gets resolved when the event is over
//3 the response is data back but need to get it in a format we understand/work with - json, text, blob(image)
//4 got data back and completed the data stream
//5 Do something with that data f.ex make an <img>

/*in html

<img src="" id="rainbow" />*/

fetch('rainbow.jpg').then(response => {
    //console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('rainbos').src = URL.createObjectURL(blob);
})
.catch(error => {
    console.log(error);
})

//as ASYNC AWAIT

async function catchRainbow() {
    const response = await fetch ('rainbow.jpg');
    const blob = await response.blob();
    document.getElementById('rainbos').src = URL.createObjectURL(blob);
}

catchRainbow();



/*/////////////////////FROM HERE//////////////////////*
Sync = happening now in order instantanously like:
console.log(1);
console.log(2);

async - happens at a later date f.ex
setTimeout (() => {
    console.log(4);
}, 3000);

BUT SOMETIMES IN APIS YOU NEED TO ASYNC IN ORDER AND YOU HAVE PROMISES FOR THAT

A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). ... Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
The Promise object supports two properties: state and result. While a Promise object is "pending" (working), the result is undefined. When a Promise object is "fulfilled", the result is a value. When a Promise object is "rejected", the result is an error object.

//1) Firstly, we use a constructor to create a Promise object:

const myPromise = new Promise();
It takes two parameters, one for success (resolve) and one for fail (reject):

const myPromise = new Promise((resolve, reject) => {  
    // condition
});

Finally, there will be a condition. If the condition is met, the Promise will be resolved, otherwise it will be rejected:

const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

//2) then( ) for resolved Promises:

If you revisit the picture at the beginning of this post, you'll see that there are 2 cases: One for resolved promises and one for rejected. If the Promise gets resolved (success case), then something will happen next (depends on what we do with the successful Promise).

myPromise.then();
The then() method is called after the Promise is resolved. Then we can decide what to do with the resolved Promise.

For example, let’s log the message to the console that we got from the Promise:

myPromise.then((message) => {  
    console.log(message);
});
catch( ) for rejected Promises:
However, the then( ) method is only for resolved Promises. What if the Promise fails? Then, we need to use the catch( ) method.

Likewise we attach the then( ) method. We can also directly attach the catch( ) method right after then( ):

myPromise.then((message) => { 
    console.log(message);
}).catch((message) => { 
    console.log(message);
});
So if the promise gets rejected, it will jump to the catch( ) method and this time we will see a different message on the console.
//////////////////

//PROMISES - resolve sends successful value back, reject sends a rejected value back
//Pass in a reject and a resolve function and do something with the spitted out value
//OR STILL BE PENDING meaning that neither situation happened

const promise = new Promise((resolve, reject) => {

    if (true) {
        resolve('Successful');
    }

    else {
        reject('Error');
    }
});
//GET THE DATA FROM THE PROMISE - GET THE ASYNC VALUE
promise.then((data) => {
    console.log(data);//Successful but if (false) on first line instead get uncaught error so to catch the error do .catch()
}).catch((error) => {
    console.log(error);//error
});

 */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('one');
    }, 50);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('two');
    }, 100);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('three');
    }, 500);
});

//Fetch -JSON -Fetching data from a server 
//fetch() returns a promise - inside (url) it you will fetch a url
//Take the data that is coming back and put it in into a value we understand like json (promise 1)...then get that data/json (promise2 - both promises chained together with .then). Once we returned this value then do this and we get a js object we can work with
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
    console.log(response); 
    return response.json();//Take the data that is coming back and put it in into a value we understand like json
})
.then((json) => {
    console.log(json);//then get that data/json
});

//Async/Await - HOW TO REWRITE THE ABOVE WITH THESE KEYWORDS
//async is a way to get data

async function getPosts() {
    const response =  await fetch("https://jsonplaceholder.typicode.com/posts");//so get the data
    const json = await response.json();//call json on the data
    //console.log(json);//gets the data
}
getPosts();

//BUT WITH ASYNC/AWAIT NOT CATCHING ERROR SO TO DO THAT DO THIS:

async function getPosts() {
    try {
        const response =  await fetch("https://jsonplaceholder.typicode.com/posts");//so get the data
        const json = await response.json();//call json on the data
        //console.log(json);//gets the data
    }   catch (e) { //catch the error
        console.log(e);
    }   finally { //so after our 'try' resolves and after our catch rejects if any we are finally going to do this
        console.log('Always runs');
    }


    //THIS WOULD BE THE SAME AS ABOVE BUT IN THE Async getPosts():
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json)
    .finally(() => {
        console.log('Always....')
    })
}
getPosts();


//NOT NEEDED UNTIL FETCH API ----------------BELOW-------NET NINJA ASYNC JAVASCRIPT

// Imp as governs how we perform tasks which take some time to complete (f.ex getting data from a database)
//Start something and finish it later
//JS is normally synchronous i.e run one statement at a time like console.log(1) then console.log(2) - so no 2 has to wait for 1 to finish
//BUT then if have statement 3 wanting to make a request to a database which can take some time (10 secs??) to complete. Because of this it will stall the data and blocking the code i.e statement 4
//So Asynchrounus comes in here for tasks that take some time to do like network request for data from a database or api
//This means the function can start now and finish later once the data has come back

/*so have 
statement 1
statement 2 - from database so takes time which means the browser takes the request and handles it outside of the scope of the statements in another part of the browser. Then takes a callback function so it knows to execute it later on when data comes back. As this statement is taken out of the queue js can carry on an go down the queue and run the remaining functions/statements while statement 2 still goes on. Once all statements finished and retrieved data the callback function gets called and finish the statement2. IE SON NO BLOCKING
statement 3
statment 4

console.log(1)
console.log(2)
setTimeout(() => {
    console.log('callback function fired'); //SO HERE CONSOLE.LOG(CALLBACK..) WILL BE CALLED AT THE END OF ALL CONSOLE LOGS AS IT'S THE CALLBACK FUNCTION
}, 2000);
console.log(3)
console.log(4)

//HTTP Requests - make HTTP requests to get data from another server
//Make those requests to (an) API endpoint(s) - f.ex http://www.musicapi.com/artist/moby - returns a list of Moby songs
//So make an HTTTP request to a server, the server says ok and returns the data to us - it's called a response(data) in the form of json so we can do something with the data
//also known as a GET request

//USE jsonplaceholder.typicode.com to play around with endpoints for practice

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

//returns json data as below
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

//1 MAKE A REQUEST 

//BELOW MEANS: THIS IS WHERE WE CAN DO SOMETHING WITH THE RESPONSE/DATA - HERE AT STAGE 4 OR'READYSTATECHANGE'/and everything/all ok with the 200 
//STATUS CODES status: 404 =error so get {} - SO IF ANY ERRORS (eg endpoint that doesn't exist)MADE NEED TO CHECK STATUS IF THERE ARE ANY
//status: 200 - all ok! --SEE DEVELOPER.MOZILLA.ORG for 'HTTP response status codes' for more in depth about all error msgs

const request = new XMLHttpRequest();

request.addEventlistener('readystatechange', () => {  //find out/get the state of which the current request is in
    //console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200) { 
        console.log(request.responseText);
    } else if(request.readyState === 4) {
        console.log('Could not fetch the data'); //SO HERE IS STH IS WRONG AT STAGE 4 AND IT' NOT STATUS 200 GET ERROR MSG I.E 404
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')// So setting up a get request to get all data for todos
request.send();//This sends the request to server

//CALLBACKS - good if we could wrap up all of the code above inside a function so we could call that function whenever we need to make request
//WE COULD ALSO ADD A CALLBACK FUNTION INSIDE  getTodos() so we can specify something different to do each time SO HOW:
//f.ex:

const getTodos = (callback) => }

    const request = new XMLHttpRequest();

    request.addEventlistener('readystatechange', () => {  
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200) { 
           callback(undefined, request.responseText);//i.e error,data
        } else if(request.readyState === 4) {
            callback('could not fetch data', undefined); //i.e error, data
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send();
};

getTodos();//Fire as many times as you need it to 
getTodos();



getTodos((error, data) => {
    console.log('callback fired');
    console.log(error, data);
    if(error){
        console.log(error);
    } esle {
        console.log(data);
    }
});

//JSON DATA data we get back from an API - looks like an array with js objects inside it but IT'S NOT. IT'S JUST STRINGS .ie text
//so need to figure out what to do with the JSON string we get back and turning it into a real js object so that we can access the data
//How?

const getTodos = (callback) => }

    const request = new XMLHttpRequest();

    request.addEventlistener('readystatechange', () => {  
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200) { 
            const data = JSON.parse(request.responseText); //HERE
           callback(undefined, data);//i.e error,data //HERE
        } else if(request.readyState === 4) {
            callback('could not fetch data', undefined); //i.e error, data
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.send();
};

getTodos();//Fire as many times as you need it to 
getTodos();



getTodos((error, data) => {
    console.log('callback fired');
    console.log(error, data);
    if(error){
        console.log(error);
    } esle {
        console.log(data);
    }
});

///////HERE//////FETCH API - better way than above http requests - newer and simplified

//ONLY EVER REJECTED WHEN GET A NETWORK ERROR
//IF WE TYPE A WRONG ENDPOINT OR ERROR THERE IT'S STILL RESOLVED BUT IF YOU LOOK IN DEV TOOLS
SEE UNDER resolved: status: 404 which means resource can't be found

fetch('todos/luigi.json').then((response) => { //then if success/resolve
    console.log('resolved', response); //see inside the console what's happening
    return response.json();/ //to return the data
}).then(data => {
    console.log(data);//now we have access to data in console
}).catch((err) => { //catch if error/reject
    console.log('rejected' err);
});

/////ASYNC AND AWAIT - cleaner and more readable way than above

const getTodos = async () => {                      //await stops js from assigning a value to const response until 
    const response = await fetch('todos/luigi.json');//the promise has resolved i.e await is like then/catch(). NB only stalling inside the async function
    //console.log(response);//see the response object
    const data = await response.json();//gets json
    console.log(data);//see the data
    return data;//so get access the data
};
getTodos().then(data => {
    console.log('resolved:' , data);
});//returned data so can do something with it here

//OR BETTER ES6
console.log(1)
console.log(2)
getTodos()
    .then(data => console.log('resolved:' , data));
console.log(3)
console.log(4)   


//API  -APPLICATION PROGRAMMING INTERFACE 
- a way to allow information from an internal or external source to interact with your program.

//JSON FILES - data you pull from an API - JSON files are a type of text file used for exchanging data,EX:

{
  "statusCode": 200,
  "message": "Quotes",
  "pagination": {
    "currentPage": 1,
    "nextPage": 2,
    "totalPages": 64
  },
  "totalQuotes": 64,
  
}

Look like objects as they are JavascriptObjectNotation and have key-value pairs

REST APIs
For your program to work with an API, it needs to follow specific protocols which enable communication between the API and your program.
The most commonly used one is called the REST API protocol.

API Documentation
To find out the API protocols, you’ll need to dive into the REST API’s documentation, like f.ex
- What web address is the API available at? What address can your program call or request data from the API?
- Are there parameters available to be used as part of the request? Are the parameters required or optional?
- Is there any specific information that your program needs to send in with your request? If so, what information?
- Is there a need for your program to authenticate itself before accessing the data? If so, how to authenticate?

ENDPOINTS AND PARAMETERS 
To access specific data from an API, you’ll need to review the documentation to find which endpoints you can use, and whether 
the endpoint accepts parameters.

Endepoints
An endpoint is the “end” of the API address

1) the URL for the API starts with:

https://quote-garden.herokuapp.com/api/v3

2) address alone won’t get you any data. So after the URL, you’ll add the endpoint. To get all the quotes:
https://quote-garden.herokuapp.com/api/v3/quotes

3) To get a random quote 
https://quote-garden.herokuapp.com/api/v3/quotes/random

4) Check the parameters/params available - add them after endpoint with ?
author: string (Optional) - author=beyonce (beyonce is a string)
genre: string (Optional)
query: string (Optional)
page: number (Optional)
limit: number (Optional)

So for author
https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce

If more than 1 word use %20 between the words so
https://quote-garden.herokuapp.com/api/v3/quotes?author=maya%20angelou

4) IF want multiple params then chain them together using &
https://quote-garden.herokuapp.com/api/v3/quotes?author=maya%20angelou&limit=1


FETCHING THE DATA - WITH FETCH()/ASYNC/AWAIT

const getData = async function () {
  const response = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce"
  );
  const data = await response.json();
  console.log(data);
};
getData();


















//GOOD EXERCISE
function getOddYears(years) {
    return years.filter(function (year) {
        return year % 2 !== 0;
    });
}

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]

function isAppUsed(apps, app) {
    return apps.includes(app);
}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false


