import { response } from 'express';
import http from 'http';

const server = http.createServer((request, response) => {
    // console.log('method', request.method);
    // console.log('url', request.url);
    // console.log('headers', request.headers);
    const user = {
        name: 'Lucky Baraka',
        hobby: 'Boxing'
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user))

})

server.listen(3000);