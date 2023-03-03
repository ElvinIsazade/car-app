import React, { useEffect, useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [cartItems,setCartItems] = useState(localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []);

    const [totalAmount,setTotalAmount] = useState(0);
    useEffect(() => {
        localStorage.setItem("cartItem",JSON.stringify(cartItems))
    },[cartItems])
    
    const addToCartItem = (item) => {
        setTotalAmount(totalAmount + item.price * item.amount)
        const existingCardItemIndex = cartItems.findIndex(currentItem => currentItem.id === item.id);
        const existingCardItem = cartItems[existingCardItemIndex];
        let updatedItems;
        if(existingCardItemIndex >= 0) {
            const updatedItem = {
                ...existingCardItem,
                amount: existingCardItem.amount + item.amount
            }
            updatedItems = [...cartItems];
            updatedItems[existingCardItemIndex] = updatedItem;
            setCartItems(updatedItems);
            
        }else{
            setCartItems([item,...cartItems]);
        }
        
    }

    const removeFromCartItem = (id) => {
        const existingCartItemIndex = cartItems.findIndex(currentItem => currentItem.id === id);
        const existingCartItem = cartItems[existingCartItemIndex];
        setTotalAmount(totalAmount - existingCartItem.price);
        let updatedItems;
        if(existingCartItem.amount === 1) {
            updatedItems = cartItems.filter((currentItem) => currentItem.id !== id);
            setCartItems(updatedItems);
        }else{
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount -1
            }
            updatedItems = [...cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;
            setCartItems(updatedItems)
        }
    }

    const clearItemsFromCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItem");
    }

    return (
        <CartContext.Provider value={{
            cartItems:cartItems,
            totalAmount: totalAmount,
            addToCartItem: addToCartItem,
            removeFromCartItem: removeFromCartItem,
            clearItemsFromCart: clearItemsFromCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider