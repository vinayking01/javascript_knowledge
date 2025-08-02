
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

console.log("--------------------------------")

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

console.log("--------------------------------")

// 3.  Class - classes are template for creating objects. By default, all methods defined in a constructor function or a class are automatically added to the prototype. This is a built-in behavior of JavaScript to optimize memory usage.


// ES6
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

console.log("--------------------------------")

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

// behind the scene

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

//4. New Operator  - New operator lets developer creates new instance of used defined data type or one of the built in type object data type that has a constructor function.



/* 5. Inheritance - Similar to other languages, inheritance in JavaScript works such that:
- If a method or property is present in the child class, it overrides the one in the parent class.
- If the method or property is not defined in the child class, it will use the one from the parent class.
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

// 6. Super() Keyword - This is neccessary to use if you have defined the child class constructor Call the parent class's constructor

class SmallVehicle2 extends vehicle{   

    constructor(name,color,weight,capacity) {
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

var small_car2 = new SmallVehicle2("Nano Rang Rover","Black","2332kg",4)
// var small_car2 = new SmallVehicle2(7);
small_car2.getDetails();