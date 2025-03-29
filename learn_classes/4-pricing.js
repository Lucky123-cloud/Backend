// Import the class Currency from 3-currency.js

// Implement a class named Pricing:

// Constructor attributes:
// amount (Number)
// currency (Currency)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
// Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.

//testing code:
// bob@dylan:~$ cat 4-main.js
// import Pricing from './4-pricing.js';
// import Currency from './3-currency.js';

// const p = new Pricing(100, new Currency("EUR", "Euro"))
// console.log(p);
// console.log(p.displayFullPrice());

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 4-main.js 
// Pricing {
//   _amount: 100,
//   _currency: Currency { _code: 'EUR', _name: 'Euro' }
// }
// 100 Euro (EUR)
// bob@dylan:~$ 

import Currency from "./3-currency";

export default class Pricing{
    constructor(amount, currency){
        if(typeof amount !== 'number') { throw new TypeError("amount must be a number") };
        if (!currency instanceof Currency) { throw new TypeError("Currency MUST BE Currency ") };
        this._amount = amount;
        this._currency = currency;
    }

    //getter and setter for amount
    get amount() {
        return this._amount;
    };

    set amount(val) {
        if(typeof amount !== 'Number') {
            this._amount = val;
        } else {
            throw new TypeError("Amount MUST BE a number");
        }
    }

    //getter and setter for currency:
    get currency() {
        return this._currency;
    }

    set currency(val) {
        if(currency instanceof Currency) {
            this._currency = val;
        } else {
            throw new Error("currency MUST BE an instance of Currency");
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name}  (${this.currency.code})`;
    };

    //static method
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new Error("Both arguments should be a number")
        }
        return amount * conversionRate;
    };
    
}