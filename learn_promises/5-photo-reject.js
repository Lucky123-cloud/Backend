// 5. Reject the promises

// Write and export a function named uploadPhoto. It should accept one argument fileName (string).

// The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

// export default function uploadPhoto(filename) {

// }
// bob@dylan:~$ cat 5-main.js
// import uploadPhoto from './5-photo-reject';

// console.log(uploadPhoto('guillaume.jpg'));

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 5-main.js 
// Promise {
//   <rejected> Error: guillaume.jpg cannot be processed
//   ..
//     ..
// bob@dylan:~$ 

export default function uploadPhoto(filename){
    return Promise.reject(Error(`${filename} cannot be processed`))
}