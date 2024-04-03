
import './style.css' with {type : 'css'};
import { showProductContainer } from './homeProductcards.js';




// import product from "./product/product.json";  it is not working giving some CROS error so i will use fetch function

document.querySelector(".cart-value").innerText = localStorage.getItem('Total-cart-value'); 


fetch('./product/product.json')
  .then(response => response.json())
  .then(jsonData => {
    // Use jsonData here
      //**_ Steps to Create a Function for Displaying Product Containers _**
    showProductContainer(jsonData);

  })
  .catch(error => console.error('Error fetching JSON:', error));



//  Total Cart Items Section 


