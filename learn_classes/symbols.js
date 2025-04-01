//they are primitive data types - provide a way to create unique identifiers

//create a symbol
const sym1 = Symbol();
const sym2 = Symbol('description'); //optional description

console.log(sym1); //Symbol()
console.log(sym2); //Symbol(description)
let ans = Symbol('foo') === Symbol('foo');
console.log(ans);

//xtics of symbols
//1. They are unique  Symbol('foo') === Symbol('foo') //false
//2. Not constructors, cant use 'new' with symbol new Symbol(); //TypeError: Symbol is not a constructor
//3. Immutable: symbols cannot be changed.

//common uses of unique symbols:
//1. Unique object properties
const obj = {};
const sym = Symbol('uniqueKey');

obj[sym] = 'hidden value';
console.log(obj[sym]); //hidden value

//not enumarable in for...in 
for (let key in obj) {
    console.log(key) // wont log symbol
}

//2. Well-known symbols (Meta-programing)
const arr = [1, 2, 3];
arr[Symbol.iterator] = function*() {
    for (let i = this.length - 1; i >= 0; i--) {
        yield this[i];
    }
};
console.log([...arr]);