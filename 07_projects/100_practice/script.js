let counter =0;

let increment_btn= document.querySelector("#inc")
let decrement_btn= document.querySelector("#dnc")

let result=document.querySelector(".result")

increment_btn.addEventListener('click',function(e){
    counter++;
    result.innerHTML=`${counter}`
})

decrement_btn.addEventListener("click", function(e){
    counter--;
    result.innerHTML=`${counter}`
})