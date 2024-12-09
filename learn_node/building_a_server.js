import http from 'http'

const server = http.createServer((request, response) => {
    // console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)
    const users = {
        name: 'John',
        hobby: 'Skating'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(users))
})

server.listen(3000)