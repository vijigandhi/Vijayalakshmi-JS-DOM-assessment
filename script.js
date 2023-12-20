"use strict"

let formData = document.forms.cart;
let btn = formData.elements.button;
let pname = formData.elements.text;
let amount = formData.elements.amount;
let p_tag = document.querySelector("#pname_alert")
let p1_tag = document.querySelector("#amount_alert")

console.log(formData);
console.log(amount);

formData.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("hi");

    if(pname.value == 0 && amount.value == 0)
    {
        p_tag.innerText = "Invalid Product Name";
        p1_tag.innerText = "Invalid Amount";
    }
    else
    {
        if(pname.value == 0)
        {
            p_tag.innerText = "invalid Product Name";
           
            console.log(p_tag);
            
        }
        else if(pname.value == 0)
        {
            p1_tag.innerText = "Invalid Amount";
        }
    }
   
})