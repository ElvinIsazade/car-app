import React from "react"


const CartContext = React.createContext({
    cartItems : [],
    totalAmount : 0,
    addToCartItem : (item) =>{},
    removeFromCartItem : (id) => {}
})
export default CartContext