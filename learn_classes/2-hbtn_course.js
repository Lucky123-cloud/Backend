// Implement a class named ALXCourse:

// Constructor attributes:
// name (String)
// length (Number)
// students (array of Strings)
// Make sure to verify the type of attributes during object creation
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.

// bob@dylan:~$ cat 2-main.js
// import ALXCourse from "./2-hbtn_course.js";

// const c1 = new ALXCourse("ES6", 1, ["Bob", "Jane"])
// console.log(c1.name);
// c1.name = "Python 101";
// console.log(c1);

// try {
//     c1.name = 12;
// } 
// catch(err) {
//     console.log(err);
// }

// try {
//     const c2 = new ALXCourse("ES6", "1", ["Bob", "Jane"]);
// }
// catch(err) {
//     console.log(err);
// }

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 2-main.js 
// ES6
// ALXCourse {
//   _name: 'Python 101',
//   _length: 1,
//   _students: [ 'Bob', 'Jane' ]
// }
// TypeError: Name must be a string
//     ...
// TypeError: Length must be a number
//     ...
// bob@dylan:~$ 

export default class ALXCourse {
    constructor(name, length, students){
        if (typeof name !== 'string') {
            throw new TypeError("Name must be a string");
        }
        if (typeof length !== 'number') {
            throw new TypeError("Length must be a number");
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError("Student must be an array of strings");
        }
        this._name = name;
        this._length = length;
        this._students = students;
    };

    //getter and setter for name:
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        } else {
            throw new TypeError("Name must be a string");
        }
    }

    //getter and setter for length:
    get length() {
        return this._length;
    }

    set (value) {
        if (typeof value === 'number') {
            this._length = value;
        } else {
            throw new TypeError("Length must be a number")
        }
    }

    // getter and setter for students
    get students() {
        return this._students;
    }

    set students(value) {
        if (Array.isArray(value) && value.every(student => typeof student === 'string')) {
            this._students = value;
        } else {
            throw new TypeError("Student must be an array of string");
        }
    };
}