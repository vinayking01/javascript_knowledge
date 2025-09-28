//1. Lexical Scoping:  Based on where a variable/function is declared, not called.Means that a variable’s scope  is determined by its position in the source code—that is, where it’s written."Function outer ke andar ek inner function hai, aur us inner function ko outer function ke scope ke variables ka pura access hai. Is concept ko lexical scoping kehte hain."
/* 
✅ Inner functions can access variables from their outer functions.
✅ Outer functions cannot access variables from inner functions.
✅ A function always looks for a variable in its own scope first, then moves outward (parent scope), up to the global scope. */
// It means the inner function can access the variables of the outer function because of where it is defined.


    // function outer(){
    //     let username = "hitesh"
    //     function inner(){
    //         let secret = "my123"
    //         console.log("inner", username);
    //     }
    //     function innerTwo(){
    //         console.log("innerTwo", username);
    //     }
    //     inner()
    //     innerTwo()

    // }
    // outer()

// 2nd example of Lexical Scoping

/*
function outer() {
  let a = 10; // a is in the lexical scope of inner

  function inner() {
    console.log(a); // inner has access to a because of lexical scope
  }

  inner();
}

*/

// Closure - A closure is created whenever a function is defined inside another function (or block not global or anything), and the inner function uses variables from that outer scope. Majorly concept is behind when inner function is returned or passed and still remembers variables from its lexical environment, even after that outer function has finished executing.
//  A closure in JavaScript happens when a function is defined inside another function and the inner function "remembers" and can still access variables from the outer function, even after the outer function has finished running. It is only possible because of lexical scope.

/* 💡 In simple terms:
✅ A function inside another function forms a closure. This closure is created at the time of creation of inner function not when it's called.
✅ You don't need to return the inner function - closure still exist.
✅ The inner function "remembers" variables from the outer function even after it has returned.
✅ Closure forms when inner uses outer's local variable. 
✅ Not every function inside another function forms a closure. It only happens if the inner function uses variables from the outer function.
*/

debugger
function outerFunction() {
    let count = 0;  // count is initialized only once when outerFunction is called
  
    return function innerFunction() { 
      count++;      // increment the same 'count' variable
      console.log(count);
    };
  }
  
  const counter = outerFunction(); // outerFunction is called only once, returning innerFunction
  
  counter(); // Output: 1  --> count becomes 1
  counter(); // Output: 2  --> count becomes 2 (same 'count' variable is used)
  counter(); // Output: 3  --> count becomes 3 (incrementing the same 'count')


/*
How Closures Work with the count Variable
Function Creation:

When you define outerFunction, a local variable count is created and initialized to 0 each time outerFunction is called.
Returning the Inner Function:

When outerFunction returns innerFunction, it doesn’t return the value of count. Instead, it returns the function itself along with a reference to the environment in which it was created, which includes the count variable. Each call to counter() reuses that closure. No new environment is created per call.

Closure Mechanism:
The closure allows innerFunction to "remember" the count variable. This means it retains access to count even after outerFunction has finished executing and returned.
The innerFunction retains a reference to the specific count variable from the scope of the outerFunction that created it.
What Happens When You Call counter():
Each time you call counter(), you are invoking innerFunction, which has access to the same count variable created when outerFunction was called.
When innerFunction increments count (i.e., count++), it modifies the same variable that exists in memory. Thus, the value of count persists across calls to counter().
  
*/

// Example 2:
function outerFunction1() {
    let count = 0; 
  
    function innerFunction1() { 
      console.log("No use of Count"); // count is not used here so no closure is formed
    };
}

// Example 3:

let x = 43

function outerFunction2() {
    let count = 0; 
  
    function innerFunction2() { 
      console.log("No use of Count",x); // x is global variable so no closure is formed
    };
}

// Example 4:

let x1 = 3;

function outerFunction3() {

  let y = 5;

  function one()
  {
    let z = 3;
    function two()
    {
      console.log("Hello",y);
    }

    return two;
  }

  return one;

}

let one = outerFunction3(); 
let two = one(); 

console.dir(outerFunction3); 
console.dir(one); // in the closure of one function y is present.
console.dir(two); // in the closure of two function y and z is present. in dev tools it won't show if not used but it is present.

// A closure always exists if a function is defined inside another function.
// DevTools is smart: it only shows the variables that are used inside the closure. If you don’t reference them, they won’t appear in the [[Scopes]] view. ( Only for view in dev Tools).


// Question : What is the stale closure problem?
// Ans - A stale closure happens when: You create a closure that captures a variable. Later, that variable changes. But the closure still uses the old snapshot of that variable.