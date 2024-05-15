
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