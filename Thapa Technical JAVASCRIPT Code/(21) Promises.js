// Promises represent asynchronous operations, but they are executed sequentially by the JavaScript engine

var promise = new Promise(function (myResolve, myReject){ // 1. the promise contain some function inside it which always takes two callback argumnets which is defined  by itself.
    var x = 0;

    console.log("I am inside the promises");
    if (x === 0) {
        myResolve(56);  // Resolve the promise with a value of 56 if successful
    } else {
        myReject(23);   // Reject the promise with a value of 23 if failed
    }
});

// 2. reject and revoke are the callback which provided by the javascript itself.
//3. every promise have some state and there result . firstly it is in pending -> fuffilled -> rejected.
console.log("Hello");
console.log(promise);

// after promise fulfilled what happens you will do here if successful or fail . there is also other way to catch the error. 
// the .then() method takes two callback functions as arguments:The first callback function is executed when the promise is successfully resolved (fulfilled). The second callback function is executed when the promise is rejected (failed). The order fixed but name is not fixed.
promise.then(
    function (successvalue){ console.log("Code runs successful "+ successvalue);},
    // function (error){ console.log("Code giving error "+ error);}
);

// another way to catch the error 
promise.catch((error)=>{
    console.log("Code giving error "+ error);
})

//4. you can also do promise chaining using then when one promise fulfilled the result either it is rejected or successful result it is passed to other promise and then to other promise if fulfiled and so on.