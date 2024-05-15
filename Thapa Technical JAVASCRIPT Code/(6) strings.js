 // Methods for String 

/* what we will do 
 1. Escape character
 2. Findinig a string in a string
 3. Searching for string in a string
 4. Extracting string parts
 5. Replacing string content
 6. Extracting string characters.
 7. Other useful methods.

*/

// strings can be created as primitives from string literals, or as objects using the string () constructor 

let myName  = 'Vinode thapa Vinode javascript course is good u'
let myChannelName = "Vinod "

let myname  = new String("Vinay Singh") // using constructor
/*
console.log(myname,myChannelName);

// 1. Length() - used to find the length of the fucntion

console.log("the length is " +myName.length);

// 2. Indexof()  -

console.log(myName.indexOf('Vinod'));
console.log(myName.indexOf('Vinod',2)); // search forward from that index 

// 3. LastIndexof() - same method as in as array

console.log(myName.lastIndexOf('Vinode',14));

// 4. Search() - nothing differnce same as indexof function
var t = myName.search('Vinode'); 
console.log(t);


*/

 //5. Extracting String Parts - there are three ways to do that
//  (a) Slice( start,end) - it will give you the substring which start from given index but end at before the given endindex. It support negative indices.

console.log(myName.slice(2,8));
console.log(myName.slice(-8));
//  (b) substring ( start,end) - it support negative indices
console.log(myName.substring(2,8));
// (c) substr(start,end) - it only differnce it uses length not end index .it start counting from start index.
console.log(myName.substr(2,8));

// 6. Replace() - it replace the string. It does not change the orignal array instead it create new by replacing that string. 
console.log(myName);
var Replace_result = myName.replace('Vinode','de');
console.log(Replace_result);

//7. CharAt() - it returns the character at the specified index.
console.log(myName.charAt(4));

//8. CharCodeAt() - it returns the unicode of the specified character at specified index. it returns the UTF -16 code.
console.log(myName.charCodeAt(0));


// 9. concat()  - it concatinate the string and returns new string.
var a  = " My name is thapa the Thapa"
var b  = "  Bye Bye"

console.log(a.concat(b));
console.log(a.concat(" Middle string ",b));

//10.  trim() - it removes the white spaces from both the sides of string.)
p  = "      hello world     ";
console.log(p);
console.log(p.trim())

//11. split( ) - it splits the string and returns the array.)

var fake_data =  "aa dss sd ,dssd sdsd | dssdsds, dsdsd sdds ds & dsddssf dsdss";
console.log("1st array - "+ fake_data.split(" "));
console.log(" 2nd array - "+ fake_data.split(","));
console.log("3rd array - " + fake_data.split("&"));
console.log("4th array " + fake_data.split("&"));

