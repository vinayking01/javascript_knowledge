// ✅ Object in JavaScript is stored in the form of key-value pairs.
// In an object, the key can be a string or variable name.

// In JavaScript, functions, arrays, and strings are all considered types of objects. 
// They are specialized forms of the general Object type.
// The Object type acts as the parent (base) for these types.
// All these object types — arrays, functions, and strings — are linked to the Object through prototype chaining.

// ➕ Each and everything in JavaScript is converted into an object at runtime.
// That’s why as soon as I add a method to Object’s prototype,
// it becomes accessible to all its children — Arrays, Functions, and Strings —
// because of the prototype chain.

// ✅ 1. What is a Prototype?
// A prototype is an object that other objects can inherit from.
// Every object in JavaScript has a hidden property called [[Prototype]],
// which links it to another object.
// This mechanism allows sharing of properties and methods — known as **prototypal inheritance**.


// 1. Creation of Object - 5 ways
// (a) Using {}  braces/ Object literals

var stud = {
    name: "vinay Singh",
    "age": 22,
    School: "Kendriya Vidhyalaya"
};

console.log(stud); // give the whole object
console.log(typeof (stud));  // object


// 🔷 (B) Using Constructor Function 
// A constructor function is used to create objects with shared structure and behavior.

/*--------------------------------------------------------------------------------------------------*/
// 🔹 (B).1 Constructor Function

function Person(name, age, school) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
      }

    this.name = name;
    this.age = age;
    this.school = school;

    this.greet = function () {
        console.log("Hello, I'm " + this.name);
    };
}

// Creating new objects using the constructor
var stud323 = new Person("Anshul", 32, "Kendriya");
var person1 = new Person("Ashul", 32, "DMS");

// Calling the greet method
stud323.greet();

/*
🔍 Concepts:
- `this` refers to the object being created.
- `new` keyword:
    ➤ Creates an empty object.
    ➤ Sets the prototype of that object to `Person.prototype`.
    ➤ Binds `this` to the new object.
    ➤ Returns the new object.
- Objects created using `new Person()` inherit from `Person.prototype`.
*/

/*--------------------------------------------*/
// 🔧 Adding a Property to Constructor's Prototype

// ❌ This will NOT work: Person.nationality = "India";

// ✅ Correct way: Add to prototype
Person.prototype.address = "Bhindre ki gali";

// 🔁 Adding a method to prototype
Person.prototype.changeName = function (name) {
    this.lastName = name;
};

/*--------------------------------------------*/
// 🔹 (B).2 The constructor Property

/*
✅ Every Object has a constructor function in js, which references the function that was used to create the object. This is true for objects created using object literals, constructor functions, or classes.
The prototype has a `constructor` property pointing back to the function itself.
*/

console.log(Person.prototype.constructor === Person); // true
console.log(person1.constructor === Person); // true

/*--------------------------------------------*/
// ⚠️ Manually Changing Prototype so no longer constructor here points the same.

Person.prototype = { name: "Halet" };
console.log(Person.prototype.constructor === Object); // true

// ✅ Fix: Reset the constructor manually back to person
Person.prototype.constructor = Person;

/*--------------------------------------------*/
// 🔁 Object Literals vs Constructor-function created Objects

var f = {};
f.name = "Vinay";
f.age = 18;

/*
This object is created using an object literal.
Its prototype is Object.prototype.
So its constructor is Object.
*/

console.log(f.constructor === Object); // true

/*--------------------------------------------------------------------------------------------------*/

// (C) using new Object() Constructor - which creates empty object or we can also give the data there.
var stud2 = new Object(); // empty object
var stud2 = new Object({
    name: "Amit",
    age: 24,
})

console.log(typeof (stud2));

// (D) Using Object.create() (Prototype Based)- which creates a new object, using an existing object as the prototype of the newly created object.
const personPrototype = {
    greet() {
        console.log("Hello from prototype!");
    }
};

const person = Object.create(personPrototype);
person.name = "John";
person.greet(); // Hello from prototype!


/* 🔴 Warning:
This is wrong:
*/

function Animal() // this is constructor function
{}

