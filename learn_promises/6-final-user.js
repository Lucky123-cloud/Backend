// 6. Handle multiple promises
// Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

// Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

// [
//     {
//       status: status_of_the_promise,
//       value: value or error returned by the Promise
//     },
//     ...
//   ]
// bob@dylan:~$ cat 6-main.js
// import handleProfileSignup from './6-final-user';

// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 6-main.js \
// Promise { <pending> }
// bob@dylan:~$ 


import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default async function handleProfileSignup(firstName, lastName, fileName){
    const res = [];
    try{
        const user = await signUpUser(firstName, lastName);
        res.push({ status: 'fulfiled', value: user });
        await uploadPhoto(fileName);
    } catch(err) {
        res.push({
            status: 'rejected',
            value: `Error: ${fileName} cannot be processed`,
        });
    }
    return res;

}