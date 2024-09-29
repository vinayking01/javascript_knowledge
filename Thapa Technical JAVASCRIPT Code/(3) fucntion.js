  var a = 2;
  var b = 3;

// Question - function Parameters vs function Arguments?

// Function parameters are those listed names in the function definition .
// function Arguments are the value we passed to the function.

function hello(a,b) // function parameters & it is called function definition and function declaration.
{
    console.log(a+b);
    console.log("How to handle the satire in better way so that no one get offend")
}

// hello();
hello(30,50);  // function arguments

//1. Anonymous function - the function which don't have any name

var answer = function(a, b){
    console.log("the sum is" + a+b);    // Anonymous expression
}
answer(342,2333);

//2. Arrow fat function

var clip = (a)=> {
console.log("thanks "+a )
};
clip(3); // you can't call function without parentheses.


//3. Rest Operator (...)  - rest operator in JavaScript (...) allows you to collect multiple elements into an array or an object.

function GiveMe(...num)
{
  console.log(num);
  return num;
  
}
console.log(GiveMe(32,54,64,23,75,64))


//4. IIFE (Immediately Invoked Function Expression) - in JavaScript is a function that runs as soon as it is defined. It is used to create a private scope and avoid polluting the global namespace by encapsulating variables and logic inside the function. ex -

    // (function() {
    //   let message = "4. Hello, IIFE!";
    //   console.log(message);
    // })();


//5 . Callback function  - it is function which is passed as argument to other function , and it is executed after the execution of the main function. Instead of immediately returning some results some like most functions, function that uses callbacks take some time to produce a result  eg - used when taking data, downloading files, reading the files, 


//examples - (A)
// function Welcome(name,callback_greet)
// {
//   console.log(`${name} Once again i welcome you`);
//   callback_greet(); // Execute the callback function with the message
// }

// function greet()
// {
//   console.log("Good morning")
// }
// console.log("Hello 1st");
// Welcome('ALice', greet);
// console.log("Hello 3")

//(B)
function Welcome(name,callback_greet)
{
  setTimeout(() => {
    callback_greet(); // Execute the callback function
  }, 2000);
  console.log(`${name} Once again i welcome you`);
  
}

function greet()
{
  console.log("Good morning")
}
console.log("Hello 1st");
Welcome('ALice', greet);
console.log("Hello 3rd")

// Call back Hell Issue - Callback hell occurs when you have deeply nested callback functions, making the code difficult to read, understand, and maintain. In this situation, it becomes challenging to manage the flow of asynchronous operations effectively.
// Solution of Callback - To avoid callback hell and make asynchronous code more readable and maintainable, JavaScript introduced Promises and, later, the async/await syntax.


// eg- (A)
// Step One
function stepOne(callback) {
  console.log('Step One');
  setTimeout(function() {
    callback();
  }, 1000);
}

// Step Two
function stepTwo(callback) {
  console.log('Step Two');
  setTimeout(function() {
    callback();
  }, 1000);
}

// Step Three
function stepThree(callback) {
  console.log('Step Three');
  setTimeout(function() {
    callback();
  }, 1000);
}

// Step Four
function stepFour(callback) {
  console.log('Step Four');
  setTimeout(function() {
    callback();
  }, 1000);
}

// Callback Hell
stepOne(function() {
  stepTwo(function() {
    stepThree(function() {
      stepFour(function() {
        console.log('All steps completed');
      });
    });
  });
});




