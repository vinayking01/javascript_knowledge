//1. Lexical Scoping: "Function outer ke andar ek inner function hai, aur us inner function ko outer function ke scope ke variables ka pura access hai. Is concept ko lexical scoping kehte hain."

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


// Closure - A closure in JavaScript happens when a function is defined inside another function and the inner function "remembers" and can still access variables from the outer function, even after the outer function has finished running.
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

When outerFunction returns innerFunction, it doesn’t return the value of count. Instead, it returns the function itself along with a reference to the environment in which it was created, which includes the count variable.
Closure Mechanism:

The closure allows innerFunction to "remember" the count variable. This means it retains access to count even after outerFunction has finished executing and returned.
The innerFunction retains a reference to the specific count variable from the scope of the outerFunction that created it.
What Happens When You Call counter():
Each time you call counter(), you are invoking innerFunction, which has access to the same count variable created when outerFunction was called.
When innerFunction increments count (i.e., count++), it modifies the same variable that exists in memory. Thus, the value of count persists across calls to counter().
  
*/
