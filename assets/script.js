let decreaseBtn = document.querySelector("#quantity-down")
let increaseBtn = document.querySelector("#quantity-up")

function updateQuantity(displayQuantity){
    let quantity = document.querySelector(".total-quantity")
    quantity.innerHTML = displayQuantity
}


let quantity = 1

decreaseBtn.addEventListener("click", function(e){
    if(quantity > 0){
        quantity--

    }else{
        window.alert("nothing in the cart!")
    }
    updateQuantity(`Quantity: ${quantity}`)
})


increaseBtn.addEventListener("click", function(e){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})