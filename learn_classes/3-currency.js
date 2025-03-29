// Implement a class named Currency:

// - Constructor attributes:
// code (String)
// name (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
// bob@dylan:~$ cat 3-main.js
// import Currency from "./3-currency.js";

// const dollar = new Currency('$', 'Dollars');
// console.log(dollar.displayFullCurrency());

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 3-main.js 
// Dollars ($)
// bob@dylan:~$ 

export default class Currency {
    constructor(code, name) {
        if(typeof code !== 'string') { throw new TypeError("Code must be string"); }
        if(typeof name !== 'string') { throw new TypeError("Name must be string"); }
        this._code = code;
        this._name = name;
    }

    //getter and setter for code
    get code() {
        return this._code;
    }

    set code(val) {
        if (typeof val === 'string') { 
            this._code = val;
         } else {
            return new TypeError("Code must be a string");
         }
    }

    //getter and setter for name:
    get name() {
        return this._name;
    }

    set name(val) {
        if (typeof val === 'string') {
            this._name = val;
        } else {
            return new TypeError("Name must be string");
        }
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}