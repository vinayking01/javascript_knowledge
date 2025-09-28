
var myName = "Vinay Singh"
// var 1myName =  "Vinay Singh" give you error Invalid variable name
var $Name = "Vianay Si gh"
var __Name =  "ViinaySIngh"
console.log(myName)
// console.log(1myName);
console.log($Name);
console.log(__Name);

var num = 22;
var num1 = true;
console.log(typeof(myName)); //String
console.log(typeof(num));  // number
console.log(typeof(num1)); //boolean
console.log(typeof("What is the Water")); // string

console.log(10+32) // 42
console.log(10 + '32')    // in case of '+ ' what it does is concatenate if one operand is string. ( Aisa isliye hai kyuki '+' operator string concatenation ke liye bhi use hota hai. Jab ek operand string hota hai, to JavaScript doosre operand ko bhi string mein convert kar deta hai aur dono strings ko jod deta hai. isiliye 10 + '32' ka result '1032' hota hai, jo ki ek string hai. )
console.log(10- '4')   // Type coercion property - it is bug, in case of '- ' what it does is subtract it . if one of the operand is Number . ( Aisa isliye hai kyuki '-' operator sirf mathematical subtraction ke liye use hota hai. Jab ek operand string hota hai jo ki ek valid number represent karta hai (jaise '4'), to JavaScript us string ko number mein convert kar deta hai aur phir subtraction perform karta hai. isiliye 10 - '4' ka result 6 hota hai, jo ki ek number hai. )
console.log(10- '4s')   // it will give you NaN (Not a Number) ( Aisa isliye hai kyuki '4s' ek valid number nahi hai. Jab JavaScript is string ko number mein convert karne ki koshish karta hai, to wo conversion fail ho jata hai aur result NaN (Not a Number) hota hai. NaN ka matlab hai ki jo operation hum perform kar rahe hain, wo ek valid number result nahi de sakta. )
console.log(10+"Hellow") // string 
console.log('12' + '21') //string
console.log("212"+"23323")
console.log('        ' + "Hellos")
console.log("vinod " - "thanpa ")
console.log(true + false)  //number
console.log(false - true)  // number
console.log(false - false)  // number
console.log(false - 1)   // number

console.log(" Checking the Tyep of Funciton ")
console.log(typeof(10+32));  // number
console.log(typeof(10 - '4'));  // number
console.log(typeof(10 - '4ssasasa')); // number
console.log(typeof(10 + '32')); // string
console.log(typeof(10+"Hellow")); // string
console.log(typeof('12' + '21')) // string
console.log(typeof("212"+"23323"))  // string
console.log(typeof(false + true)) // number
console.log(typeof(false -1)); // number

//Question  - Null vs Undefined ?
   // Undefined is simply means we  have not intialized yet . whereas in NULL it means we have not the data so we put there null .
var iAmUseless =  null
console.log(typeof(iAmUseless)) // 2nd bug- it is bug because it is data type showing object ( Aisa isliye hai kyuki JavaScript ke jo hai c aur c++ ka use karke banaya gaya hai, aur c mein null ko object ke roop mein treat kiya jata hai. isiliye JavaScript mein bhi null ka type "object" return karta hai. ye ek purana bug hai jo abhi tak JavaScript mein bana hua hai. )

var iAmStandby;
console.log(typeof(iAmStandby))   //type - undefined




/*
 # Whole Lecture Concepts #


-------------------------------------------
    JavaScript Variable Naming Rules
-------------------------------------------
- Valid Variable Names:
  ✅ Can contain letters, digits, $, and _
  ✅ Must start with a letter, _ , or $ (e.g., myName, $Name, __Name)
  
- Invalid Variable Names:
  ❌ Cannot start with a number (e.g., 1myName)

-------------------------------------------
    JavaScript Type Coercion Rules
-------------------------------------------
Type coercion is JavaScript's way of automatically converting one data type into another when performing operations.

-------------------------------------------
    Key Takeaways on Type Coercion
-------------------------------------------
✅ '+' Operator: If one operand is a string, concatenation happens.
✅ '-', '*', '/' Operators: Force type conversion to number if possible.
✅ If conversion is not possible, result is NaN.
✅ Boolean Coercion: true → 1, false → 0 in mathematical operations.

-------------------------------------------
    Null vs Undefined
-------------------------------------------
- Undefined: A variable is declared but has not been initialized.
- Null: Explicitly assigned value representing no data.
- Bug: typeof(null) returns "object" instead of "null".


*/
