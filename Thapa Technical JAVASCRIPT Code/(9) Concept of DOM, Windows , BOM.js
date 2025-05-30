// 📌 Section 10: Document Object Model (DOM) in JavaScript

// The `window` object is the global object in a browser environment.
// It represents the browser window and serves as the global execution context in JavaScript.

// ✅ Key Features of `window`:
// - Contains properties and methods for interacting with the browser.
// - Provides access to the `document` (DOM) and `history`, `location`, `navigator` (BOM).
// - You can omit "window" when accessing its properties (e.g., `alert()` instead of `window.alert()`).

// 👉 Example:
console.log(window.screen);      // Returns information about the physical screen
console.log(window.location);    // Returns the current URL
console.log(window.innerHeight); // Returns viewport height
console.log(window.innerWidth);  // Returns viewport width

// 🛠️ The `document` object is part of the DOM (Document Object Model).
// It represents the entire web page and allows JavaScript to manipulate its structure and content.
console.log(document.title);  // Returns the title of the page

// 🛠️ The BOM (Browser Object Model) extends the DOM by providing access to browser features.
// It includes objects such as:
// - `navigator`: Provides information about the browser
// - `location`: Gives URL-related details
// - `history`: Allows navigation through browser history

// 📌 Difference Between DOM & BOM
// - The DOM manages the HTML structure (elements, styles, events).
// - The BOM interacts with the browser environment (history, navigation, screen size).

// 👉 Example: Changing background color using DOM
document.body.style.background = "red";

// 👉 Example: Redirecting using BOM
// if (confirm("Want to visit YouTube?")) {
//   location.href = "https://www.youtube.com";  // Redirects the user
// }

// 📌 Section 3: Navigating the DOM
// Methods to explore and manipulate the DOM structure:

console.log(document.documentElement); // The root <html> element
console.log(document.head);            // The <head> section
console.log(document.body);            // The <body> section

// ✅ Checking if an element has child nodes
console.log(document.body.hasChildNodes()); // Returns true if there are child elements

// ✅ Getting the first and last child elements
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// ✅ Using query selectors to access elements efficiently
document.querySelector(".child-two").style.color = "yellow";

// 📌 Section 4: Creating and Adding Elements using DOM

// 1️⃣ Creating Elements
let item = document.createElement("h2");  // Creates an <h2> element
let text = document.createTextNode("This is heading 3");  // Creates a text node

// 2️⃣ Appending Text to the Element
item.appendChild(text);  // Inserts text inside the <h2> element

// 3️⃣ Attaching Element to the HTML
document.getElementById("parent").appendChild(item);  // Adds <h2> to the parent element 

// 4️⃣ Insert Element Before Another Element
let target = document.getElementById("box1");
target.insertBefore(item, target.childNodes[1]);  // Inserts <h2> before the second child of target

// 5️⃣ Directly Inserting HTML into an element
document.getElementById("child-box").insertAdjacentHTML("afterbegin", "<h4>This is Heading 4</h4>"); // Inserts HTML at the beginning of the element 

// 📌 Section 5: Alert, Confirm, and Prompt (Part of BOM)
// These functions are browser-specific and help interact with users
alert("This is an alert!");  // Displays a message box
let userResponse = confirm("Do you want to proceed?");  // OK/Cancel dialog
let userInput = prompt("Enter your name:");  // Input field dialog
console.log(userInput);  // Logs user input to the console

