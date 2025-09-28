## Scope based Question

1. Let Variables with Loops

    ``` jsx
    for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 100);
    }

    // First thing is for loop har iteration me variable ko redeclare krta hai aur puran in value throw away krta hai. Acha jab hum let variable declare karenge and sath me settimeout raheyga toh wo hamari lexical scope ke according always new i ki value ke sath attach hai 10 times. After 100 ms sari calls one by one execute ho jayengi.

    ```

    ``` jsx
    // Js engine when see let is used in our function it starts creating new copy for each loop to maintain its block scope.

    {
    let i = 0; console.log(i);
    }
    {
    let i = 1; console.log(i);
    }

    // let is block scoped → each iteration of the loop gets its own copy of i in each loop.
    ```


2. Var Variables with Loop

    ``` jsx

    for (var i = 0; i < 3; i++) {
    console.log(i);
    }


    // Js engine rewrites when its see the var is used in the loop. it conceptually looks like below code :
    //  tha's the reason in var case multiple times new copy is not created in each loop just like let.

    var i;               // declare once, hoisted
    i = 0;
    while (i < 3) {
    console.log(i);
    i++;
    }

    // 👉 Notice:
    // var i is declared only once, outside the loop body.
    // Each iteration just updates the same i, not a fresh copy.
    ```

3. IIFE inside Loop

  ``` js

  for (var i = 0; i < 3; i++) {
    (function(copy) {
      setTimeout(function() {
        console.log(copy);
      }, 100);
    })(i); // pass current i immediately
  }

  // Output  -  0,1,2

  ```

4. This Operator Based Question.
  - Question 1 :
    ``` jsx 
        const obj = {
          fruit: 'Mango',
          fn: function () {
            console.log(this.fruit);  // it returns undefined
          }
        };

        setTimeout(obj.fn, 100);

        //obj.fn is a method on the object
        // normally if we call obj.fn(); -> // ✅ "Mango"
        //But when we d0 setTimeout(obj.fn, 100); -> You’re passing the function reference obj.fn to setTimeout. setTimeout will later call it like a regular function, not as obj.fn(). Also this method inside object so don't have any closure things here. so its reference passed is treated as normal function call.

    ```
 - Question 2 :
    ```  jsx 

    const object = {
      message: "Hello, World!",
      getMessage() {
        const message = "Hello, Earth!";
        return this.message;
      },
    };

    console.log(object.getMessage()); // "Hello, World!" ✅


    ```

 - Question 3:  
      ```  jsx 

      const obj = {
        fruit: 'Mango',
        fn: function () {
          console.log(this.fruit);  // it returns mango
        }
      };

      setTimeout(obj.fn(obj).bind(obj), 100);

      // you can bind this function with the object . used bind function because it provide the another function in return otherwise if you use apply and call it will get executed immediately not after 100 ms.

      ```

 - Question 4: 
    ``` jsx

        function Pet(name) {
        this.name = name;
        this.getName = () => this.name;
      }

      const cat = new Pet("Fluffy");
      console.log(cat.getName()); // "Fluffy" ✅

      const { getName } = cat;
      console.log(getName());     // "Fluffy" ✅

        
    ```

 - Question 5:
    ``` jsx

      const object = {
        message: "Hello!",
        logMessage() {
          console.log(this.message);
        }
      };

      setTimeout(object.logMessage, 1000); // undefined ❌

    ```

  - Question 6:
    ``` jsx

        const objects = {
          who: "World",
          greet() {
            return `Hello, ${this.who}!`;
          },
          farewell: () => {
            return `Goodbye, ${this.who}!`;
          },
        };

        console.log(objects.greet());    // "Hello, World!" ✅
        console.log(objects.farewell()); // "Goodbye, undefined!" ✅
    ```

  - Question 7:
    ``` jsx

        const user = {
          name: "John",
          childObj: {
            newName: "Noren Red",
            getDetails() {
              console.log(this.newName, "and", this.name);
            }
          }
        };

        user.childObj.getDetails(); // "Noren Red and undefined" ✅

      
    ```

5. Constructor Function

``` js
  function Car2() { 
      this.make = 'Lamborghini';
      return { make: 'Maserati' }; // override done as you are passing your object now
      }
      const myCar2 = new Car2() ;
      console.log(myCar2.make); // Maserati

```


