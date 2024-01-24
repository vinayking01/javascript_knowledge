
//  Math Object - Allow Mathematical tasks on number . It does not change the actual value.

let num   = 10.643
// 1. Pi 
console.log(Math.PI); // gives the valuie of PI
// 2.  round function
console.log(Math.round(num)); // it round to the nearest integer. And does not change the actual value
// 3. Pow function
console.log(Math.pow(2,3)); // returns the power of x to y
// 4. Square root function 
console.log(Math.sqrt(64)); // tit gives the square root of the number;
// 5. Absolute function
console.log(Math.abs(-995)); // it convert the value to positive to number.
// 6. Ceiling Method - gives the round integer & always first maxium numer
a1  = 33.54;
a2  = 33.10;
console.log(Math.ceil(a1))
console.log(Math.ceil(a2))
// 7. Floor Method
b1  = 33.54;
b2 = 33.12;
console.log(Math.floor(b1))
console.log(Math.floor(b2))

// 8. Min &Max function  - gives the maximum and minimum value from set of numbers
console.log(Math.max(32,3223,5,23,23,23,23,44545,44432));
console.log(Math.min(32,3223,5,23,23,23,23,44545,44432));

//9. Random () - it gives the random number between 0(inclusive) to 1(inclusive)
console.log(Math.random());
console.log(Math.random()*10);

// 10. trunc() - return the integer part of the number. Always gives you anumber which is not demical
console.log(Math.trunc(-221.232323));

// Note  - if the argument is positive number, the trunc() is equivalent to the floor(). otherwise it is equal to Ceil function.
