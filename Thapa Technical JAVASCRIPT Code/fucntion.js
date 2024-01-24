  var a = 2;
  var b = 3;


// Question - fucntion Paramters vs function Arguments?

// Function parameters are those listed names in the fcuntion definition .
// function Arguments are the value we passed to the function.

function hello(a,b) // function parameters
{
    console.log(a+b);
    console.log("How to handle the saitre in better way so that no one get offend")
}

// hello();
hello(30,50);  // function areguments

// Anonymous  fucntion - the function which don't have any name

var answer = function(a, b){
    console.log("the sum is" + a+b);    // Anonymous expression
}


answer(342,2333);


// arrowfat function

var clip = (a)=> {
console.log("thanks "+a )
};

clip(3); // you can't call function without paranthese

