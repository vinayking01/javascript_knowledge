// Advance Java Script 

/* 1. Event Propogation  -  It define in which order the element revies events. it is only seen when parent and child bothe have some events defined. By deafult it is always buuble phase.
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
    // document.getElementById("box2").addEventListener("click",box2);
    // document.getElementById("box1").addEventListener("click",box1);
    // document.getElementById("box3").addEventListener("click",box3);

    // For capturing phase top to bottom. you have to use third argument boolean value here which changes the flow.
    document.getElementById("box2").addEventListener("click",box2,true);
    document.getElementById("box1").addEventListener("click",box1,true);
    document.getElementById("box3").addEventListener("click",box3,true);

    // document.getElementById("box2").onclick = box2;
    // document.getElementById("box1").onclick = box3;
    // document.getElementById("box3").onclick = box1;

