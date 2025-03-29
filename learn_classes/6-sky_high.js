// Import Building from 5-building.js.

// Implement a class named SkyHighBuilding that extends from Building:

// Constructor attributes:
// sqft (Number) (must be assigned to the parent class Building)
// floors (Number)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter for each attribute.
// Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.
// bob@dylan:~$ cat 6-main.js
// import SkyHighBuilding from './6-sky_high.js';

// const building = new SkyHighBuilding(140, 60);
// console.log(building.sqft);
// console.log(building.floors);
// console.log(building.evacuationWarningMessage());

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 6-main.js 
// 140
// 60
// Evacuate slowly the 60 floors
// bob@dylan:~$ 
// Repo:

// GitHub repository: alx-backend-javascript
// Directory: 0x02-ES6_classes
// File: 6-sky_high.js


import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft)
        if(typeof floors !== 'number') {
            throw new Error("floors must be a number")
        }
        this._floors = floors;
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
      }
    
      set sqft(value) {
        this._sqft = value;
      }
    
      get floors() {
        return this._floors;
      }
    
      set floors(value) {
        this._floors = value;
      };

      evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`
      }
    }
