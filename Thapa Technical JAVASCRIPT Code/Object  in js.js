
// Object in java script are stored in the form of key value pair
// In object key can be string or varaiable name .


// 1. Creation of Object - 2 ways
    // (a) Using {}  braces

    var stud = {
        name : "vinay Singh",
        "age" : 22,    
        School : "Kendriya Vidhyalaya"
    };

console.log(stud); // give the whole object
console.log(typeof(stud));  // object


    // (B) using constructor - which creates empty object or we can also give the data there.
    var stud2 = new Object() ; // empty object
    var stud2 = new Object({
        name : "Amit",
        age : 24,
    })

 console.log(typeof(stud2)); 


 // 2. Accessing & creation of the properties of the Object - 2 ways to do that
    // (a ) using dot Operator - we can only access the valid identifire. The property name only start with characters. And it also won't work when passing the object as argument in function.
        console.log(stud.age); // 22

        stud.adress = " Bhinod wali raod gali 4"; // Adding the property in in Object

        console.log(stud); // gives the whole object

        // (B) USing [] -it can be used anywehere. It access the property by 
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
    ● Objects are reference - means in the above example the stud & stud2 are storing the adress of the objects. using that refernce adress we are accessing the property.
*/

 var item1 = {
    name : "Steel"
 }

 var item2  = item1 ; // now item2 start reffering to the same object . It will not copy the object.

console.log(item1 === item2 ); // returns true


// 5. Iterating over the objects - here also dot operator won't work

for(index in stud)
{
    console.log(`key - ${index} : value is -  ${stud[index]}`);
}

//6 . Nested Objects

var item3 ={
    name: "rita",
    address : {
        city : "Ghz",
        Block : "232 Gali "
    }
}
// how to access the element in nested object
console.log(item3.address.Block); // 232 Gali

// 7. Object Dynamic property- Update in ECMA Script.

var _name = "Nominee_name"
var _age = "Nominee_age";
    var item4 ={
    [_name]: "vinod Thapa", // here it act as value
    [_age] : 32
    }
console.log(item4);
console.log(item4[_name]);

