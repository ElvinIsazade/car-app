import React from "react"


const CartContext = React.createContext({
    cartItems : [],
    totalAmount : 0,
    addToCartItem : (item) =>{},
    removeFromCartItem : (id) => {},
    clearItemsFromCart: () => {}
})
export default CartContext