// A Map in JavaScript is a built-in object that stores key-value pairs and remembers the insertion order of keys. Unlike plain objects ({}), keys in a Map can be of any data type — strings, numbers, objects, arrays, or even functions. Keys shoule be unique

// 1. Different ways to create Map

// ✅ 1. Empty Map using map constructor
    let m = new Map();  // create an empty map

// ✅ 2. Map with Initial Entries (Array of key-value pairs)
const map2 = new Map([
  ['name', 'Vinay'],
  ['age', 25],
]);

// ✅ 3. Using set() Method Dynamically., Or, make an empty map and then add to it with the set() method:
const map3 = new Map();
map3.set('city', 'Delhi');
map3.set(123, 'ID');
map3.set(true, 'Active');

console.log(map3)

// ✅ 4. From an Object - creating object from map
const obj = { name: 'Vinay', age: 25 };
const mapFromObj = new Map(Object.entries(obj));



// 2 . Important methods of Map
// ✅ 1. set(key, value) - Puts in a new key with its value
    map3.set('name', 'John');
// ✅ 2. get(key) - Gets the value for a key
    map3.get('name'); // Gives back 'John'
// ✅ 3. has(key) - Checks if a key is there
    map3.has('name'); // True, it's there
// ✅ 4. delete(key) - Takes out an entry by its key
    map3.delete('name');
// ✅ 5. clear() - Gets rid of everything
    map3.clear();

console.log(map3)

console.log(map3.size)

const map4 = new Map([
  ['name', 'Vinay'],
  ['age', 25],
])


// 3. Accessing Map Elements

// ✅ 1. Using forEach
map4.forEach((value, key)=>{
    console.log(`Key: ${key}, Value: ${value}`);
})

// ✅ 2. Using for...of Loop
for (const [key, value] of map4) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// ✅ 3. Using keys(), values(), and entries() Methods
for(let key of map4.keys()){
    console.log(`Key: ${key}`);
}  



// Note - You cannot access map entries like map3[0]. Maps do not support index-based access like arrays.
// console.log(map3[0]); // undefined ❌ , The 0,1,2 index view in Chrome DevTools is just for display (entry order), not real indexing.



// Set
// A Set is a collection of values where:
// Each value must be unique
// The values can be of any data type
// The order of values is insertion order
// It is iterable, like an array

// 1. Creating a Set

// ✅ 1. Empty Set
const set1 = new Set();

// ✅ 2. Set from an Array
const set2 = new Set([1, 2, 3, 3, 4]);
console.log(set2); // Set { 1, 2, 3, 4 }

// ✅ 3. Explicitly adding values in set
const mySet = new Set();
mySet.add('banana');
mySet.add('apple'); // Duplicate, ignored


console.log(mySet.size);          // 2

// 2. Important Methods of Set

// ✅ 1. add(value) - Adds a value to the set
mySet.add('apple');

// ✅ 2. has(value) - Checks if a value is in the set
console.log(mySet.has('banana')); // true

// ✅ 3. delete - removes a value from the set
mySet.delete('apple');
console.log(mySet);               // Set { 'banana' }

// ✅ 4. clear - removes all values from the set
mySet.clear();
console.log(mySet.size);          // 0

