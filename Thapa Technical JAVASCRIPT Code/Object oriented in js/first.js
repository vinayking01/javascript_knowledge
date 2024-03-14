
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


// 3.  Class

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

// 4. Inheritance - Same other language all things works. and if the function get override then function will get override.

class SmallVehicle extends vehicle{
    getDetails()
    {
        console.log(`Vehicle name is ${this.name}`);
        console.log(`Color of the Vehicle is ${this.color}`);
        console.log(`Weight of the Vehicle is ${this.weight}`);
    }

};

var Small_car1  = new SmallVehicle("Tuk Tuk","Blue","100kg");
Small_car1.getDetails();

