import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart-context'

const Button = (props) => {
    const [highlighted,setHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCart = cartCtx.cartItems.reduce((currentNumber,item) => {
        return currentNumber += item.amount
    },0)
    useEffect(() => {
        if(cartCtx.cartItems.length === 0) {
            return
        }
        setHighlighted(true);

        const timer = setTimeout(() => {
            setHighlighted(false);
        },300);
        return () => {
            clearTimeout(timer);
        }
    },[cartCtx.cartItems])
    return (
        <button className={highlighted ? "cart-btn bump" : "cart-btn"} type= {props.type || "button"} onClick={props.onClick}  >
            <span className='cart-btn__text'>{props.text}</span>
            <div className="cart-btn-badge__container">
                {props.icon ? <span className='cart-btn__icon'>{props.icon}</span> : null}
                <span className="badge">{numberOfCart}</span>
            </div>
        </button>
    )
}

export default Button