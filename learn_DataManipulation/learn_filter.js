//what is filter method:
//create a new array with only the elements that pass the test(condition) provided in the callback function

//syntax:
// const newArray = originalArray.filter(callback);
//callback: is a function that gets called on each element in the array.
//it should return true to keep the element, or false to skip it


//example 1: filtering numbers:
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 == 0);

console.log(evenNumbers);

//example 2: Filtering objects

const students = [
    { id: 1, name: 'Alice', grade: 85 },
    { id: 2, name: 'Bob', grade: 72 },
    { id: 3, name: 'Charlie', grade: 90 }
  ];

const passedStudents = students.filter(student => student.grade >= 80);

console.log(passedStudents)