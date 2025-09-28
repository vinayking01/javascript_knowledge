
// ES8 features

//1. string Padding in js

var  p = "Thapa".padStart(12);
var  p1 = "Thapa".padEnd(12);
console.log(p);
console.log(p1);

//2. Object values() - Method used to loop the object very easily

const fruit ={
name  : "fruit",
cost : 23
}
console.log(Object.values(fruit));


// You can also able to put the conditions inside template string in this way. It allows you to put the value according the right conditons.

// Example variables
const name = 'John';
const age = 30;
const isAdmin = true;

// Example template string with conditions
const userInfo = `
    Name: ${name}
    Age: ${age}
    ${isAdmin ? 'Admin User' : 'Regular User'}
`;

console.log(userInfo);
console.log(typeof(userInfo));