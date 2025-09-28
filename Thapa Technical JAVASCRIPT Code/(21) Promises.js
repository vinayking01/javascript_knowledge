/*
Promise 
1️⃣ Promise Theory
 1. Promises represent asynchronous operations. Although JavaScript executes code sequentially (line by line), multiple promises in a file are scheduled asynchronously. The executor function of each promise runs immediately (synchronously), but any .then() or catch() callbacks are executed later, through the microtask queue, after the current call stack is empty.
 
 2. Their is a inbuilt class in js of Promise whose object you create actually with the help of New Operator.
 
 3. A Promise object has inbuilt methods like .then(), .catch(), .finally() that let us consume the result. Without these, you can’t directly use the result — only inspect the state. Directly logging a promise object like (console.log(myPromise);) only shows its state (pending, fulfilled, rejected). The state totally depends upon the promise if executing(pending), resolved( fulfilled). rejected(reject).
 
 4. A Promise has three states corresponding to the three possible outcomes of an asynchronous function:
    - pending is the initial state, waiting for the result.
    - fulfilled is the successful state, with a result value.
    - rejected is the failure state, with an optional error value.
     
 5. .then() is used for consumption and it always returns a new Promise. If you return some data inside .then(), it is automatically wrapped as a resolved Promise carrying that data. If you don't return then resolved with undefined value.
 
 6. .catch() block also returns a resolved Promise with the value you return (or undefined if nothing is returned). If you have written multiple .catch(), only the first one that encounters the error will run.
 
 7. .finally() runs a cleanup callback regardless of success or failure. It doesn’t change the value (unless it throws).

 8. ❌ — a Promise never auto-resolves. It only resolves when you explicitly call resolve() (or rejects with reject()).

 9. Drawbacks  - Promise Hell with .then().then().then( )- - so it is resolved later by async and await. To make code more cleaner and asynchronous.
*/

/* Step 1: creation Phase of Promise
        1. The Promise constructor takes a function (called the executor).
        2. This executor function automatically receives two arguments:
                 - resolve → a function to mark the promise as fulfilled
                 - reject  → a function to mark the promise as rejected
        3. reject and revoke are the callback methods which provided by the javascript itself.
    */
    var promise = new Promise(function (myResolve, myReject){ 
         
        var x = 0;

        console.log("I am inside the promises");
        if (x === 0) {
            setTimeout(function() {
                myResolve(56);  // Resolve the promise with 56 after 3 seconds
            },3000);  // Resolve the promise with a value of 56 if successful
        } else {
            myReject(23);   // Reject the promise with a value of 23 if failed
        }
    });

    console.log("Hello");
    console.log(promise); // it will always result the state not result of resolve or rejected

// After a Promise is fulfilled or rejected, you handle the result using .then() or .catch()- only for error or finally which for cleanup ( like fetch)

promise.then(
    function (successValue) {
    // First callback → runs if the promise is fulfilled
    console.log("Code ran successfully: " + successValue);
  },function (error) {
    // Second callback → runs if the promise is rejected (optional) it will better if u use catch 
    console.log("Code gave an error: " + error);
  }
);

console.log("k2");

// Another way to catch errors
promise.catch((error) => {
  console.log("Code gave an error in catch: " + error);
});

// Promise chaining
// You can chain multiple .then() calls. The result of one promise (fulfilled or rejected)  is passed to the next .then(), allowing sequential asynchronous operations but depends on previous results.
promise.then((result) => {
    console.log("First then:", result);
    return result + " modified"; // automatically wrapped in a resolved Promise
  })
  .then((newResult) => {
    console.log("Second then:", newResult);
  })
  .catch((err) => {
    console.log("Error caught in chain:", err);
  });


//2️⃣-  Understanding the Multiple Promises Execution 

//1. Promise creation (executor function) runs immediately.
//2. .then() callbacks run asynchronously. wait until they get resolve or reject.
//3. Even though .then() is written immediately, callbacks go to the microtask queue. They run after the current call stack is empty, not sequentially like normal code.

const p1 = new Promise((resolve) => {
  console.log("Promise 1 executor");
  resolve(1);
});

