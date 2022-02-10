/*
Sync = happening now in order instantanously like:
console.log(1);
console.log(2);

async - happens at a later date f.ex
setTimeout (() => {
    console.log(4);
}, 3000);

BUT SOMETIMES IN APIS YOU NEED TO ASYNC IN ORDER AND YOU HAVE PROMISES FOR THAT

//PROMISES - resolve sends successful value back, reject sends a rejected value back
//Pass in a reject and a resolve function and do something with the spitted out value

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
});*/

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


