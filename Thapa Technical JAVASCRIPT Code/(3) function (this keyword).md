## Definition

This - In JavaScript, the this keyword refers to the object it belongs to. However, its value can change depending on how and where a function is called

### 1. In a Method: When a function is called as a method of an object (e.g., obj.myMethod()), this refers to the object itself (obj in this case)
- When used in an object method, this refers to the object.
    ``` jsx
    const obj2 = {
    name: 'Object',
    showName() {
        console.log(this.name); // 'this' refers to obj2
    }
    };

    obj.showName(); // Logs: 'Object'
    ```
### 2. Global : When this is used outside any function or object, it refers to the global object. In browsers, this is usually the window object. In Node.js, it's the global object.
- When used alone in global space, this refers to the global object (window in browsers, global in Node.js). In strict mode, this is undefined.

    ``` jsx
    console.log(this); // Logs: global object or undefined in strict mode
    ```
### 3. In a Function: If a function is called plainly (not as a property of an object), then no matter how deeply nested inside other functions it is, JavaScript falls back to default binding, so this → window (non–strict mode)  & undefined (strict mode)
- In a regular function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
    ``` jsx

    // Example 1 : 
    function showThis() {
    console.log(this); // Logs: global object or undefined in strict mode
    }

    showThis();

    // Example 2: 

        function f() {
    console.log(this);
    }

    function level1() {
    function level2() {
        function level3() {
        f();   // plain call
        }
        level3();
    }
    level2();
    }

    level1();  // Output - Global
    ```
### 4. In an Event Handler:
- When used in an event handler, this refers to the element that received the event.
    ```
    <button onclick="console.log(this)">Click me</button>
    ```

### 5. In a Constructor:
- In a constructor function or class, this refers to the newly created instance.
    ``` jsx
    class MyClass {
    constructor(name) {
        this.name = name;
    }
    
    showName() {
        console.log(this.name); // 'this' refers to the instance of MyClass
    }
    }

    const myInstance = new MyClass('Instance');
    myInstance.showName(); // Logs: 'Instance'
    ```

### 6. In Arrow Functions:
- Arrow functions do not have their own this binding. Instead, they inherit this from the enclosing scope where they are defined. This means that this inside an arrow function will refer to the same this as the surrounding code.
- ✅ Key Rule: Objects do not create lexical scopes in JavaScript.
Lexical scope is created by: Functions, Blocks ({ ... }), Modules, Global scope

    ``` jsx
    const obj = {    // isme confuse mat hone kuki obj ek data type hai, & object ka koi lexical scope nahi hota hai isiliye jab kheta hai ki parent se leta hai toh is case me bahar hi chla jayega outer scope which is global context uska concept apply hoga.
    name: 'Object',
    showName: () => {
        console.log(this.name); // 'this' refers to the parent scope, not obj
    }
    };

    obj.showName(); // Logs: undefined (or global object property if not in strict mode)
    ```

- ✅ Fix if you want this to refer to obj:
    ``` jsx
    const obj = {
    name: 'Object',
    showName() {
        console.log(this.name); // ✅ refers to obj
    }
    };

    obj.showName() ; // "Call showName, but do it from obj. So JavaScript sets this inside showName to refer to obj.

    ```




❓ If an object doesn't create lexical scope, then its properties should be available globally, right?
✅ Short answer: No —  Because lexical scope and object property access are two very different concepts in JavaScript.



### 7. Arrow Functions in Class Methods
- Arrow functions do not have their own this binding. Instead, they inherit this from the enclosing lexical context. This behavior is useful when you need to preserve the context of this inside a callback function.

    ``` jsx
    class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        setTimeout(() => {
        this.count++;
        console.log(this.count); // 'this' refers to the instance of Counter
        }, 1000);
    }
    }

    const myCounter = new Counter();
    myCounter.increment(); // After 1 second, logs: 1
    ```

### 8. Depends on How function is called

function x()
{
    console.log(this);
}

x()   // window

window.x() // window Object

### 9. Let and Var variables with this

``` jsx
let b = 2;
var c = 3;
console.log(this.b); // undefined : - let / const (global scope): Do not attach to window.
console.log(this.c); // 3  

```
