const fs = require('fs')

const data = fs.readFileSync('file.txt', 'utf-8');
console.log("This runs AFTER the file content!");
console.log(data);