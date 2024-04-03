
export const getCartProductFromLocalStorage = () =>{
    let cartProducts  = localStorage.getItem("carProductLS");
    if(!cartProducts)
    {
        return [];  //return blank array
    }
    cartProducts = JSON.parse(cartProducts);
    return cartProducts;  // returning array of products
}