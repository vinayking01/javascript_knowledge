/*
 ✅Map 🗺️
    - Map in JavaScript (JS) allow you to store information/data using a key-value relationship. But wait... isn't that the same as an Object in JS? Map does return Object when you use typeof but it is not exactly the same. They are very similar in nature but they have distinct differences that determine their uses.
    - Map was introduced to solve many of these problems related to Object.
        - Any type of key (objects, functions, primitives).
        - Ordered iteration (keys are stored in insertion order).
        - Size is easy with .size. This kind of functionality not given to Object.
        - Optimized for frequent additions/removals.
        - Cleaner API: .set(), .get(), .has(), .delete(), .clear()


1️⃣ Characteristics of Map
    - Unique Keys: Each key in a Map is unique.
    - Any Data Type for Keys: Unlike objects, keys can be of any data type, including functions, objects, or any primitive type.
    - Iterable: You can iterate over the keys, values, or entries of a Map.

*/
//  2️⃣Operations

    //1.  Creating a Map
    let funnyMap = new Map();

    //2. Adding values
    funnyMap.set('a', 1); // string key
    funnyMap.set(2, 'two'); // number key
    funnyMap.set(true, 'yes'); // boolean key
    funnyMap.set({name: 'obj'}, 'object'); // object key

    console.log(funnyMap)  
        /* Map(4) {
        'a' => 1,
        2 => 'two',
        true => 'yes',
        { name: 'obj' } => 'object'
        } */

    //3. Getting Values
    console.log(funnyMap.get('a')); // 1
    console.log(funnyMap.get(2)); // two
    console.log(funnyMap.get({name: 'obj'})); // gives you undefined better whenever wanted toa dd the non-primitive value with first storing in variable and then using.

    // 4. Checking for a Key
    console.log(funnyMap.has('a')); // true
    console.log(funnyMap.has(42)); // false

    // 5. Deleting an element 
    funnyMap.delete('a');
    console.log(funnyMap.has('a')); // false

    //6. Getting the size of Map
    console.log(funnyMap.size); // 3 after deletion

    // 7. Clear the whole map
    funnyMap.clear();   
    console.log(funnyMap.size); // 0


    // 8. Iterating Over a Map
    funnyMap.set('banana', 'yellow');
    funnyMap.set('apple', 'red');
    funnyMap.set('grape', 'purple');

    // Iterating over keys
    for (let key of funnyMap.keys()) {
        console.log(`Key: ${key}`);
    }

    // Iterating over values
    for (let value of funnyMap.values()) {
        console.log(`Value: ${value}`);
    }

    // Iterating over entries
    for (let [key, value] of funnyMap.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
    }

    // Funny example
    funnyMap.set('dad joke', 'What do you call fake spaghetti? An impasta!');
    for (let [key, value] of funnyMap.entries()) {
        console.log(`Here’s a ${key}: ${value}`);
    }


//3️⃣ One Disadvantage  which could memory leak.
const myMap = new Map();
let user = { name: "Alice" };

myMap.set(user, "secret info");

console.log(myMap.get(user)); // "secret info"

user = null;

console.log(myMap.size); // ❌ Still 1 means that object data is still there 

// Even after user = null, the Map still holds a strong reference to the object { name: "Alice" }.
//  The object won’t be garbage collected because the Map is keeping it alive.



/* ✅ WeakMap () - Keeps keys weakly. If the object is gone, the entry is gone.
    - WeakMap holds a weak reference to the key object.
    - If no other reference exists, the object and its entry in WeakMap will be removed automatically by the garbage collector.
    - That’s why WeakMap doesn’t have .size, .keys(), .values(), .entries(), or iteration — because its contents are ephemeral and can vanish anytime.

*/
    const myWeakMap = new WeakMap();
    let user2 = { name: "Alice" };

    myWeakMap.set(user2, "secret info");

    console.log(myWeakMap.get(user2)); // "secret info"

    user2 = null;

    // ❌ We cannot check size or iterate
    // ✅ But the entry is automatically garbage-collected
