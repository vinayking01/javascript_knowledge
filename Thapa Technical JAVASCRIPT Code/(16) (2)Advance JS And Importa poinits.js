// Advance Java Script 

/* 1️⃣. Event Propogation  -  It define in which order the element revies events. it is only seen when parent and child bothe have some events defined. By deafult it is always buuble phase.
There are two phases or order in which it works
   (A) Bubble Phase- starts with bottom most element to top. eg - flows goes to child to parent
   (B) Capture Phase - Starts with Topmost element to bottom. eg- flows goes to parent to child . It can be achieved only with addeventListner method no other event calling ways.

*/
    function box1()
    {
        alert("Box1 function");
        console.log("Box1 function call");
    }
    function box2()
    {
        alert("Box2 function");
        console.log("Box2 function call");
    }
    function box3()
    {
        alert("Box3 function");
        console.log("Box3 function call");
    }


    // event bubbling take place here and it doesn't matter which is written when it is will starts from innermost child to topmost child.It doesn't matter how you use events calling whether inline or not etc.
    document.getElementById("box2").addEventListener("click",box2);
    document.getElementById("box1").addEventListener("click",box1);
    document.getElementById("box3").addEventListener("click",box3);

    // For capturing phase top to bottom. you have to use third argument boolean value here which changes the flow.
    // document.getElementById("box2").addEventListener("click",box2,true);
    // document.getElementById("box1").addEventListener("click",box1,true);
    // document.getElementById("box3").addEventListener("click",box3,true);

    // document.getElementById("box2").onclick = box2;
    // document.getElementById("box1").onclick = box3;
    // document.getElementById("box3").onclick = box1;

    // 2️⃣: Higher Order Function
    // function which takes another function as an arguments is called HOF 
    // wo function jo dusre function ko as an argument accept krta hai use HOF 
    
    
    // 3️⃣: Callback Function
        // function which get passed as an argument to another function is called CBF 
        // A callback function is a function that is passed as an argument to  another function, to be “called back” at a later time. 

        // Jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum CallBack fun bolte hai 


        // // // we need to create a calculator 

            const add = (a,b) => {
                return a+b;
            }
            console.log(add(5,2));

            const subs = (a,b) => {
                return Math.abs(a-b);
            }
            const mult = (a,b) => {
                return a*b;
            }

            const calculator = (num1,num2, operator) => {
            return operator(num1,num2);
            }

            calculator(5,2,subs)

            console.log(calculator(5,2,subs));

        // I have to do the hardcoded for each operation which is bad
        // we will use the callback and the HOF to make it simple to use 
        
        // Now instead of calling each function indivisually we can call it
        // by simply using one function that is calculator 

            console.log(calculator(5,6,add));
            console.log(calculator(5,6,subs));
            console.log(calculator(5,6,mult));

    // In the above example, calculator is the higher-order function, 
    // which accepts three arguments, the third one being the callback.
    // Here the calculator is called the Higher Order Function because it takes
    // another function as an argument and add, sub and mult are called the callback function bcz they are passed  as an argument to another fucntion 


    // 1️⃣ 👉👉 InterView Question 
    // Difference Between Higher Order Function and Callback Function ?

    // 5️⃣ Hoisting in JavaScript 

    /* we have a creation phase and execution phase.
    Hoisting in Javascript is a mechanism where variables and functions . declarations are moved to the top of their scope before the code execute but not work for function expression. var is hoisted but not with setting vlaues (automatic intialized with undefined), let and var does not support .


        For Example 👇
        console.log(myName);
        let myName;
        myName = "thapa";

      How it will be in output during creation phase 

        1: var myName = undefined;
        2: console.log(myName);
        3: myName = "thapa";
    😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
    */
        
    // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 
        // Lexical Scoping means Now, the inner function can get access to their parent functions variables But the vice-versa is not true.
