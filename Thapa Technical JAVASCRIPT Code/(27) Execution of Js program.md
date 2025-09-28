
# 🚀 JavaScript Execution Flow & Single-Threaded Nature  

JavaScript is **single-threaded**, meaning it executes **one task at a time** in a **single Call Stack**.So is pure synchronous. However, it efficiently manages asynchronous tasks using **Web APIs, Event Loop, and Callback Queue**. These all async task abilities come from the environment where JS runs: Browser APIs (in Chrome, Firefox, etc.), Node.js APIs (in backend). So we can say that JS using browser feature to perform task async.

This document explains **how JavaScript executes code**, covering key topics like **Execution Context, Memory Management, Call Stack, Event Loop, Web APIs, and the Starvation Problem**.

---

## 📌 1. JavaScript Execution Context  

When JavaScript code runs, it first **creates an Execution Context**, which defines **how the code is executed**.  

### 🔹 Types of Execution Contexts  
1. **Global Execution Context (GEC)**  
   - Created when a JavaScript file starts execution.  
   - Stores global variables and functions.  
   - There is only **one GEC** in the program.  

2. **Function Execution Context (FEC)**  
   - Created when a function is invoked.  
   - Each function call creates a new Execution Context.  

---

## 📌 2. Phases of Execution Context Creation  

Each Execution Context (Global or Function) goes through **two main phases**:  

### 🛠️ **Phase 1: Memory Allocation (Creation Phase)**  
- **Variables** are assigned `undefined`.  
- **Functions** store their full definition.  
- **Objects, arrays, and functions** are stored in **Heap Memory**, with references in the Stack.  

### ⚡ **Phase 2: Code Execution (Execution Phase)**  
- JavaScript **executes code line by line** using the **Call Stack**.  
- Variables are assigned actual values.  
- Function calls create new **Execution Contexts**.  

```js
console.log(x);  // undefined (Memory Phase)
var x = 10;
console.log(x);  // 10 (Execution Phase)

function greet() {
  console.log("Hello");
}
greet(); // "Hello"
```

---

## 📌 3. Call Stack – How JavaScript Executes Code  

The Call Stack is a data structure used to keep track of function calls in JavaScript.

### 🔹 How the Call Stack Works  
1. Global Execution Context (GEC) is pushed into the Call Stack when the script starts.
2. When a function is called:
   - A new Execution Context is pushed onto the Call Stack.
3. When a function finishes execution:
   - Its Execution Context is popped off from the Call Stack.
4. The process continues until the Call Stack is empty.

```js
function first() {
  console.log("First");
  second();
}
function second() {
  console.log("Second");
}
first();
```

### Call Stack Process:
1. `first()` → New Execution Context added.
2. `console.log("First")` executes.
3. `second()` → New Execution Context added.
4. `console.log("Second")` executes.
5. `second()` finishes → Execution Context removed.
6. `first()` finishes → Execution Context removed.

---

## 📌 4. Memory Management: Stack vs Heap  

JavaScript uses two memory types:

### 🔹 Stack Memory  
- Stores **primitive data types** (numbers, strings, booleans, etc.).  
- Stores function execution contexts.  

### 🔹 Heap Memory  
- Stores **non-primitive data types** (objects, arrays, functions).  
- Objects are stored in the Heap, while their references are kept in the Stack.  

```js
let a = 10; // Stored in Stack
let obj = { name: "John" }; // Object stored in Heap, reference in Stack

let b = a; // Copy of value is created
let obj2 = obj; // Reference is copied, both point to same Heap memory
```

---

## 📌 5. How JavaScript Handles Asynchronous Code  

JavaScript is single-threaded, but it can handle asynchronous operations using **Web APIs, Callback Queue, and Event Loop**. This are browser provided feature not available not in js .

### 🔹 How Asynchronous Code Works  
1. Web APIs passed these various tasks like `setTimeout()`, `fetch()`, DOM events, event handlers, etc. if found in code in WEB APIs section and continue their previous code back.
2. Once completed these task completed in WEB APIS, the callback moves to the **Task Queue**. There are multiple Queues.
3. Then **Event Loop** comes in picture which checks if the Call Stack is empty or not. If empty, the task from queue is pushed to the Call Stack for execution. otherwise wait for empty stack.

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);

