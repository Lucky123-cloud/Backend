//in js/node all the files are treated as modules

const request = require('./01_request.js')
const response = require('./02_response.js')

function makeRequest(url, data) {
    request.send(url, data)
    return response.read()
}

const responseData = makeRequest('https://google.com', 'hello');

console.log(responseData);