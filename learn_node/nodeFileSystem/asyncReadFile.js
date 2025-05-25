//this is the non-blocking, here we can use callbacks and promises
const fs = require('fs').promises;

fs.readFile("file.txt", "utf-8")
    .then(data => {
        console.log(`${data}`);
    })
    .catch(err => {
        console.log(`${err}`)
    });
console.log("This runs before the reading of the file")