console.log("End");
```

### Execution Order:
1. "Start" is logged.
2. "End" is logged.
3. After 1 second, "Inside setTimeout" is logged.

---

## 📌 6. Microtasks vs Macrotasks in Event Loop  

JavaScript uses two types of tasks:

- **Microtasks (Higher Priority)** → `Promise.then()`, `MutationObserver`
- **Macrotasks (Lower Priority)** → `setTimeout()`, `setInterval()`, `fetch()`

Microtasks execute before Macrotasks when the Call Stack is empty.

```js
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

### Execution Order:
1. "Start" is logged.
2. "End" is logged.
3. Promise callback (Microtask) executes before setTimeout (Macrotask).
4. "Promise" is logged.
5. "setTimeout" is logged.

---

## 📌 7. 🔄 What is the Event Loop?
- The Event Loop is the mechanism that lets JavaScript (which is single-threaded) handle asynchronous operations like timers, network requests, and user events without blocking execution by passing it from queues.
- 👉 The Event Loop is not part of core JavaScript (the language). It’s a runtime feature provided by the host environment:

## 📌 8. Starvation Problem in JavaScript  

### 🔹 What is the Starvation Problem?  
Starvation happens when **low-priority tasks** are never executed because **high-priority tasks** keep running.

- In JavaScript, **Microtasks (Promises)** have higher priority than **Macrotasks (setTimeout, fetch)**.
- If Microtasks keep adding more Microtasks, Macrotasks might never execute, causing **starvation**.


### 🔹 Example of Starvation  

```js
setTimeout(() => console.log("Macrotask"), 0);

function recursiveMicrotask() {
  Promise.resolve().then(() => {
    console.log("Microtask");
    recursiveMicrotask();
  });
}

recursiveMicrotask();
```

### 🛑 Explanation:
- The recursive function keeps adding **Microtasks** indefinitely.
- Since **Microtasks** run before **Macrotasks**, `setTimeout()` never gets a chance to execute.
- This causes **Starvation of the Macrotask**.

---

## 🎯 Final Understanding ✅  

| Concept                 | Description |
|-------------------------|-------------|
| Execution Context       | Handles how JavaScript code runs (Global & Function Contexts). |
| Memory Phase           | Stores variables (`undefined`) and function definitions. |
| Execution Phase        | Executes code line by line using the Call Stack. |
| Call Stack            | Keeps track of function calls and execution order. |
| Heap Memory           | Stores objects, arrays, and functions. |
| Web APIs              | Handle async operations like `setTimeout`, `fetch`, event listeners. |
| Event Loop            | Moves completed tasks from Callback Queue to Call Stack. |
| Microtasks vs Macrotasks | Microtasks (`Promises`) execute before Macrotasks (`setTimeout`, `fetch`). |
| Starvation Problem    | If Microtasks keep running indefinitely, Macrotasks might never execute. |


<!-- 1.https://www.youtube.com/watch?v=gPKzwAORly8  -->
<!-- 2. https://www.youtube.com/watch?v=fFd8OhrHfIM -->
<!-- To actually heck how works try in this website - https://www.jsv9000.app/  -->



## Execution context Based Question 
  - Question 1 :
    ```jsx

    console.log(1);

    function show() {
      console.log(1 + " Inside");
     show();
      console.log(1 + " Ending");
    }

    console.log(2 + " Outside");
    show();
    
    Output -  ❌ Result - RangeError: Maximum call stack size exceeded
  
    ```
    - The previous context is still alive (waiting for its inner call to finish).
    - So new contexts keep piling up → stack overflow.

  - Question 2: 
    ``` jsx

    console.log(1);

    function show() {
      console.log(1 + " Inside");
      setTimeout(show, 0);
      console.log(1 + " Ending");
    }

    console.log(2 + " Outside");
    show();
    
    Output - 
    1
    2 Outside
    1 Inside
    1 Ending
    1 Inside
    1 Ending
    .
    .
    .
    
    ```
    - why memory doesn’t blow up ?
        - When show() runs → it creates a new Execution Context.
        - After finishing all lines inside it (console.log + scheduling timeout), its context is popped off the Call Stack.
        - Later, when the event loop picks the setTimeout callback, a new Execution Context for show is created.
        - Old one is gone. 


### Blog link-  [The JavaScript Execution Context, Call-stack & Event Loop ](https://dev.to/thebabscraig/the-javascript-execution-context-call-stack-event-loop-1if1)