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


