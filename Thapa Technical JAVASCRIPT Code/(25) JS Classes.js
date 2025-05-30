// Object-Oriented Programming (OOP) in JavaScript
// ===============================================

// 1. Class Declaration
// --------------------
// - Classes are defined using the 'class' keyword.
// - They can optionally extend another class using 'extends'.

class Animal {
    constructor(name) {
        this.name = name; // Initializing instance property
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// 2. Inheritance
// --------------
// - The 'extends' keyword allows a class to inherit from another class.
// - The child class can override parent class methods.
// - When extending a class, calling 'super()' in the constructor is essential.

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Output: Buddy barks.

// 3. Constructor Method
// ----------------------
// - The constructor is a special method used for initializing properties.
// - Always call 'super()' in the child class constructor to inherit properties properly.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.make, myCar.model); // Output: Toyota Camry

// 4. Class Methods
// ----------------
// - Methods are functions defined inside a class to provide behavior.

class Counter {
    constructor() {
        this.count = 0; // Initial count
    }
    increment() {
        this.count += 1;
    }
    getCount() {
        return this.count;
    }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1

// 5. Class Properties
// -------------------
// - JavaScript classes support properties, but executable code must be inside methods.
// - Subclasses inherit properties from parent classes but can override them.

class Parent {
    constructor() {
        this.parentProperty = 'Inherited Property';
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.childProperty = 'Own Property';
    }
}

const child = new Child();
console.log(child.parentProperty); // Output: Inherited Property
console.log(child.childProperty); // Output: Own Property

// 6. Getters and Setters
// ----------------------
// - Getters allow controlled access to object properties.
// - Setters allow validation/modification before setting a property.

class User {
    constructor(email, password) {
        this._email = email; // Internal variable
        this._password = password; // Internal variable
    }

    // Getter for email (returns email in uppercase)
    get email() {
        return this._email.toUpperCase();
    }

    // Setter for email
    set email(value) {
        this._email = value;
    }

    // Getter for password (appends a string for demonstration)
    get password() {
        return `${this._password}hitesh`; // Appending 'hitesh' for explanation
    }

    // Setter for password
    set password(value) {
        this._password = value;
    }
}

const user = new User("h@hitesh.ai", "abc");
console.log(user.email); // Output: H@HITESH.AI
console.log(user.password); // Output: abc hitesh

// Explanation:
// Getters and setters are special methods in JavaScript that control how properties are accessed and modified.
// - The 'get' keyword defines a method that acts as a property accessor.
// - The 'set' keyword defines a method that modifies or validates property values before assignment.

// 7. The 'this' Keyword
// ----------------------
// - 'this' refers to the current instance of the class.
// - It allows accessing and modifying instance properties.

class Example {
    constructor(value) {
        this.value = value; // 'this' refers to the instance
    }
    showValue() {
        console.log(this.value);
    }
}

const example = new Example('Hello, OOP!');
example.showValue(); // Output: Hello, OOP!

// 8. Static Methods
// -----------------
// - Static methods belong to the class itself, not instances.
// - They cannot access instance properties directly.

class MathOperations {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathOperations.add(5, 3)); // Output: 8

// Important Notes:
// ----------------
// 1. 'this' is essential for referring to the current instance in class methods.
// 2. Calling 'super()' in a subclass constructor is mandatory to inherit properties.
// 3. Child classes inherit properties unless they override them.
