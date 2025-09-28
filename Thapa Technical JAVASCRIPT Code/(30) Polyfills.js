/*

/*
🔹 What are Polyfills?

A polyfill is a piece of code (usually JavaScript) that provides modern functionality on older browsers that don’t natively support it.
👉 Example:
1, Old browsers didn’t support Array.from().
    - A polyfill defines Array.from() manually so developers can use it safely, even in older environments.

2. Legacy support
    - If your users are on older browsers (like IE11), polyfills fill the gap.

3, Developer convenience
    - Lets you use modern ES6+ features without constantly writing fallback logic.


🔹Question : Do you still need to write polyfills by hand anymore. Why not?
- Modern workflows (Webpack, Babel, Vite, etc.) + libraries like core-js handle polyfills for you automatically.
- You just tell them your browser support target (e.g., “last 2 versions, IE11”), and they inject the needed polyfills.

*/


//👉 1. The forEach() : executes the callback function on each element of array.

const names = ["ali", "hamza", "jack"];
// names.forEach(consoleFunc);  // ali hamza jack

function consoleFunc(x) {
    console.log(x);
}

// ForEach Polyfills 

Array.prototype.myforEach = function (callback) {
    // console.log(this);
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }

}

names.myforEach(consoleFunc);  // ali hamza jack

// 👉 2. The Map() : map() is very much similar to .forEach() method, except, instead of returning items out of the array, it return the array itself

const numbers = [2, 4, 6, 8];
// const square = numbers.map(myFunc);  // [ 4, 16, 36, 64 ]

function myFunc(x) {
    return x * x;
}

// Map Polyfills

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }

    return result;
}

console.log(numbers.myMap(myFunc));  // [ 4, 16, 36, 64 ]


//👉 3. The filter() : filter() decide what kind of items do we want in the resulting array.
const mynum = [1, 2, 3, 4, 5, 6];

// Filter for even numbers
const evenNumbers = mynum.filter(isEvenCallback);
// console.log(evenNumbers) // 2,4,6

function isEvenCallback(x) {
    if (x % 2 == 0) {
        return x;
    }

}


// Filter Polyfills
Array.prototype.myFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        isEvenCallback(this[i]) ? result.push(this[i]) : null;
    }

    return result;
}

console.log(mynum.myFilter(isEvenCallback));  // 2,4,6


// 👉 4. The reduce() : reduce() method reduces the array to a single value.

const sumNumbers = [];

// Summing all elements in the array
const sum = sumNumbers.reduce(sumCallback, 0);

function sumCallback(accumulator, currentValue, currentIndex, array) {
    // console.log(accumulator, currentValue);
    return accumulator + currentValue
}

console.log(sum); // Output: 15

// Reduce Polyfills

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue, use first element
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;

}

console.log(sumNumbers.myReduce(sumCallback, 0)) 

// 5. Call method: The call() method calls a function with a given this value and arguments provided individually.

    function greet(city, country) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}, ${country}.`);
    }

    const person1 = {
    name: "Alice"
    };

    const person2 = {
    name: "Bob"
    };

    // greet.call(person1, "London", "UK"); // Output: Hello, my name is Alice and I live in London, UK.


    // Call Polyfill
    Function.prototype.myCall = function( thisObject , ...args)  // function(person1 , args = [london, uk])
    {
        console.log(this); // greet function
        console.log(thisObject); // person1 object

        if(typeof this  !== 'function')
        {
            throw new TypeError(this + " is not a function ");
        }

        thisObject.fnc = this ;
        thisObject.fnc(...args); // thisObject.fnc("London", "UK");

        delete thisObject.fnc; // cleaning up the added property
    }

    // greet.myCall(person1, "London", "UK"); // Output: Hello, my name is Alice and I live in London, UK.

    // Code Improvement in Call , Apply & Bind- 
    // 1. Code needs few Improvement where we could better handle the edge cases like - being an object if we trying to add fnc as key in thisObject there could be a chance that this key already exist in the object so we need to handle that case as well. which you can do with Symbol as key.
    // 2. Clean the added property from object. 


// 6. Apply method: The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    
    // Apply Polyfill
    Function.prototype.myApply = function( thisObject , args)  // function(person1 , args = [london, uk])
        {
            console.log(this); // greet function
            console.log(thisObject); // person1 object

            if(typeof this  !== 'function')
            {
                throw new TypeError(this + " is not a function ");
            }
        if(Array.isArray(args) == false)    // checks if args are array or not
        {
            throw new TypeError("Pass an array of arguments ");
        }
            thisObject.fnc = this ;
            thisObject.fnc(...args); // thisObject.fnc("London", "UK");
        }

    // greet.myApply(person2, ["London", "UK"]);

// 7. Bind method: The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

    function greet(city, country, age) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}, ${country}. My age is ${age}`);
    }


    const boundGreet = greet.bind(person1, "New York", "USA");
    // boundGreet(); // Output: Hello, my name is Alice and I live in New York, USA.

    // Bind Polyfill

    Function.prototype.myBind = function( thisObject , ...args1) 
    {
        if(typeof this !== 'function')
        {
            throw new TypeError(this + " is not a function ");
        }
        thisObject.fnc = this ;
        return function(...args2)
        { 
            return thisObject.fnc(...args1 , ...args2);

        }

    }

    const boundGreet2 = greet.myBind(person2, "New York", "USA");
    boundGreet2(24); // Output: Hello, my name is Bob and I live in New York, USA.




//8. Promise.all() Polyfills
    function task(taskName, delay, isCompleted)
    {
        return new Promise((resolve, reject)=>{
            
            setTimeout(()=>{
                if(isCompleted)
                    {
                        resolve(taskName + "✅") ;
                    }
                else
                    {
                        reject('Rejected : ' + taskName + '❌') ;
                    }    
            },delay)
        })
    }

    const putPan = task('Get water and Start Adding Water in pan',10000,true);
    const addWater = task('Boiling water add Tea, ginger', 2000, true);
    const addTea = task('Added tea , ginger ',300, true);
    const addSugar = task('Added Sugar let them Boil',600, true);

    
    Promise.myAll =  function(promises)
    {
        return new Promise((resolve, reject)=>{
        let result =  []
        let completed  = 0;

        if(! promises.length)
        {
            resolve([]);
        }
            promises.forEach((item , index)=>{

            item.then((resolved) => {
                result[index] = resolved ;
                completed ++;

                if(completed == promises.length)
                {
                    resolve(result);
                }
            }).catch((err)=>{
                reject(err);
            })

        })

        return result;
        })
       
    }


    Promise.myAll([putPan, addWater, addTea, addSugar])
    .then((data)=>{
        console.log(data)
    }).catch(e=>{
        console.log(e)
    })

//8. Promise.allSettled() Polyfill

     Promise.myAllSettled =  function(promises)
    {
        return new Promise((resolve, reject)=>{
        let result =  []
        let completed  = 0;

        if(! promises.length)
        {
            resolve([]);
        }
            promises.forEach((item , index)=>{

            item.then((resolved) => {
                result[index] = {status : "fulfilled" , value : resolved } ;
                completed ++;

                if(completed == promises.length)
                {
                    resolve(result);
                }
            }).catch((err)=>{
                result[index] = {status : "Rejected" , Reason : reject} ;
            })
        })

        return result;
        })
       
    }


    Promise.myAllSettled([putPan, addWater, addTea, addSugar])
    .then((data)=>{
        console.log(data)
    }).catch(e=>{
        console.log(e)
    })