// Object

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
    // - not required to mention the variables let or const. 
    // - not required to use function keyword to create the method in object.

var stud = {
    name: "vinay Singh",
    "age": 22,
    School: "Kendriya Vidhyalaya"
};

console.log(stud); // give the whole object
console.log(typeof (stud));  // object


// 🔷 (B) Using Constructor Function 
// A constructor function is used to create objects with shared structure and behavior.
// Although in javascript every function is object.
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
- `new` keyword Does what in Object:
    ➤ Creates an empty object.
    ➤ Sets the prototype of that object to `Person.prototype`.
    ➤ Binds `this` to that newly created empty object.
    ➤ Returns the empty object after adding properties if defined in function.
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
✅ Object made through using object literals, classes , Functions , has a constructor function in property in their prototype of js, which references the function that was used to create the object. This is true for objects created using object literals, constructor functions, or classes.
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

const person2 = Object.create(personPrototype);
person2.name = "John";
person2.greet(); // Hello from prototype!


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

class SomePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi, I'm " + this.name);
    }
}

const p1 = new SomePerson("John", 30);
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


// Important Concept of when we create Object with Constructor function  which was skipped previously- 2 way fo creating Object

// When you do this During object creation -> const f = new Person() : it does some internal working for creation of object and return to you - let's take one more example to understand 

    function Car() {
    this.make = "Lambo";     // goes onto auto-created object
    }

    const myCar = new Car();
    // console.log(myCar); // { make: 'Lambo' }

/*    1️⃣First Step : - if found new then create an {} empty object and bind `this` actual to that {}    empty object.
     
      2️⃣Second Step: - If any properties defined in Constructor function then add those like this.make = "Lambo" above , kuki ab `this` us empty object ko bind krta hai toh usme function me user defined property add ho jayengi and {} object ka prototype function ke prototype ( car.prototype) ko link kr deta hai.
     
      3️⃣Third step : now ab ye 2 rule check krta hai before returning this Updated Object which was empty previously-
                1. if user not return their object from this constructor function in return statement then pass this auto created Object.
                2. if user has return primitive values ( string, number, boolean etc) but not object still you skip those and pass this auto created object.
                3. if user has return their own created object then skip the auto created and instance will point to user created object. Auto created object will be discarded.

    */

    // Few Question : 

    function Car2() { 
    this.make = 'Lamborghini';
    return { make: 'Maserati' }; // override done 
    }
    const myCar2 = new Car2() ;
    console.log(myCar2); // { make: 'Maserati' } ✅ (overrides this)

    function Car3() {
    this.make = 'Lamborghini';
    return {}; // no make property as you override the auto created object by your object
    }
    const myCar3 = new Car3(); // {}
    console.log(myCar3.make); // undefined ⚠️ (this got overridden)

    function Car4(){
        this.make = 'Jaguar';
        return "No Jaguar"; // no override as it primitive value
    }
    const myCar4 = new Car4(); // {make : "Jaguar"}
    console.log(myCar4.make); // Jaguar

    

propery of Object are made with some property - enumbarble , writeable etc.
 You can check witht he help of th GetOwn Proprty Descriptors.
 The simple wehn u create object with litalrs u cannot modify their prorpty but u can configure when you add proprty like define Porerty method . By default all values are false except the value u gave. U can try to change these when creating with Define property. - It is called property Descriptors. edach property has their own meaning .

 - Har key ke liye js y 4 descriptior property rakhta hai. okay if you see then evey key will have these same 4 things extra. To maintain this duplicacy of info js engine better Optimtize it by implementing some logic. when we create a object JS engine behind the scene create the shape of Object. jab koi key add key toh shape chang eho jati hai uske acoriding. but yha par bhi optimization kiya hi they are connect ed with linked list so that no need to copy as it is with new shape.

var f = { name : "vinay"}

console.log(Object.getOwnPropertyDescriptors(f))


// prototype pollution - Attacker can steal your data if he know u written in node js. Because her can us prototype key to make your code work 

const obj = {name : "Avi"}
const key  = 'name'

if(obj['constructor']) // even though i haven't like this key but it's taking from inheritance which can really cause issue.
{
    console.log('granted');
}
else
{
    console.log('Not granted')
}

