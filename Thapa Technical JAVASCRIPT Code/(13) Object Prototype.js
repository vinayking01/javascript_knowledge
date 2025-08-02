
//1️⃣ What is Prototype?

//In JavaScript, every object has a hidden property called Prototype that either points to another object or is null.
//prototype exists only on constructor functions (like Array, Object, Function, or your own classes). not their instances.
// Every object in JavaScript has an internal property called [[Prototype]] (accessible via __proto__).
// This prototype is another object from which it can inherit properties and methods.
// It acts like a shared template that multiple objects can refer to.

// ✅ Important Note:
// If you make changes to the shared prototype — for example, by adding a custom method or modifying a built-in method — 
// all instances that inherit from that prototype will see the change.
// This is because they don't have their own copies — they refer to the same prototype object.



let animals = ["Lion", "Tiger"];

let heroPower= {
    thor : "Thunder",
    ironman : "Ai suit",

    similarity : function() {
        console.log("Both are Marvel Heroes");
    }

}

console.log(animals.__proto__); // Accessing the prototype of an object instance (e.g., arrays, objects, or functions) using __proto__.
console.log(Array.Prototype) // accessing the prototype of actual data type, we use 'Prototype' . If we perform change here then it will be reflected in every place where it relates.


Object.prototype.livingArea = function(){   // it will add a new method to the Object prototype and available to all objects
    console.log("Earth");
    console.log(this);
}

animals.livingArea(); // this will work because we added the function to the object prototype and array is down to the line passed through object 

Array.prototype.speak = function(){                 // adding a new method to the Prototype of array not available for all objects but only available for instances of Array.
    console.log("Animals can speak in their own language");
    console.log(this);
}


let birds = ["Parrot", "Sparrow"];
birds.__proto__.fly = function() { console.log("Birds can fly ") }   // under the hood you are modifying the Prototype of Array not only instance of Array -> Array.prototype.fly = function() { ... } . Eventually , it will become available to all Arrays not just the birds only.

// One more Example 
function Car(model) {
    this.model = model;
  }
  
  const car3 = new Car("Tesla");
  const car4 = new Car("BMW");
  
  // ✅ Best Practice: Add shared methods using the constructor's prototype
  Car.prototype.add = function (n) {
    console.log(`${this.model} adds ${n}`);
  };
  
  car3.add(10); // Output: Tesla adds 10
  car4.add(20); // Output: BMW adds 20
  
  // ✅ Note:
  // car3.__proto__ === Car.prototype
  // So modifying car3.__proto__ is effectively modifying Car.prototype
  

// 2️⃣ Prototypal Inheritance - 
// Every object has an internal property called [[Prototype]] (accessible via Object.getPrototypeOf(obj) or __proto__) 

// When you access a property or method on an object, JavaScript looks for it:
// In the object itself. -> If not found, it looks in its prototype. -> Then the prototype’s prototype… and so on, until it reaches null.


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport); // 
// { isAvailable: false, makeVideo:true }

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // the string is itself the context 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()  
"hitesh".trueLength()



function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called", this.username);
}

function createUser(username, email, password){
    SetUsername(username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")


