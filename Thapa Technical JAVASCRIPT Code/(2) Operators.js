
console.log(5+'10')
console.log(5+'s')
var a= 5;
var b = 5;

console.log("is both equal or not : " + a==b); // It is bug that its try to concatenate
console.log(`is both equal or not : ${a==b}`);

console.log(5 != 5)


x= 7; y= '7'; z= 7
console.log( x==y ); // Here loosly matching value. Only checking the value stored in vaiables. In y it contains string which is convertable ot number that'swhy it matched that value and gave true. 
console.log( x===y ); // it is strictly cheking means - along with value alo checking type of data.
console.log( x===z);

z  = 3;
z1 = ~z;
console.log(z1);


// Debuggers in Javascript - to check it how it works you use it in console.

for(var num =1; num<=10;num++)
{
    debugger;  // it is often used with function 
    console.log(num);
}


// Data types in js - Two types 

// 1. Primitive Data Types - string , number, boolean, undefined , Null, symbol , Bigint.

// 2. Non Primitive Data Types - Array, Object, map, set , functions 

// Primitive data types are stored in Stack and are immutable, and non - primitive are stored in Heap are mutable they are stored by reference, ( reference look at the PDF)


let name = "John";
name = "Don";  // You’re not changing "John". You're reassigning the variable name to point to a new string "Don", The original value "John" stays untouched


let person = { name: "Alice" };
person.name = "Bob"; // This changes the value inside the object
console.log(person)