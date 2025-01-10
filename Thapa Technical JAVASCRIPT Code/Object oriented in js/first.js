
//two ways to create the object in js
// 1. Using object literals 
 var student = {
    name: "vinay singh",
    'roll': 30,
    dob : function()
    {
        return (`THe DOB is  of ${this.name}`);
    }
 };

 console.log(typeof(student));
 console.log(student['name']);
 console.log(student.dob());
 

var student2 = new Object({
    name : "shila",
});

// 2. Using function constructor
// when function is called with new keyword , the function will be used as constructor 

function Details(name, age)
{
    this.name = name;
    this.age  = age;
}

var stud1 = new Details("vikas",23); // you have to use the new keyword with this to create as object using constructor method.

console.log(typeof(stud1));
console.log(stud1.name);
console.log(stud1.age);

// there was no concept earlier in js of classes there was only concept of object but in ES6 classes concept was introduced.

// Example: Traditional Way of defining an Object and simulating them as classes. 
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


// 3.  Class - classes are template for creating objects. By default, all methods defined in a constructor function or a class are automatically added to the prototype. This is a built-in behavior of JavaScript to optimize memory usage.

class vehicle{
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

var car1  = new vehicle("Thar","Black","300kg");
car1.getDetails();

var car2 = new vehicle("Scorpio","Black","21kg");
car1.getDetails() === car2.getDetails()  // Output- true.  Since getDetails is defined on the vehicle.prototype, both car1 and car2 share the same reference to that method.

// 4. Prototype in Object-  
// Every object in javascript has inbuilt property called prototype, which is another object from which it can inherit properties and methods. It is like simple single template object that inherits by all objects.
// If I make changes to an instance's prototype, such as adding user-defined functions  or modifying built-in functions in the prototype, these changes will be reflected in  every instance of that object, array, or function because that shares the same prototype or we can say that you are modifying the single property shared by all instances.

console.log(car1.__proto__); // Accessing the prototype of an object instance (e.g., arrays, objects, or functions) using __proto__.
console.log(Array.Prototype) // accessing the prototype of actual data type, we use 'Prototype' . If we perform change here then it will be reflected in every place where it relates.

function Car(model) {
    this.model = model;
  }
  
  const car3 = new Car("Tesla");
  const car4 = new Car("BMW");
  
  // Adding a function to the shared prototype via car1's __proto__
  car3.__proto__.add = function(n) {
    console.log(`${this.model} adds ${n}`);
  };
  
  // Now car1 and car2 both have access to the "add" method
  car3.add(10); // Output: Tesla adds 10
  car4.add(20); // Output: BMW adds 20

//5. New Operator  - New operator lets developer creates new instance of used defined data type or one of the built in type object data type that has a constructor function.



/* 6. Inheritance - Similar to other languages, inheritance in JavaScript works such that:
- If a method or property is present in the child class, it overrides the one in the parent class.
- If the method or property is not defined in the child class, it will use the one from the parent class.
*/

class SmallVehicle extends vehicle{
    getDetails()
    {
        console.log(`Small Vehicle name is ${this.name}`);
        console.log(`Small Vehicle color is ${this.color}`);
        console.log(`Small Vehicle weight is ${this.weight}`);
    }

};

var Small_car1  = new SmallVehicle("Tuk Tuk","Blue","100kg");
Small_car1.getDetails();


