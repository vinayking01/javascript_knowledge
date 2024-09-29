


// 1st update 
/*
let and Var 
 var  ->  function 
 let and const => Block scope
let firstname = "Nikhil"
let lastname = "Maurya"
function address()
{
    var firstname = 7;
     var firstname = "bvu";
    
    if(true)
    {   
        let lastname = "Singh"
    console.log("My first name is " + firstname);

    }

    console.log("My Last name is "+ lastname);
}
address();
lastname= "Asthana"
console.log(firstname);


2nd update . Template String

it is an alternative to use the string concatenation with number or variables which make the code easy to understand

for(let i = 1 ; i<10;i++)
{
    previously we used to write in this way
    console.log("13 * "+i+" = "+ (13*i))

    template literals benefit to write the above code in easy way
    console.log(`${13} * ${1} = ${13*i}`);
}

3rd update . Default Parameter
function  sum(a,b=3)
{
    console.log("sum is " +(a+b));
}

sum(7);

4th update . Arrow functionality and their arrow fat function
one more benefit of use it if the code is only single line then we can return it without using return keyword.

let myFunction = (a, b) => a * b;

console.log(`myfucntion value is ${myFunction(3,6)}`);

let fabrication = () => {
    console.log("HelLo welcome to the fabrication factory");
    console.log('okey bye');

    return 4;
}

console.log(fabrication());

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
Hello  = ()=> "hello world";  // 
console.log(Hello());

*/





