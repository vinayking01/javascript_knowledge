/* 🧠 Prototype in JavaScript (Explained Slowly + Deeply)

Note  - for any doubt watch Akshay saini video- https://www.youtube.com/watch?v=wstwjQ1yqWQ

1️⃣ At the very beginning

1. When the JavaScript engine starts, it creates a few special constructor functions for you:
Object, Function, Array, String, Number, Boolean, RegExp 👉 These are called the built-in constructor functions.

2️⃣ What these constructors do - 
1. Each constructor function has a .prototype object inside it. which is linked whenever we create the instance of that data type.
2. Even if we create a normal function it actually get created by function constructor function.
One important key point is any function in js not matter how it created and what type of function it is, it always will have the prototype property.
    
Example 1: function f(){ }

    On checking through dir(f) i got this to see in console.
    
    f()
    arguments: null
    caller: null
    length: 0
    name: "f"
    prototype: {}  // ⭐ it will be always blank object because its normal rule in if we create function.
    [[prototype]]: ƒ ()  // will point to constructor function
    [[FunctionLocation]]: line 2, column 1
    [[Scopes]]: Scopes[1]

    So here you can see the prototype property is present in every function.


Example 2:

    Array.prototype → blueprint for all arrays.
    String.prototype → blueprint for all strings.
    Number.prototype → blueprint for all numbers.

    Also, if you check the type of various built-in constructors, you’ll see that they are all functions:
    typeof Array // function
    typeof String // function
    typeof Number // function
    typeof Object // function
    typeof Function // function
    typeof Boolean // function
    typeof RegExp // function
    typeof Date // function
    typeof Error // function

3️⃣ The chicken–egg loop ( confusing part)
1. Object is itself a function (so created by Function).
2. Function is also an object (so created by Object because constructor function has prototype where which is linked through every function and provide the various functionalities jus tlike variable ).  

1️⃣ What is Prototype?
- Whenever you create something in JavaScript — whether it is an array, function, string, number, boolean, object, symbol, date, or even your own custom function — JavaScript secretly attaches a hidden object of its type to it. This hidden object is called its prototype.

- Actually, this hidden object is not a fresh copy. Instead, it is a reference to the actual blueprint object (the .prototype property of that constructor function ( Special Classes )).
👉 Example: For arrays, you can check this by running console.dir(Array) in DevTools. You’ll see that the Array function has a property called prototype, which contains the shared blueprint object for all arrays (with methods like push, pop, map, etc.).

- The only way to check/access this hidden link for instances is through __proto__.
    Example:

    let arr = [1,2,3];
    console.log(arr.__proto__ === Array.prototype); // true

- In DevTools, instead of __proto__, you’ll see it written as [[Prototype]]. Don’t get confused. it’s the same internal connection.

- ⭐ Rule: Everything in JavaScript has a prototype (except null and the base Object.prototype) because prototypes are JavaScript’s way of implementing: inheritance, method sharing, and avoiding duplication.

👉 That’s why every object’s prototype is always pointing somewhere up the chain, until it finally reaches null.

Example 1: - 

let arr = [3, 4];
console.log(arr.__proto__); // this will return the prototype of array which is present  in the arr. like -> [[Prototype]]

🔗
Representation of console.log(arr) in Dev tools 
(2)  [3, 4]
     0: 3
     1: 4
     length: 2
    >[[Prototype]]: Array(0)

🔗

- Under the Hood this Array is actually created by calling functions (specifically constructor functions) - let arr = new Array(3, 4); 
- These constructor function of their type contains the Property name - .prototype which contains the actual blueprint and various functionalities which are available for that particular data type. This same is passed as reference to the instance created of that data type.


2️⃣ What is Array.prototype, String.prototype, Function.prototype Number.prototype etc.?
- for understanding let's take an example of Array.

``````````````````````````````````````````````````````````
    🔹 1. Where String.prototype Comes From ?
    -    String itself is a special type of function in JavaScript ( constructor function). eg - typeof(String) // function
    -    Since it’s a function, it has a special property called .prototype.
    -   That .prototype is a blueprint object.
            👉 Whenever you create a string (like "hello"), JavaScript links that string instance’s __proto__ to String.prototype.
    -   SO if you check "hello".__proto__ === String.prototype  // true

    - Same Other Built in data types
    Number.prototype    // blueprint for numbers
    Boolean.prototype   // blueprint for booleans
    Array.prototype     // blueprint for arrays
    Function.prototype  // blueprint for functions
    Object.prototype    // blueprint for objects


    - They all follow the prototype chaining which we will look later. At the very end, everything links to Object.prototype, and then to null ( where it chaining stops).


Explanation :    
    -  Array.prototype Object in their prototype property(__proto__) keeps reference of-> Object.prototype and so on.
    - String.prototype Object in their prototype property(__proto__) keeps reference of -> Object.prototype.
    - Number.prototype Object in their prototype property(__proto__) keeps reference of -> Object.prototype.
    - 👉 Object.prototype Object in their prototype property (__proto__) keeps reference of -> null ( it is the end of prototype chaining).

Example 2: 

console.log(Array.prototype)  // This returns an object (not an array) because Array.prototype is the blueprint object that the Array constructor function gives to all array instances. Inside this object you’ll find all the built-in array methods like push(), pop(), map(), filter(), etc.
This blueprint object itself is also an object, so it has its own prototype.  And at the very end, Object.prototype.__proto__ === null.


🔗
Output Shows in Dev Tools like below of Array.prototype:

[at : ƒ at(), concat : ƒ concat(),constructor : ƒ Array(), 
copyWithin : ƒ copyWithin(), entries : ƒ entries(),
every : ƒ every(), fill : ƒ fill(), with : ƒ with(), Symbol(Symbol.iterator) : ƒ values(),
Symbol(Symbol.unscopables) : {at: true, copyWithin: true, entries: true, fill: true, ...},
[[Prototype]] : Object]

🔗


3️⃣. Why Do We Need Prototypes?
- Instead of copying the same functions into every instance of object, JavaScript puts all common methods in a shared place (prototype).
- All arrays share one single object called Array.prototype whose reference is passed when instances is created of Array.
- All strings share one single object called String.prototype whose reference is passed when string created .
- All numbers share one single object called Number.prototype whose reference is passed when Number is declared.

Example 3: 

[1, 2, 3].push(4); //JS looks for push inside your array. If it doesn’t find it, it climbs up the chain to Array.prototype as it present in their prototype. There it finds push. ✅.. But suppose if it wasn't there then it will go to Object.prototype and check if it is present there or not. If not found there also then it will return undefined because last point was null.

 

4️⃣The Prototype Chain
- Every object’s prototype may itself have another prototype. This creates a chain. Whenever searching starts for a property, it starts from the object itself and then follows the chain until it finds the property or reaches the end of the chain.
- At the very top is Object.prototype.
- And Object.prototype.__proto__ is null. That means the chain ends here.
- So, no matter what you start with (array, number, string, function), the chain always ends at Object.prototype → null.


Example 4:

    (a) 🔹 Array instance
        let arr = [3, 4];


        💬 Looking into the prototype chain of arr instance.

        ⬇️arr.__proto__ → keeps reference of Array.prototype (methods like push, map, filter).   
        ⬇️arr.__proto__.__proto__ (indirectly we are now searching inside the prototype of Array. i.e. Array.prototype.__proto__) → keeps reference of Object.prototype (methods like toString, hasOwnProperty).
        ⬇️arr.__proto__.__proto__.__proto__ (indirectly we are now searching inside the Object.prototype.__proto__) → null.

    (b) 🔹 Number instance
        let num = 4;
        num.toString(); ✅ // Ever wondered why it works without defining this property because toString is present in Number.prototype which is accessed because of prototype inheritance.

        💬 Looking into the prototype chain of num instance.

        ⬇️num.__proto__ → Number.prototype (methods like toFixed, toExponential, toString).
        ⬇️num.__proto__.__proto__ → Object.prototype.
        ⬇️num.__proto__.__proto__.__proto__ → null.

    (c) 🔹 Object instance
        let obj = { name: "John" };

        💬 Looking into the prototype chain of obj instance
        
        ⬇️obj.__proto__ → Object.prototype.
        ⬇️obj.__proto__.__proto__ → null.    



📦 What is Boxing?
-   Boxing means wrapping a primitive value (like string, number, boolean) inside its corresponding object wrapper class (String, Number, Boolean) temporarily, so that you can use object-like methods on it.
- After the method/property is accessed, the wrapper is thrown away (it doesn’t stay in memory).
- wrapper classes are just built-in constructor functions, each with their own .prototype that stores methods for primitives. Boxing/unboxing is JavaScript’s way of letting primitive values temporarily “borrow” those methods.


🎯 is everything in js is Object?
- Not everything is an object in JavaScript.
- The core values are split into: Primitives (not objects), Objects (everything else, including functions)

BUT 🤔 when you try to use methods on them, like:

"hi".toUpperCase(); ✅ // it works because boxing

*/


