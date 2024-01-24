// Time intervals - The timing events allows the execution of a piece of code at specific time interval. These events/methods are directly available in the DOM Window object.
// In case of SetInterval() They contiously call the function after specific interval of time until they are stopped using the ClearInterval.

// 1. setTimeout() - The 'setTimeout()' method is used to execute a piece of code after a certain amount of time. The piece of code is usually written inside a function.

// 2. setInterval() -The 'setInterval()' method is used to execute a piece of code repeatedly with a fixed time interval between each call.

//3. clearTimeout() - The 'clearTimeout()' method is used to cancel a timeout established using 'setTimeout()' method.

// 4. 4. clearInterval() - The 'clearInterval()' method is used to cancel the repeating timed action established using 'setInterval()' 

var cnt  = 1;
function Hello()
{
    console.log("Hello "+ (cnt++) );
    if(cnt == 5)
    {
        // stop 
        clearInterval(id);  // here you can ask is How id here got which is later defined this function. actually the setinterval runs parllely.
    }
}

 clearInterval(id);
var id = setInterval(Hello,1000); //It s=execution start as code starts running. ye parllely chalti hai along with code . It doesn't mean ki phele ye puri line excecute kr le fir niche ke code pe jayega no that is not . How it works.

console.log(id);
setTimeout(Hello,3000); 
console.log("Helow Everyone w=how are you?")

