
let count = 0;


const buttons = document.querySelectorAll("button");


buttons.forEach(function(button){

button.addEventListener("click",function(){

count++;

document.getElementById("cart-count").textContent=count;


});

});
