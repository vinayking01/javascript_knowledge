
var num1 = document.getElementById("one").innerHTML;
var num2 = document.getElementById("two").innerHTML;
var num3 = document.getElementById("three").innerHTML;
var num4 = document.getElementById("four").innerHTML;
var num5 = document.getElementById("five").innerHTML;
var num6 = document.getElementById("six").innerHTML;
var num7 = document.getElementById("seven").innerHTML;
var num8 = document.getElementById("eight").innerHTML;
var num9 = document.getElementById("nine").innerHTML;
var  zero= document.getElementById("zero").innerHTML;
// console.log(num1)

var number1 = undefined;
var number2 = undefined;
var operator = undefined;
var result = null;
var k;
function myfunc(k)
{   
    // if(operator !=undefined && number1 !=undefined  && number2!=undefined)
    // {
    //     result = eval(number1 +operator + number2);
    //     document.getElementById("output").innerHTML = result;
    //     console.log(result);
    //     return;
    // }
    if(operator == undefined )
    {
        if(number1 == undefined)
        {
            // console.log("number 1 "+ k);
            number1 = k;
            document.getElementById("output").innerHTML = number1;
            return;
        }
        // if(result != undefined)
        // {
        //     number1 = result;
        //     return;
        // }
        number1 += String(k);
        document.getElementById("output").innerHTML = number1;

    }
    else
    {
        if(number2 == undefined)
        {
            number2 = k;
            document.getElementById("output").innerHTML = number2;
            return;
        }
        number2 += String(k);
        document.getElementById("output").innerHTML = number2;
    }

}
var sign = undefined;
document.getElementById("sign").onclick = ()=>{
    console.log(2323);
    if(document.getElementById("output").innerText!="")
    {
        if(number1!=undefined && operator == undefined)
        {
            number1= eval(number1 * (-1));
            document.getElementById("output").innerHTML = number1;
        }
        else
        {
            number2= eval(number2 * (-1));
            document.getElementById("output").innerHTML = number2;
        }
        
    }
}
document.getElementById("per").onclick = ()=>{
    var value = document.getElementById("output").innerHTML;
    // console.log(value);
    if(value !="")
    {   result = eval(String(value)/100);
        document.getElementById("output").innerHTML = result;
    }
    number1 = result;
    operator= undefined;
    number2 = undefined;
}
document.getElementById("Div").onclick = ()=>{
    if(number1 == undefined)
    {   return;
    }
    operator = document.getElementById("Div").innerHTML;
    document.getElementById("output").innerHTML = operator;
}
document.getElementById("Add").onclick = ()=>{

    if(number1 == undefined)
    {   return;
    }
    operator = document.getElementById("Add").innerHTML;
    document.getElementById("output").innerHTML = operator;
}
document.getElementById("Multi").onclick = ()=>{

    if(number1 == undefined)
    {   return;
    }
    operator = document.getElementById("Multi").innerHTML;
    document.getElementById("output").innerHTML = operator;
}
document.getElementById("Sub").onclick = ()=>{
    if(number1 == undefined)
    {   return;
    }
    operator = document.getElementById("Sub").innerHTML;
    document.getElementById("output").innerHTML = operator;
}
document.getElementById("Equal").onclick = ()=>{
    if(number1 == undefined)
    {   return;
    }
    result = eval(number1 +""+String(operator)+""+number2);
    document.getElementById("output").innerHTML = result;    
 
    console.log("Number 1  "+ number1);
    console.log("Number 2  "+ number2);
    console.log("Result    " + result);
    number1 = result;
    operator= undefined;
    number2 = undefined;
}
document.getElementById("Clear").onclick = ()=>{
    document.getElementById("output").innerHTML = "";
    number1 = undefined;
    number2 =undefined;
    operator = undefined;
}
var dot_used = false;
document.getElementById("dot").onclick = ()=>{
    if(number1!=undefined && operator ==undefined)
    {
        var f = String(number1);
        if(f.includes('.') == false)
        {number1 = number1 + String('.');
        document.getElementById("output").innerHTML = number1;
        }
    }
    else if(number2!= undefined && operator !=undefined && dot_used == false)
    {   var f = String(number2);
        if(f.includes('.') == false)
        {number2 = number2 + String('.');
        document.getElementById('output').innerHTML = number2;
        }
    }
    
}

