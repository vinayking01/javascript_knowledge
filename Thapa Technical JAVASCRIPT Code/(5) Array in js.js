// JavaScript Arrays - Comprehensive Guide

// 1. Creating Arrays
let arr1 = [1, 2, 4, 5,6 ,8]; // Using array literal (recommended)
let arr2 = new Array(5); // Creates an array with 5 empty slots
let arr3 = Array.of(1, 2, 3, 4, 5); // Creates an array from arguments

// 2. Accessing Elements
console.log(arr1[0]); // First element
console.log(arr1[arr1.length - 1]); // Last element

// 3. Adding & Removing Elements
arr1.push(6); // Adds at the end
arr1.unshift(0); // Adds at the beginning
console.log(arr1);

arr1.pop(); // Removes from the end
arr1.shift(); // Removes from the beginning
console.log(arr1);

for (let item of arr1) console.log(item); // Iterating using for-of loop

// 6. Filtering Arrays
let evens = arr1.filter(num => num % 2 === 0); // Returns a new array with even numbers
console.log(evens);

// 7. Reducing Arrays
// Accepts a callback function with (accumulator, currentValue, index, array)
// reduce(useCallback, initialValue)
let sum = arr1.reduce((acc, num) => acc + num, 0); // Sum of all elements 
console.log(sum);

// 8. Finding Elements
console.log("includes",arr1.includes(3)); // Checks if 3 is present
console.log(arr1.indexOf(3)); // Returns index of 3 (or -1 if not found)
console.log(arr1.find(num => num > 3)); // Finds first element greater than 3
console.log(arr1.findIndex(num => num > 3)); // Finds index of first element greater than 3

// 9. Sorting & Reversing - under the hood uses merge sort algorithm. T.C  - O(nlogn). You can give your comparison function to sort the array in your own way.
// If a - b < 0: a comes before b
// If a - b > 0: b comes before a
// If a - b == 0: order doesn’t change
console.log("Before SOrting ",arr1);
arr1.sort((a, b) => b- a); // Sort in ascending order
console.log("After Sorting ",arr1);

const arr5 = [3,4,2,1,32,23,24,32]
console.log("sorted number",arr5.sort())   // [1,  2, 23, 24,3, 32, 32,  4]
arr1.reverse(); // Reverse order
console.log(arr1);

// 10. Slicing & Splicing
let sliced = arr1.slice(1, 4); // Extracts elements from index 1 to 3
console.log("slice",sliced);

arr1.splice(2, 1, 99); // Removes 1 element at index 2 and inserts 99
console.log("splice",arr1);

// 11. Merging & Converting Arrays
let arr4 = [7, 8, 9];
let merged = arr1.concat(arr4); // Merges two arrays
console.log(merged);

console.log(arr1.join(" - ")); // Converts array to string with separator

// 12. Spread & Rest Operators
let copied = [...arr1]; // Cloning an array
console.log(copied);

let [first, second, ...rest] = arr1; // Destructuring with rest operator
console.log(first, second, rest);

// 13. Array from Other Objects
let str = "hello";
let charArray = Array.from(str); // Converts string to array
console.log(charArray);

// 14. Flattening Nested Arrays
let nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(1)); // Flattens up to depth of 2

// 15. Removing Duplicates
let unique = [...new Set([1, 2, 2, 3, 4, 4, 5])]; // Removes duplicates
console.log(unique);

// 16. Checking Conditions
console.log(arr1.every(num => num > 0)); // Checks if all elements are positive
console.log(arr1.some(num => num > 3)); // Checks if any element is greater than 3

// 5. Transforming Arrays
let doubled = arr1.map(num => num * 2); // Returns a new array with each element doubled
console.log("doubled", doubled);
const arr = [65, 44, 12, 4];
const filterEvenNumbers = (arr) => arr.filter((num)=> {
    if (num % 2 === 0) {
        return true;
    }
    return false;
});
console.log(filterEvenNumbers(arr))


// 17. for...of - Iterates over values of an iterable (arrays, strings, maps, etc.)
for (const num of arr1) {
    console.log(num); // Logs each number
  }
  
  // 18. for...in - Iterates over object properties (keys), not values
  const obj = { a: 1, b: 2, c: 3 };
  for (const key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`); // Logs key-value pairs
  }
  
// 19. forEach() - Iterates over an array but does not return a new array
//    It executes a provided function once per array element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`); // Logs each index and value
});


// Summary:
// - forEach() is used for side effects, not returning values.
// - map() is for transforming elements into a new array.
// - filter() creates a new array of elements that pass a test.
// - reduce() processes an array into a single value.
// - some() & every() check conditions on array elements.
// - find() & findIndex() return the first matching value or index.
// - for...of is used for iterating values, while for...in is for object keys.