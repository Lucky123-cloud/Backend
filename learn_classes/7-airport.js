// Implement a class named Airport:

// Constructor attributes:
// name (String)
// code (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// The default string description of the class should return the airport code (example below).
// bob@dylan:~$ cat 7-main.js
// import Airport from "./7-airport.js";

// const airportSF = new Airport('San Francisco Airport', 'SFO');
// console.log(airportSF);
// console.log(airportSF.toString());

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 7-main.js 
// Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
// [object SFO]
// bob@dylan:~$ 


export default class Airport {
    constructor(name, code) {
        if(typeof name !== 'string' || typeof code !== 'string') {
            throw new Error();
        }
        this._name = name;
        this._code = code;
    }

    //getter and setter of the name:
    get name() {
        return this._name;
    }
    set name(value) {
        return this._name = value;
    }

    //getter and setterfor code:
    get code() {
        return this._code;
    }

    set code(value) {
        return this._code = value;
    }

    toString() {
        return `[object ${this._code}]`;
    }
}