const p2 = new Promise((resolve) => {
  console.log("Promise 2 executor");
  resolve(2);
});

p1.then((val) => console.log("p1 then:", val));
p2.then((val) => console.log("p2 then:", val));

console.log("End of script");



// Output -
// Promise 1 executor
// Promise 2 executor
// End of script
// p1 then: 1
// p2 then: 2


/* 3️⃣- Promises Methods -
    
    *Note  - when using this method u must know that the promise are executed according to the time it resolve. so order is not maintained it could change. & most importantly all methods return promise.

    
    
    1. Promise.all() 
        - Takes an array of promises. Runs Multiple promises in parallel and waits for all to complete
        - Returns single promise
            - Fulfilled if all promises succeeded. Return the Array , value filled with promise resolved.
            - Rejected promise value only returned if any promise fails. 
        - Drawback is only issue of rejected which can handled by Promise.allSettled */

    function FetchDummy(taskName , time, TaskDone)
    {
        return new Promise( function (resolve, reject){
            setTimeout(()=>{
                if(TaskDone)
                {
                    resolve("Task Completed ✅ " + taskName );
                }
                else{
                    reject('Rejected Task ❌' + taskName)
                }
            },time)
        })
    }

    
    const putPan = FetchDummy('Get water and Start Adding Water in pan',10000,true);
    const addWater = FetchDummy('Boiling water add Tea, ginger', 2000, true);
    const addTea = FetchDummy('Added tea , ginger ',300, true);
    const addSugar = FetchDummy('Added Sugar let them Boil',600, true);

    // running this task one by one
    // putPan
    // .then((data)=>{
    //     console.log(data);
    // })

    // addWater.then((data)=>{
    //     console.log(data);
    // })

    // addTea.then((data)=>{
    //     console.log(data);
    // })

    // addSugar.then((data)=>{
    //     console.log(data);
    // })


    //🔴 Promise Hell / Pyramid of Doom Situation Below
    //🔴 we have to handle the error handling for each one separate. which makes more code unreadable. 
    putPan.then((data)=>{
        console.log(data);
        addWater.then((data)=>{
            console.log(data);
            addTea.then((data)=>{
                console.log(data);
                addSugar.then((data)=>{
                    console.log(data);
                    })  
            })
        })
    })
    
    //✅ Solution of Our Error Problem could be handle this way But still need more clear easy readable code.
    //     putPan
    //   .then((data) => {
    //     console.log(data);
    //     return addWater;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     return addTea;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     return addSugar;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.error("Error:", err));

    // With the help of promise all the promise starts at once. Gives result if all promise is resolved in the form of Array. if any one failed that will be returned only

    Promise.all([putPan,addWater,addTea,addSugar])
    .then((data)=>{
        console.log("Result of Promise All :" + data);
    }).
    catch((e)=>{
        console.log(e)
    })
    
    /* 2. Promise.allSettled() 
            - Runs Multiple promises in parallel
            - Returns and array of object with each promise status
            - No Failures are lost.
            - Always resolves → with an array of objects describing the outcome of each promise:
                { status: "fulfilled", value: ... }
                { status: "rejected", reason: ... }

✅ Example:
    */
    Promise.allSettled([putPan,addWater,addTea,addSugar]).then((data)=>{
    console.log("Result of Promise AllSettled :" + data);
    }).
    catch((e)=>{
        console.log(e)
    })

    /* 3. Promise.race()
            - Runs Multiple promises in parallel
            - Returns only the 1st promise that resolves or rejects.
            - Only the fast one happens.
    */
    Promise.race([putPan,addWater,addTea,addSugar]).then((data)=>{
    console.log(data);
    }).
    catch((e)=>{
        console.log(e)
    })

    /* 4. Promise.any
            - Runs Multiple promises in parallel.
            - Returns the first fulfilled promise.
            - if all fails, it then returns an AggregateError
            - Useful when we want to fetch same thing from multiple servers.
    
    */
    Promise.any([putPan,addWater,addTea,addSugar]).then((data)=>{
    console.log(data);
    }).
    catch((e)=>{
        console.log(e)
    })

