// first of all this is the one of the ways to add the HTML content in dynamic way instead writing for every navigation page


export const toastNotification = (operation,product_name,id)=>{

    let container = document.querySelector(".toast");

    let toastHTML =  `<div class="toastbox"> <h4>Product -${product_name} has been ${operation}</h4>
    </div>`;
    container.innerHTML = toastHTML;
    let toastBox = document.querySelector(".toastbox");
    setTimeout(()=>{
        toastBox.remove();
    },2000)
}