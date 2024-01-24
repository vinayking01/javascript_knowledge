/* 7 Date()  - Date objects are created with the new Date() constructor.
There are 9 ways to create a new date object:
new Date()
new Date(date string)
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
*/

console.log(new Date()); // gives the current date and time
console.log(new Date("2023/03/12")); // it can take date in the form of string.
console.log(new Date(2023,2,12,01,13,50)); // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order): in descending order
//Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
console.log( new Date(98,12,4));//One and two digit years will be interpreted as 19xx:
/* Facts - JavaScript stores dates as number of milliseconds since January 01, 1970.


*/

 //Date methods  - which is used with date constructor 
 // 7. (A) tostring() - it converts the date to string.
console.log(new Date().toString());
console.log(new Date().toLocaleDateString()); // it gives you only date 
console.log(new Date().toLocaleTimeString()); // it gives you only time

// 7. Get Methods - used to pull out the individual data from the date.
d = new Date();
console.log(d.getFullYear());// getFullYear()	Get year as a four digit number (yyyy)

console.log(Date.now()) // gives the millisecond since 1970 ,jan ,01
console.log(d.getMonth())	 // Get month as a number (0-11)
console.log(d.getDate())	//Get day as a number (1-31)
console.log(d.getDay())	//Get weekday as a number (0-6)
console.log(d.getHours())	//Get hour (0-23)
console.log(d.getMinutes())	//Get minute (0-59)
console.log(d.getSeconds())	//Get second (0-59)
console.log(d.getMilliseconds())	//Get millisecond (0-999)
console.log(d.getTime())	//Get time (milliseconds since January 1, 1970)

// 7. (B) - set Methods - used to set the individual data from the date
console.log(d.setFullYear(2023));// getFullYear()	Get year as a four digit number (yyyy)

console.log(d +" after setting 2nd month - "+ d.setMonth(2))	 // set month as a number (0-11)
console.log(d +" --- " + d.setDate(2))	//set day as a number (1-31)
console.log(d +" --- " + d.setHours(30))	//set hour (0-23)
console.log(d +" --- " + d.setMinutes(34))	//set minute (0-59)
console.log(d +" --- " + d.setSeconds(89))	//set second (0-59)
console.log(d +" --- " + d.setMilliseconds(544))	//set millisecond (0-999)
var d = new Date();
d.setMonth(11);
console.log(d);
