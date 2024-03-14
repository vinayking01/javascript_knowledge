// Local Storage is a type of web storage in web browsers that allows to store and access data in some amount. The data stored in local storage has no expiration.

// even after closing the browser still you can access it when you open the same webpage where you created the localstorage items.

// The data in local storage is stored in 'key-value' pair, also called as a data item.

// This will only only work in web page. It won't work in any code editor because it stores in web browser.

// (1) Storing the data
localStorage.setItem("name","vinay singh");
localStorage.setItem('age',3223);

// (2) Get Data from Local Storage
localStorage.getItem("name");
localStorage.setItem('age');

// (3) Remove Data from local Storage
localStorage.removeItem("age")
