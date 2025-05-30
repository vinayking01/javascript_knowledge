// ES2014

//1. Use strict Mode - when you use this statement before any code in js if it don't follow the standars then it will give error beacuse in some cases js provide flexiblity to use.


        // "use strict"
        a = 9;
        console.log(a);  // it gives error in console beacuse we "use restrict " if we don't use it then it js provide flexibilty to use without any declaration



// ES2019
// 1. faltten functioon in array.
// 2. 

//ES2020
//3. BigInt - adding after any number to hande the big operation/

        var p = Number.MAX_SAFE_INTEGER;

        console.log(p);
        console.log(p * 10000000);
        console.log(9007199254740991n * 10000000n);  // Bigint n

//4. Nullish Coalescing (??) - it is is type of logical operator. The nullish coalescing operator returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand. 

        const price = null;
        var  buy = price ?? 2323;
        console.log(buy); // 2323 
