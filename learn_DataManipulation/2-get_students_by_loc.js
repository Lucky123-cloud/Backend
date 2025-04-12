// Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

import getListStudents from "./0-get_list_students";

// It should accept a list of students (from getListStudents) and a city (string) as parameters.

// You must use the filter function on the array.

// bob@dylan:~$ cat 2-main.js
// import getListStudents from "./0-get_list_students.js";
// import getStudentsByLocation from "./2-get_students_by_loc.js";

// const students = getListStudents();

// console.log(getStudentsByLocation(students, 'San Francisco'));

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 2-main.js 
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
// bob@dylan:~$ 

// import getListStudents from './0-get_list_students.js';

export default function getStudentsByLocation(student = getListStudents(), city) {
  return student.filter((el) => el.location === city);
}