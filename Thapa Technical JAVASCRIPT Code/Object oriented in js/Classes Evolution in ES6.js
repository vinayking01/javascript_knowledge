/* Does js support classes ?
Yes and No. Before ES6 JS doesn't had any concept of classes. JS is prototype based language which primarily focus on functional style of programming. With ES6 we got support of classes, which is syntactic sugar over existing functions.

Extension beyond syntactic sugar : But this is not just syntactic sugar, it's a whole new implementation that is added in js. It's extension beyond syntactic sugar. Syntactic sugar is 60%, 40% new features added form OOPs

*/

// there was no concept earlier in js of classes there was only concept of object but in ES6 classes concept was introduced.

// Example: Traditional Way of defining an Object using constructor function and simulating them as classes. 
function transport_vehicle(name, maker, engine) {
    this.name = name,
    this.maker = maker,
    this.engine = engine
};
 
transport_vehicle.prototype.getDetails = function () {
    console.log('The name of the bike is ' + this.name);
} // this is the way to add the function 

 
let bike1 = new transport_vehicle('Hayabusa', 'Suzuki', '1340cc');
console.log(transport_vehicle);

console.log("--------------------------------")

// 1.  Class - classes are template for creating objects. By default, all methods defined in a constructor function or a class are automatically added to the prototype. This is a built-in behavior of JavaScript to optimize memory usage.


// ES6
class vehicle{

    name = 'Thar';   // class fields (declared, default undefined) , it is optional if you directly used in constructor not defined here still it work fine.
    color = 'White';
    weight = '2000kg';

    constructor(name,color,weight)  // If you want to pass values dynamically then you have to use constructor (Optional)
    {
        this.name = name;
        this.color = color;
        this.weight = weight;

    }
    getDetails()
    {
        console.log(`Vehicle name is ${this.name}`);
        console.log(`Color of the Vehicle is ${this.color}`);
        console.log(`Weight of the Vehicle is ${this.weight}`);
    }
}

var car1  = new vehicle("Thar","Black","300kg");
car1.getDetails();

var car2 = new vehicle("Scorpio","Black","21kg");
car1.getDetails() === car2.getDetails()  // Output- true.  Since getDetails is defined on the vehicle.prototype, both car1 and car2 share the same reference to that method.

console.log("--------------------------------")

// Second Example : First using class and how it is converted into constructor function and prototype behind the scene.
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

console.log("--------------------------------")

// 🤯 behind the scene Still js is converting it into constructor function and prototype to simulate the classes.

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User2("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

//2. New Operator  - New operator lets developer creates new instance of used defined data type or one of the built in type object data type that has a constructor function.


/* 3. Inheritance - Similar to other languages, inheritance in JavaScript works such that:
- If a method or property is present in the child class, it overrides the one in the parent class.
- If the method or property is not defined in the child class, it will use the one from the parent class.
- If the child class does not have its own constructor: The parent class's constructor will be automatically called when an object of the child class is created. This happens because JavaScript implicitly creates a default constructor in the child class that simply calls super() (which invokes the parent's constructor) with any arguments passed to the child class's instantiation.
*/
class vehicle2{
    constructor(name,color,weight)
    {
        this.name = name;
        this.color = color;
        this.weight = weight;

    }
    getDetails()
    {
        console.log(`Vehicle name is ${this.name}`);
        console.log(`Color of the Vehicle is ${this.color}`);
        console.log(`Weight of the Vehicle is ${this.weight}`);
    }
}


class SmallVehicle extends vehicle{


    // getDetails()
    // {
    //     console.log(`Small Vehicle name is ${this.name}`);
    //     console.log(`Small Vehicle color is ${this.color}`);
    //     console.log(`Small Vehicle weight is ${this.weight}`);
    // }

};

console.log("--------------------------------")

var Small_car1  = new SmallVehicle("Tuk Tuk","Blue","100kg");
Small_car1.getDetails();

console.log("--------------------------------")

/* 4. Super() Keyword -
    - Calls the parent class’s constructor.
    - Lets you access parent class methods inside a child class.
 This is necessary to use if you have defined the child class constructor to call the parent class's constructor and use that class. */


class SmallVehicle2 extends vehicle{   

    constructor(name,color,weight,capacity) {
        // ❌ Error if not : call super before accessing 'this'
        super(name,color,weight) // call's the parent constructor
        this.capacity = capacity;
    }

     getDetails()
    {
        console.log(`Small Vehicle name is ${this.name}`);
        console.log(`Small Vehicle color is ${this.color}`);
        console.log(`Small Vehicle weight is ${this.weight}`);
        console.log(`Small Vehicle Capacity is ${this.capacity}`);
        
    }


}

var small_car2 = new SmallVehicle2("Nano Rang Rover","Black","2332kg",4) // output - 
// var small_car2 = new SmallVehicle2(7);
small_car2.getDetails();


// Example : Another application of using super() to use paretn's method -
        class Vehicle {
    start() {
        console.log("Vehicle started");
    }
    }

    class Car extends Vehicle {
    start() {
        super.start();   // ✅ call parent version
        console.log("Car started");
    }
    }

    const c = new Car("BMW", "Black");
    c.start();
    // Vehicle started
    // Car started

/* 5. Access Modifiers in Js : Private and Public 

- Public - By default all the properties and methods are public in js for their instances. It means they can be accessed from outside the class.
- Private - To make a property or method private, you need to prefix it with a hash symbol (#). Private members cannot be accessed or modified from outside the class. They are only accessible within the class itself.

*/

class MyClass {
  publicProperty = "I am public"; // Public property
  publicMethod() {  };          // Public method     
  #privateProperty = "I am private"; // Private property
  #privateMethod() { // Private method
    console.log("This is a private method.");
  }

  accessPrivateMembers() {
    console.log(this.#privateProperty); // Accessible within the class
  }
}

const instance = new MyClass();
// console.log(instance.#privateProperty); // This would cause a SyntaxError
// instance.#privateMethod(); // This would also cause a SyntaxError
instance.accessPrivateMembers(); // will work
instance.publicMethod(); // will work