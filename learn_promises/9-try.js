// 9. Throw an error
// Write a function named guardrail that will accept one argument mathFunction (Function).

// This function should create and return an array named queue.

// When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.

// Example:

// [
//   1000,
//   'Guardrail was processed',
// ]
// bob@dylan:~$ cat 9-main.js
// import guardrail from './9-try';
// import divideFunction from './8-try';

// console.log(guardrail(() => { return divideFunction(10, 2)}));
// console.log(guardrail(() => { return divideFunction(10, 0)}));

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 9-main.js 
// [ 5, 'Guardrail was processed' ]
// [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
// bob@dylan:~$ 




export default function guardrail(mathFunction) {
    const queue = [];
    try {
        const res = mathFunction();
        queue.push(res);
    } catch (err) {
        queue.push(err.toString());
    } finally {
        queue.push('Guardrail was processed');
    }

    return queue;
}