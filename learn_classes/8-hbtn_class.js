// Implement a class named ALXClass:

// Constructor attributes:
// size (Number)
// location (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// When the class is cast into a Number, it should return the size.
// When the class is cast into a String, it should return the location.
// bob@dylan:~$ cat 8-main.js
// import ALXClass from "./8-hbtn_class.js";

// const hc = new ALXClass(12, "Mezzanine")
// console.log(Number(hc));
// console.log(String(hc));

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 8-main.js 
// 12
// Mezzanine
// bob@dylan:~$ 

export default class ALXClass {
    constructor(size, location) {
        if(typeof size !== 'number' || typeof location !== 'string') throw new Error();
        this._size = size;
        this._location = location;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this._location;
        }
        if (hint === 'number') {
            return this._size;
        }
        return this;
    }
}