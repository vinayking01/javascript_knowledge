import { getCartProductFromLocalStorage } from "./getCartProduct.js";
import { payout_money } from "./payout_moneyFile.js";
import { toastNotification } from "./toast.js";

export const remove_item =  (id)=>{
    let arrLocalStorage = getCartProductFromLocalStorage();

    let remove_product = arrLocalStorage.filter((currProd) => {
        return id != currProd.id;
    });
    console.log(remove_product);
    console.log(JSON.stringify(remove_product));

    localStorage.setItem('carProductLS',JSON.stringify(remove_product));

    // update the cart value in nav bar and Local storage area
    localStorage.setItem('Total-cart-value',remove_product.length);
    document.querySelector('.cart-value').innerText = remove_product.length;


    // Removing That whole DIV from the html doc because right now after removing we have to reload the page.

    document.querySelector(`#card${id}`).remove();
    payout_money(getCartProductFromLocalStorage());
    toastNotification("Removed","",id);
    
}