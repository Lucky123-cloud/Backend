class Animal {
    constructor(name) {
        this._name = name;
    }

    speak() {
        console.log(`${this._name} makes a sound`);
    }
}

//child class
class Dog extends Animal {
    constructor(name) {
        super(name); //call the parent class's constructor
    }

    speak() {
        console.log(`${this._name} barks`);
    }
}

//create instances
const dog = new Dog("Rex");
dog.speak();

const animal = new Animal("Generic Animal");
animal.speak();