// ✅ Important Note:
// If you make changes to the shared blueprint prototypes — for example, by adding a custom method or modifying a built-in method — 
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
console.log(Array.Prototype) // accessing the Array Blueprint prototype of actual data type, we use 'Prototype' . If we perform change here then it will be reflected in every place where it relates.


Object.prototype.livingArea = function(){   // it will add a new method to the Object prototype and available to all objects
    console.log("Earth");
    console.log(this);
}

animals.livingArea(); // this will work because we added the function to the object prototype and array is down to the line linked to object through chaining. 

Array.prototype.speak = function(){ // adding a new method to the Prototype of array not available for all objects but only available for instances of Array.
    console.log("Animals can speak in their own language");
    console.log(this);
}


let birds = ["Parrot", "Sparrow"];
birds.__proto__.fly = function() { console.log("Birds can fly ") }   // under the hood you are modifying the Prototype of Array not only instance of Array because the reference was passed of actual blueprint of Array and it is doing this -> Array.prototype.fly = function() { ... } . Eventually , it will become available to all Arrays not just the birds only.

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
  

// 2️⃣ Prototypal Inheritance Example- 
// Every object has an internal property called [[Prototype]]. (for instance it is accessible via Object.getPrototypeOf(obj) or __proto__ and for blueprint first level - Array.prototype, String.prototype etc. and after that Array.prototype.__proto__ will give me the Object.prototype and so on. ) 

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