function Dog()
{

}
Animal.prototype.speak = function () {  // This is a method added to the prototype of Animal
  console.log("Animal speaks");
};

const WrongLion = Object.create(Animal); // ❌ // This is incorrect because Object.create expects an object, not a constructor function.

// correct way to create an object with a prototype
const Lion = Object.create(Animal.prototype); // ✅ // This is correct because it uses the prototype of Animal, not the constructor function itself.
Dog.prototype = Object.create(Animal.prototype); // ✅ // This is correct because it sets the prototype of Dog to be an instance of Animal's prototype.
Dog.prototype.constructor = Dog; // ✅ // This ensures that the constructor property of Dog's prototype points back to Dog. Because it was changed when we set Dog.prototype to Object.create(Animal.prototype). 


// (e) Using Class ( ES6) - which is a syntactical sugar over the constructor function. It provides a cleaner and more concise way to create objects and handle inheritance.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi, I'm " + this.name);
    }
}

const p1 = new Person("John", 30);
p1.greet(); // Hi, I'm John


/*    ❓ Does JavaScript really have classes?
      ➡️ Short Answer:
      No, JavaScript does not have real classes like Java, C++, or Python.
      It is a prototype-based language, and what you see as "classes" are just syntactic sugar introduced in ES6 (2015).
      
      🔍 What does "syntactic sugar" mean?
      It means the class syntax in JavaScript is just a nicer-looking way to do what JavaScript already did under the hood — using prototypes. */

// 2. Accessing & creation of the properties of the Object - 2 ways to do that
// (a ) using dot Operator - we can only access the valid identifier. The property name only start with characters. And it also won't work when passing the object as argument in function.
console.log(stud.age); // 22

stud.adress = " Bhinod wali raod gali 4"; // Adding the property in in Object

console.log(stud); // gives the whole object

// (B) USing [] -it can be used anywhere. It access the property by [] 
console.log(stud2['age']);  // 24

stud2["232"] = "+9123223232"; // Adding the property in Object

console.log(stud2["232"]);  // +9123223232
// console.log(stud2.232); // it will give error here that's why [ ] it has upper edge 

// 3. Deletion of the Property of the Obejct

delete stud.adress;  // it deletes the address property and return true.
console.log(stud);

delete stud2["232"]; // it deletes the address property and return true

/* 4.There are two things that are very important in objects - 
    ● Objects are stored in heap. 
    ● Objects are reference - means in the above example the stud & stud2 are storing the address of the objects. using that reference address we are accessing the property.
*/

var item1 = {
    name: "Steel"
}

var item2 = item1; // now item2 start referring to the same object . It will not copy the object.

console.log(item1 === item2); // returns true


// 5. Iterating over the objects - here also dot operator won't work

for (index in stud) {
    console.log(`key - ${index} : value is -  ${stud[index]}`);
}

//6 . Nested Objects

var item3 = {
    name: "rita",
    address: {
        city: "Ghz",
        Block: "232 Gali "
    }
}

// how to access the element in nested object
console.log(item3.address.Block); // 232 Gali

// 7. Object Dynamic property- Update in ECMA Script.

var name1 = "Nominee_name"
var _age = "Nominee_age";
var item4 = {
    [name1]: "vinod Thapa", // here it act as value
    [_age]: 32
}
console.log(item4);
console.log(item4[name1]);

// 8. storing the Symbol data type value in Object - important for interview

var Sym1 = Symbol("key1")
var Obj3 = {
    name3: "Pat",
    [Sym1]: "Value 1",
    address: "Gal no 3232 / 10"

}

console.log(Obj3[Sym1]);

// 9. Freeze () - Method of object which freeze the value from changing.

Object.freeze(Obj3)
Obj3["name3"] = "Simon"
console.log(Obj3);

// 10. Key and Values - These method used to store the all key and values respectively.

console.log(Object.keys(Obj3))  //[ 'name3', 'address' ]
console.log(Object.values(Obj3)) // [ 'Pat', 'Gal no 3232 / 10' ]


// 11. Destructuring of Object 

const { name3, address } = Obj3
console.log(`The name is ${name3}, and the address is ${address}`)


