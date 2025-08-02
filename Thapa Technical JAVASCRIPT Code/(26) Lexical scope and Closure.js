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

// Closure - A closure is created when a function is returned or passed and still remembers variables from its lexical environment, even after that outer function has finished executing.
//  A closure in JavaScript happens when a function is defined inside another function and the inner function "remembers" and can still access variables from the outer function, even after the outer function has finished running. It is only possible because of lexical scope.

/* 💡 In simple terms:
✅ A function inside another function forms a closure.
✅ The inner function "remembers" variables from the outer function even after it has returned.
✅ Closures allow data encapsulation and state persistence. */

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
