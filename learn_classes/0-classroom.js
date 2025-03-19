//0. You used to attend a place like this at some point
// Implement a class named ClassRoom:

// Prototype: export default class ClassRoom
// It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize
// bob@dylan:~$ cat 0-main.js
// import ClassRoom from "./0-classroom.js";

// const room = new ClassRoom(10);
// console.log(room._maxStudentsSize)

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 0-main.js 
// 10
// bob@dylan:~$ 

export default class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
}