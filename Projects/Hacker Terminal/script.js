let first = document.querySelector("#first");

function getrandom() {
    let r = Math.random();
    let a = 1;
    let b = 7;

    return r * (b - a) + a;

}

async function starting() {
    var k = await new Promise((resolve, reject) => {
        var HTML_content = `<div style ="color:white; display:flex">
        <p style="font-size:1.2rem; margin-right:10px;">Initializing Hacking.</p> <div class="dots-1"><span class="All-dot dot dot1">.</span> <span class="All-dot dot dot2">.</span> <span class="All-dot dot dot3">.</span></div>
    </div>`;
        first.insertAdjacentHTML("beforeend", HTML_content);
        console.log("First Completed")    
        setTimeout(() => {
            resolve("success")
        }, 2000);
    });
    document.querySelector(".dots-1").style.display = "none";
    
   
}
async function SecondLine() {
    var k = await new Promise((resolve, reject) => {
        var HTML_content = `<div style ="color:white; display:flex">
    <p style="font-size:1.2rem; margin-right:10px;">Reading Your Files</p> <div class="dots-2"><span class="All-dot dot dot1">.</span> <span class="All-dot dot dot2">.</span> <span class="All-dot dot dot3">.</span></div>
</div>`;
    first.insertAdjacentHTML("beforeend", HTML_content);
    console.log("Second Completed")
        setTimeout(() => {
            resolve("success")
        }, Math.ceil(getrandom()) * 1000);
    });

    document.querySelector(".dots-2").style.display = "none";
    

}
async function ThirdLine() {
    var k = await new Promise((resolve, reject) => {
        var HTML_content = `<div style ="color:white; display:flex">
    <p style="font-size:1.2rem; margin-right:10px;">Password FIles Detected</p> <div class="dots-3"><span class="All-dot dot dot1">.</span> <span class="All-dot dot dot2">.</span> <span class="All-dot dot dot3">.</span></div>
</div>`;
    first.insertAdjacentHTML("beforeend", HTML_content);
    console.log("Third Completed")

        setTimeout(() => {
            resolve("success")
        }, Math.ceil(getrandom()) * 1000);
    });
    document.querySelector(".dots-3").style.display = "none";
    
    
}
async function FourthLine() {
    var k = await new Promise((resolve, reject) => {
        var HTML_content = `<div style ="color:white; display:flex">
        <p style="font-size:1.2rem; margin-right:10px;">Sending all your files and password to the server</p> <div class="dots-4"><span class="All-dot dot dot1">.</span> <span class="All-dot dot dot2">.</span> <span class="All-dot dot dot3">.</span></div>
    </div>`;
        first.insertAdjacentHTML("beforeend", HTML_content);
        console.log("Fifth Completed")
        setTimeout(() => {
            resolve("success")
        }, Math.ceil(getrandom()) * 1000);
    });
    document.querySelector(".dots-4").style.display = "none";
    
   

}

async function FifthLine() {
    var k = await new Promise((resolve, reject) => {
        var HTML_content = `<div style ="color:white; display:flex">
        <p style="font-size:1.2rem; margin-right:10px;">Cleaning up all files</p> <div class="dots-5"><span class="All-dot dot dot1">.</span> <span class="All-dot dot dot2">.</span> <span class="All-dot dot dot3">.</span></div>
    </div>`;
        first.insertAdjacentHTML("beforeend", HTML_content);
        console.log("Sixth Completed")
        setTimeout(() => {
            resolve("success")
        }, Math.ceil(getrandom()) * 1000);
    });

    document.querySelector(".dots-5").style.display = "none";
    

}

async function asynchronous() {
    await starting();
    await SecondLine();
    await ThirdLine();    
    await FourthLine();
    await FifthLine();

    
}

asynchronous();
