"use strict"

let formData = document.forms.cart;
let btn = formData.elements.button;
let pname = formData.elements.text;
let amount = formData.elements.amount;
let p_tag = document.querySelector("#pname_alert");
let p1_tag = document.querySelector("#amount_alert");
let empty_container = document.querySelector(".container3-2");
let total = document.querySelector("#total");
let total_amount = document.querySelector("#total_amount");
let con = document.querySelector(".container3-3");
let hr = document.querySelector("#total_hr");
let des = document.querySelector("#des");

console.log(formData);
console.log(amount);
let arr = [];
let arr2 = [];

formData.addEventListener("submit", (event) => {
  event.preventDefault();

  if (pname.value == 0 && amount.value == 0) {
    p_tag.innerText = "Invalid Product Name";
    p1_tag.innerText = "Invalid Amount";
  } else {
    if (pname.value == 0) {
      p_tag.innerText = "invalid Product Name";
      console.log(p_tag);
    } else if (amount.value == 0) {
      p1_tag.innerText = "Invalid Amount";
    } else {
      p_tag.innerText = "";
      p1_tag.innerText = "";
      let child_div = document.createElement("div");
      child_div.id = "child_div";

      if (child_div) {
        let ul1 = document.createElement("ul");
        let ul2 = document.createElement("ul");

        ul2.id = "ul2";

        ul1.innerHTML = pname.value;
        ul2.innerHTML = amount.value;

        pname.value = "";
        amount.value = "";

        hr.style.display = "block";

        let del = document.createElement("span");
        del.innerHTML = `<i class="fa-solid fa-trash" id="trash"></i>`;
        console.log(del);

        let sum = parseInt(ul2.innerHTML);
        if (sum) {
          sum = Number(total_amount.innerText) + sum;
          total.innerHTML = "Total Amount";
          total_amount.innerHTML = sum;
        }

        del.addEventListener("click", () => {
          if (confirm(ul1.innerHTML+": this row deleted permanently...?")) {
            let deletedAmount = parseInt(ul2.innerHTML);
            let currentTotal = parseInt(total_amount.innerText);
            let newTotal = currentTotal - deletedAmount;
            total_amount.innerHTML = newTotal;
            child_div.remove();
          }
        });

        child_div.append(ul1, ul2, del);

        empty_container.append(child_div);
        arr.push(ul2.innerHTML);
        console.log(arr);
        console.log("arr length: " + arr.length);
      }
    }
  }
});

des.addEventListener("click", () => {

    for (let i = 0; i < arr.length -1 ; i++) 
    {
      for (let j = 0; j < arr.length -1 ; j++) 
      {
        if (arr[j] < arr[i]) 
        {
          let temp = arr[i+1];
          arr[i+1] = arr[j+1];
          arr[j] = temp;
        }   
        arr2.push(arr[j]);
      }
     
    }

    console.log(arr2);
});
  