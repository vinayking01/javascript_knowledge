import { getCartProductFromLocalStorage } from "./getCartProduct.js"


export const fetchQuantityFromLS = ((id,price) =>{
    let cartProducts  = getCartProductFromLocalStorage();
    // console.log(cartProducts);
    let existingProduct = cartProducts.find((currProd) => currProd.id == id);
    // console.log(existingProduct)
    let quantity = 1;
    if(existingProduct)
    {
        quantity = Number(existingProduct.quantity);
        price = Number(existingProduct.total_price);
        // console.log("total",total_price)
        
    }

return {quantity,price};
});