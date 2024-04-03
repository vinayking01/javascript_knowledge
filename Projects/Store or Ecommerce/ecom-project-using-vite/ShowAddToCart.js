

import { fetchQuantityFromLS } from "./FetchQuantityFromLS.js";
import { IncrementAndDecrement } from "./IncrementAndDecrementValue.js";
import { remove_item } from "./RemoveItemFromCart.js";
import { getCartProductFromLocalStorage } from "./getCartProduct.js";
import { payout_money } from "./payout_moneyFile.js";

let arrLocalStorage = getCartProductFromLocalStorage();

// we will match the id's now
fetch('./product/product.json')
  .then(response => response.json())
  .then(jsonData => {
    // Use jsonData here
    let FilterProducts = jsonData.filter((currProd) => {
      return arrLocalStorage.some((currCard) => {     //The some() method in JavaScript is used to test whether at least one element in an array passes a certain condition. It iterates through each element in the array until it finds one that satisfies the condition, at which point it stops and returns true
        return currCard.id == currProd.id;
      });
    });
    // console.log(FilterProducts);

    // Now update the cart value;
    document.querySelector(".cart-value").innerText = FilterProducts.length;

    const Store_container = document.querySelector(".cart-content");   // html container access
    const Template_container = document.querySelector("#Cart-template-container"); // template access


    // showing the cart product

    const showProduct = ()=>{
        FilterProducts.forEach((currElement) => {
            let {id, product_name, category, discount_price, Stocks_number,image} = currElement;
            const productClone1  = document.importNode(Template_container.content , true);
            
            discount_price =  Number(discount_price);
   
            const lSActualData  = fetchQuantityFromLS(id,discount_price);
            let k = lSActualData.price;

            productClone1.querySelector("#card-value").setAttribute('id', `card${id}`)// giving every card a unique id 
            productClone1.querySelector(".category").textContent = category;
            productClone1.querySelector(".product_name").textContent = product_name;
            productClone1.querySelector(".product_image").src = image;
            productClone1.querySelector(".price").textContent = k.toFixed(2);
          
            productClone1.querySelector(".productQuantity").textContent = lSActualData.quantity ;
            
            let remove_product = productClone1.querySelector(".rm-cart-buttom");
            remove_product.addEventListener('click',(event)=>{
              remove_item(id);
            }); 


            productClone1.querySelector(".stockElement").addEventListener('click',(event)=>{
              IncrementAndDecrement(event,id,Stocks_number,discount_price);
            });

            Store_container.append(productClone1);
            payout_money(arrLocalStorage);
        });
    }
    showProduct();

  })
  .catch(error => console.error('Error fetching JSON:', error));

