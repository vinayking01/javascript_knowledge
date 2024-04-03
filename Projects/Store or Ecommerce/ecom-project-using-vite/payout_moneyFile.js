
export const payout_money =  (arrLocalStorage)=>{
    let k =0;
    console.log("arrLocalStorage",arrLocalStorage);
    arrLocalStorage.forEach(element => {
        k = (k + Number(element.total_price));
    });
    k = Number(k.toFixed(2));
    document.querySelector('.psb').innerHTML = `<p>Sub Total:</p><p class="productSubTotal">₹${k}</p>`;

    let tax  = (document.querySelector('.productTax').innerText);
     tax = Number(tax.replace("₹",""));
    let s = Number(k) + tax; 
    document.querySelector('.pft').innerHTML =`<p>Final Total:</p>
    <p class="productFinalTotal">₹${s}</p` ;
}