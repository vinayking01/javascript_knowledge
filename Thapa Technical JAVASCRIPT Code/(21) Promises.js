// Promises are used to asynchronus promgramming ,
// It is used for parllel execution

var promise = new Promise(function (myResolve, myReject){ // 1. the promise containsone function inside it which always takes two callback argumnets which is defined itself.
    var x = 1;

    console.log("I am inside the promises");
    if(x === 0)
    {myResolve(56);} // when successful
    else
    {myReject(23);} // when reject
});

// 2. reject and resokve are the callback which provided by the javascript itself.
//3. every promise have some state and there result . firstly it is in pending , fuffilled , rejected.
console.log("Hello");
console.log(promise);

// after promise fulfilled what happens you will do here if successful or fail . there is also other way to catch the error.
promise.then(
    function (value){ console.log("Code runs successful "+ value);},
    // function (error){ console.log("Code giving error "+ error);}
);

promise.catch((error)=>{
    console.log("Code giving error "+ error);
})

//4. you can also do promise chaining using then when one promise fulfilled it is passed to other promise and then to other promise if fulfiled and so on.