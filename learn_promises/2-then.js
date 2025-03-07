//2. Catch me if you can!

// Using the function prototype below

// function handleResponseFromAPI(promise)
// Append three handlers to the function:

// When the Promise resolves, return an object with the following attributes
// status: 200
// body: success
// When the Promise rejects, return an empty Error object
// For every resolution, log Got a response from the API to the console
// bob@dylan:~$ cat 2-main.js
// import handleResponseFromAPI from "./2-then";

// const promise = Promise.resolve();
// handleResponseFromAPI(promise);

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 2-main.js 
// Got a response from the API
// bob@dylan:~$ 

// - here is we are using the .then() then handles sucess
// - we are also using the .catch() which handles failure
// - we use .finally() to make sure that there is always a last statement. Whether there is a failure or success

export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => ({ status: 200, body: 'success'}))
        .catch(() => Error())
        .finally(() => console.log("Got a response from the API"))
}