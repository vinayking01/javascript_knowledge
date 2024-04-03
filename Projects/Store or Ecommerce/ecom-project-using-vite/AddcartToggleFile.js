import { getCartProductFromLocalStorage } from "./getCartProduct.js";
import { toastNotification } from "./toast.js";

export const AddcartToggle = (event,id,stocks_number,discount_price)=>{

    let arrLocalStorage = getCartProductFromLocalStorage();  // returns array of objects from Local Storage 

    const currentProdElement  = document.querySelector(`#card${id}`);  // the card in which user clicked

    let quantity  = Number(currentProdElement.querySelector(".productQuantity").innerText);
    let category = currentProdElement.querySelector(".category").innerText;
    let image_product  = currentProdElement.querySelector(".product_image").src ;
    let price  = currentProdElement.querySelector(".DiscountPrice").innerText;
    let product_name = currentProdElement.querySelector(".product_name").innerText;
    
    // Replace rupee sign from price
    // price = price.replace('₹',"");
    let total_price = Number(price) * quantity;
    // console.log(quantity,price);
    // Handling the existing id situation if present in local storage
    let existingProd  = arrLocalStorage.find((currId)=>{
        return currId.id ==  id;
    })
    
    if(existingProd  && quantity > 1)
    {   quantity = Number(existingProd.quantity) + quantity;
        // console.log(`Hi ${existingProd.id} + ${quantity}`);

         total_price = Number(price) * quantity;
        let updateCart = {id, total_price, quantity};

        updateCart = arrLocalStorage.map((currProd)=>{
            // console.log(`${currProd.id}  ${currProd.quantity}`);

            return currProd.id == id ? updateCart : currProd;
        });
        toastNotification("Added",product_name,id);
   
        localStorage.setItem('carProductLS',JSON.stringify(updateCart));
        return;
    }

    if(existingProd)
    {
        return false;
    }

    arrLocalStorage.push({id,total_price,quantity});

    toastNotification("Added",product_name,id);
    localStorage.setItem('carProductLS',JSON.stringify(arrLocalStorage)); // whenever we store data in Local storage it is always in key Value pairs. Here overriding with new data is also performed because in every click new data is added.
    
   
    let CartLS = JSON.parse(localStorage.getItem('carProductLS'));
    // console.log(CartLS);
    let firstItemId = CartLS;

    //creating unqiue array.

    let  p = new Array();
    firstItemId.forEach((element) => {
        let items = element.id;
        
        if(!p.includes(items))
        {
            p.push(items);
        }
    });

    localStorage.setItem('Total-cart-value',p.length);
    // return p.length;

}