
var myName = "Vinay Singh"
// var 1myName =  "Viany Singh" give you error Invalid variable name
var $Name = "Vianay Si gh"
var __Name =  "ViinaySIngh"
console.log(myName)
// console.log(1myName);
console.log($Name);
console.log(__Name);

var num = 22;
var num1 = true;
console.log(typeof(myName)); //String
console.log(typeof(num));  // number
console.log(typeof(num1)); //boolean
console.log(typeof("What is the Water")); // string

console.log(10+32) // 42
console.log(10 + '32')    // in case of '+ ' what it does is concatenate if one operand is string.
console.log(10- '4')   // Tyep coercion property - it is bug, in case of '- ' what it does is subtract it . if one of the operand is Number .
console.log(10- '4s')   // it will give you NaN
console.log(10+"Hellow") // string 
console.log('12' + '21') //string
console.log("212"+"23323")
console.log('        ' + "Hellos")
console.log("vinod " - "thanpa ")
console.log(true + false)  //number
console.log(false - true)  // number
console.log(false - false)  // number
console.log(false - 1)   // number

console.log(" Checking the Tyep of Funciton ")
console.log(typeof(10+32));  // number
console.log(typeof(10 - '4'));  // number
console.log(typeof(10 - '4ssasasa')); // number
console.log(typeof(10 + '32')); // string
console.log(typeof(10+"Hellow")); // string
console.log(typeof('12' + '21')) // string
console.log(typeof("212"+"23323"))  // string
console.log(typeof(false + true)) // number
console.log(typeof(false -1)); // number

//Question  - Null vs Undefined ?
   // Undefined is simply means we  have not intialized yet . whereas in NULL it means we have not the data so we put there null but we later set the value.
var iAmUseless =  null
console.log(typeof(iAmUseless)) // 2nd bug- it is bug because it is data type showing oject

var iAmStandby;
console.log(typeof(iAmStandby))   //type - undefined


