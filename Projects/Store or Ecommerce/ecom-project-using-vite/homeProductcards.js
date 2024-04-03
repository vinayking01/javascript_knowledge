import  { StockQuantityToggle }  from "./StockQuantity.js";
import  { AddcartToggle }  from "./AddcartToggleFile.js";


const Store_container = document.querySelector(".store-container");
const Template_container = document.querySelector("#product-template-container");


export const showProductContainer = (products) =>{
    if(!products)
    {
        return false;
    }
    // Step 4: Iterating Over Products
    products.forEach((currElement) => {

    // Step 5: Destructuring Product Properties -  to use there is condition its property name should be always same as in the element f.
        const {id, product_name, category, discription, discount_price, Actual_price,Stocks_number,image} = currElement;
        // console.log(name);
    
    // Step 6: Cloning the Template - it neccessary steps otherwise we will not be able to use any node or template from other file if you are importing
    const productClone  = document.importNode(Template_container.content , true);

    // Step 7: Updating Product Information
    productClone.querySelector("#card-value").setAttribute('id', `card${id}`)
    productClone.querySelector(".product_name").textContent = product_name;
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product_image").src = image;
    productClone.querySelector(".product-description").textContent = discription;
    productClone.querySelector(".DiscountPrice").textContent = discount_price;
    productClone.querySelector(".ActualPrice").textContent = Actual_price;
    productClone.querySelector(".stock-remaining").textContent = Stocks_number;

    // Step 8: Adding Event Listener
    // we will apply event listener in parent not in both increment or decrement button . because we can achieve using a event delegation
   

    
    // console.log(productClone.querySelector(".product_name").content);

     
    productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
        StockQuantityToggle(event,id,Stocks_number);
    }) 
    
    productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
       AddcartToggle(event,id,Stocks_number,discount_price);
       document.querySelector(".cart-value").innerText = localStorage.getItem('Total-cart-value');
    })

    // this append statement should always at last otherwise any changes you want to perform in template won't work.
    Store_container.append(productClone);
    });
}