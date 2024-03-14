var box1  = document.getElementById("outerbox1");
var box2 = document.getElementById("outerbox2");



box2.addEventListener('click', move);

function move()
{
   box2.style.top = 0;
}