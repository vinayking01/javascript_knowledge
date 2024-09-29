// Section 10👉 Document Object model in JavaScript 

// 1️⃣ Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object.  It represents the browser's window.

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object

// 2️⃣ All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.

// For example
// 👉 window.screen or just screen is a small information 
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.
  

// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more .

/* Window:

The window object is the global object in a browser environment.
It represents the browser window and serves as the global context for JavaScript code running in that window.
It contains properties and methods that provide access to various features of the browser environment.
DOM (Document Object Model):

The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text.
The document object is a key component of the DOM and represents the entire HTML or XML document. Developers can manipulate the DOM using JavaScript to dynamically change the content, structure, and style of a web page.
BOM (Browser Object Model):

The BOM is an extension of the DOM and represents various elements outside the document structure, such as the browser window, history, location, and navigator.
Common BOM objects include window (global object), navigator (information about the browser), location (information about the current URL), and history (the user's navigation history).


*/

// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 


// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }

// Section 3️⃣: Navigate through the DOM 

// document
// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (in child nodes it include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.body.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time 
// How to find the child in DOM tree -  firstChild (it also add tab , space as child) vs firstElementChild 
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow"; (benefits of using query selector is we can )


// Section 3️⃣: How to add and create tag and text using DOM and attach to HTML
  //1. First step creation
    // (a) createElement Method - it is used to create the tags 
    var item = document.createElement("H2");
    console.log(item);  // output - <h3> </h3>
    // (b) CreateTextNode - it is used to create text thea you want to later add on somple place in hTML
    var data = document.createTextNode("This is heading 3");
    console.log(data); // output- This is heading 3
    
  //2. Append both text and tag elements or also used to append in HTML document
    // (A) AppendChild - interface adds a node to the end of the list of children of a specified parent node.By default It append always at the end the of the scope of the element
    item.appendChild(data); // used jiske sath append krna hai.
    console.log(item); // Output which is still not attached with HTML doc- <h3> This is heading 3 </h3>

  // 3. Append in HTML- Two ways
  // document.getElementById("parent").appendChild(item) // it add the item at the last after all elements where it is attached.

  //(b) insertBefore - it insert the item in HTML before any item . It take two argument insrtBefore(appending_item, target_element before which you want to append)
  var target = document.getElementById("box1");
  // console.log(target.childNodes[0])
  target.insertBefore(item,target.childNodes[1]);


  // 4. Methods which directly append in HTML with Tags.
  //  (a) InsertAdjacentHTML - 
    var target2 = document.getElementById("child-box");

    var item2 = "<h4> This is Heading 4 </h4> "
    target2.insertAdjacentHTML("afterbegin",item2);

