import { getCartProductFromLocalStorage } from "./getCartProduct.js";
import { payout_money } from "./payout_moneyFile.js";

export const IncrementAndDecrement = (event,id,Stocks_number,discount_price)=>{
    
    let arrLocalStorage = getCartProductFromLocalStorage();
    let currCardElement = document.querySelector(`#card${id}`);
    let ProductQuantity = currCardElement.querySelector(".productQuantity").innerText;

    let total_price = arrLocalStorage.total_price;

    discount_price =  Number(discount_price);
    
    let quantity = Number(ProductQuantity);
    // console.log(quantity);

    if(event.target.className == "cartIncrement" )  
    {   
        if(quantity < Stocks_number)
        {
            quantity = quantity + 1;
            total_price = Number(quantity) * Number(discount_price);
            // console.log(quantity);
            // payout_money(arrLocalStorage);
        }
        if(quantity == Stocks_number)
        {
            quantity = Number(Stocks_number);
            // payout_money(arrLocalStorage);
        }

    }
    if(event.target.className === "cartDecrement")
    {
        if(quantity > 1)
        {
            quantity = quantity -1;
            total_price = Number(quantity) * Number(discount_price);
        }
        if(quantity == 1)
        {
            quantity = 1;
            total_price = discount_price;
        }

    }
    
    let updateCart  = {id, total_price ,quantity};
    console.log(updateCart);
    
    updateCart = arrLocalStorage.map((currProduct)=>{
        return currProduct.id === id ? updateCart : currProduct;
     })

    localStorage.setItem('carProductLS',JSON.stringify(updateCart));
    
    payout_money(getCartProductFromLocalStorage());
    // let cartProducts  = localStorage.getItem("carProductLS");
    // if(!cartProducts)
    // {
    //     return [];  //return blank array
    // }
    // cartProducts = JSON.parse(cartProducts);

    // console.log(cartProducts[0].quantity);
    // let p = 7;
    currCardElement.querySelector(".productQuantity").innerText = Number(quantity);
    currCardElement.querySelector(".price").innerText = Number((total_price).toFixed(2));
    
    

}