
export const StockQuantityToggle = ((event,id,Stocks_number)=>{
    const currCardElement = document.querySelector(`#card${id}`);
    // console.log(currCardElement);
    // console.log(event.target);
    // console.log(" className"  + event.target.className);
    const productQuantity = currCardElement.querySelector('.productQuantity'); // to get always triggered card
    // console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1 ;  // it is conditional operator  if first value is not falsy then store first one , otherwise second one.

    // When using event.target in JavaScript, you can access various properties and information related to the element that triggered the event. Here are some of the things you can access using event.target:
    if(event.target.className == "cartIncrement" )  
    {
        if(quantity < Stocks_number)
        {
            quantity += 1;
        }
        else if(quantity === Stocks_number)
        {
            quantity = Stocks_number;
        }
    }

    if(event.target.className === "cartDecrement")
    {
        if(quantity > 1)
        {
            quantity -= 1;
        }
        else if(quantity == 1)
        {
            quantity = 1;
        }
    }

    productQuantity.innerText = quantity;
    // console.log(quantity);
    productQuantity.setAttribute("data-quantity",quantity.toString());
})