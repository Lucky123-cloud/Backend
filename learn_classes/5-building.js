// Implement a class named Building:

// Constructor attributes:
// sqft (Number)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter for each attribute.
// Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
// If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage

// bob@dylan:~$ cat 5-main.js
// import Building from './5-building.js';

// const b = new Building(100);
// console.log(b);

// class TestBuilding extends Building {}

// try {
//     new TestBuilding(200)
// }
// catch(err) {
//     console.log(err);
// }

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 5-main.js 
// Building { _sqft: 100 }
// Error: Class extending Building must override evacuationWarningMessage
//     ...
// bob@dylan:~$ 


export default class Building {
    constructor(sqft) {
        if(typeof sqft !== 'number') {
            throw new TypeError("sqft MUST BE a number")
        }
        this._sqft = sqft;
        this.evacuationWarningMessage();
    }
    //getter and setter  for sqft:
    get sqft() {
        return this._sqft;
    }

    set sqft(val) {
        if(typeof sqft === 'number') {
            this._sqft = val;
        } else{
            throw new TypeError("MUST BE a number")
        }
    }
    
    evacuationWarningMessage() {
        if(this.constructor.name !== 'Building') {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        };
    }
}
//celeo scram