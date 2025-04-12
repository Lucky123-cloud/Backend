//map() method is used to create a new array by applying a function to each elemnt of the original array
//does not modify the original array - instead a new one with transformed values


//syntax
// const newArray = oldArray.map(callback);
//callback - a function that takes up three arguments:
    //currentValue - The current element being processed
    //index(optional) - the index of the curent element
    //array(optional) - the original array itself


//example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
    return num * 2
});

console.log(doubled);

//or

const numbers2 = [1, 2, 3, 4];
const doubled2 = numbers.map(num => num * 2)

console.log(doubled2)



//example 2: with index
const names = ['Alice', 'Bob', 'Charlie'];
const withIndex = names.map((name, index) => `${index + 1}. ${name}`);

console.log(withIndex);

//or

const names2 = ['Alice', 'Bob', 'Charlie'];
const withIndex2 = names.map((name, index) => {
    return `${index + 1} .${name}`
})
console.log(withIndex2);



