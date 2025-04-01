// Fix this code and make it work.

// const class2019 = new ALXClass(2019, 'San Francisco');
// const class2020 = new ALXClass(2020, 'San Francisco');

// export class ALXClass {
//   constructor(year, location) {
//     this._year = year;
//     this._location = location;
//   }

//   get year() {
//     return this._year;
//   }

//   get location() {
//     return this._location;
//   }
// }

// const student1 = new StudentALX('Guillaume', 'Salva', class2020);
// const student2 = new StudentALX('John', 'Doe', class2020);
// const student3 = new StudentALX('Albert', 'Clinton', class2019);
// const student4 = new StudentALX('Donald', 'Bush', class2019);
// const student5 = new StudentALX('Jason', 'Sandler', class2019);

// export class StudentALX {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//     this._alxClass = alxClass;
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }

//   get alxClass() {
//     return this.alxClass;
//   }

//   get fullStudentDescription() {
//     return `${self._firstName} ${self._lastName} - ${self._alxClass.year} - ${self._alxClass.location}`;
//   }
// }


// export const listOfStudents = [student1, student2, student3, student4, student5];
// Result:

// bob@dylan:~$ cat 9-main.js
// import listOfStudents from "./9-hoisting.js";

// console.log(listOfStudents);

// const listPrinted = listOfStudents.map(
//     student => student.fullStudentDescription
// );

// console.log(listPrinted)

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 9-main.js
// [
//   StudentALX {
//     _firstName: 'Guillaume',
//     _lastName: 'Salva',
//     _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
//   },
//   StudentALX {
//     _firstName: 'John',
//     _lastName: 'Doe',
//     _alxClass: ALXClass { _year: 2020, _location: 'San Francisco' }
//   },
//   StudentALX {
//     _firstName: 'Albert',
//     _lastName: 'Clinton',
//     _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
//   },
//   StudentALX {
//     _firstName: 'Donald',
//     _lastName: 'Bush',
//     _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
//   },
//   StudentALX {
//     _firstName: 'Jason',
//     _lastName: 'Sandler',
//     _alxClass: ALXClass { _year: 2019, _location: 'San Francisco' }
//   }
// ]
// [
//   'Guillaume Salva - 2020 - San Francisco',
//   'John Doe - 2020 - San Francisco',
//   'Albert Clinton - 2019 - San Francisco',
//   'Donald Bush - 2019 - San Francisco',
//   'Jason Sandler - 2019 - San Francisco'
// ]
// bob@dylan:~$


/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
export class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    get year() {
      return this._year;
    }
  
    get location() {
      return this._location;
    }
  }
  
  export class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass;
    }
  
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    get fullStudentDescription() {
      return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
    }
  }
  
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  const listOfStudents = [student1, student2, student3, student4, student5];
  export default listOfStudents;