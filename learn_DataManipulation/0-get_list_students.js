// Create a function named getListStudents that returns an array of objects.

// Each object should have three attributes: id (Number), firstName (String), and location (String).

// The array contains the following students in order:

// Guillaume, id: 1, in San Francisco
// James, id: 2, in Columbia
// Serena, id: 5, in San Francisco
// bob@dylan:~$ cat 0-main.js
// import getListStudents from "./0-get_list_students.js";

// console.log(getListStudents());

// bob@dylan:~$ 
// bob@dylan:~$ npm run dev 0-main.js 
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 2, firstName: 'James', location: 'Columbia' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
// bob@dylan:~$ 

export default function getListStudents () {
    return [
        {
            id: 1,
            name: "Guillaume",
            location: "San Francisco"
        },

        {
            id: 2,
            name: "James",
            location: "Columbia"
        },

        {
            id: 5,
            name: "Serena",
            location: "San Francisco"
        }
    ];
}