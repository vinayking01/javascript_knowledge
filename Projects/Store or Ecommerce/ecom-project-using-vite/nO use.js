// export const StockQuantityToggleCart = ((event,id)=>{
//     const currCardElement = document.querySelector(`#card${id}`);
//     // console.log(currCardElement);
    
//     const productQuantity = currCardElement.querySelector('.productQuantity');
//     // console.log(productQuantity.innerHTML);
//     let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1 ;

//     // When using event.target in JavaScript, you can access various properties and information related to the element that triggered the event. Here are some of the things you can access using event.target:
//     if(event.target.className == "cartIncrement" )  
//     {
        
//         quantity = 1 + Number(productQuantity.innerHTML);
     
//     }

//     if(event.target.className === "cartDecrement")
//     {
//         if(Number(productQuantity.innerHTML) > 1)
//         {
//             quantity = Number(productQuantity.innerHTML) - 1;
//             // console.log(quantity)
//         }
//     }

//     productQuantity.innerHTML = quantity;
//     // console.log(quantity);
//     productQuantity.setAttribute("data-quantity",quantity.toString());
// })