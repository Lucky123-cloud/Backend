//8. Throw error / try catch

// Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).

// When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.

// export default function divideFunction(numerator, denominator) {

// }

// bob@dylan:~$ cat 8-main.js
// import divideFunction from './8-try';

// console.log(divideFunction(10, 2));
// console.log(divideFunction(10, 0));

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 8-main.js 
// 5
// ..../8-try.js:15
//   throw Error('cannot divide by 0');
//   ^
// .....

// bob@dylan:~$


export default function divideFunction(numerator, denominator) {
    if (denominator === 0) throw new Error('Cannot divide by 0');
    return numerator / denominator;
}