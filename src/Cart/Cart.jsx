import React, { Fragment, useContext, useState } from 'react'
import CartContext from '../store/cart-context'
import Modal from '../UI/Modal'
import CartItemModal from './CartItemModal';
import Checkout from './CheckOut';

const Cart = (props) => {


    const [isCheckOut, setIsCheckOut] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);


    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.cartItems.length > 0;
    const addToCartHandler = (item) => {
        cartCtx.addToCartItem({ ...item, amount: 1 })
    }
    const removeFromCartHandler = (id) => {
        cartCtx.removeFromCartItem(id);
    }

    const orderHandler = () => {
        setIsCheckOut(true);
    }

    const submitHandler = (userData) => {
        setIsSubmitting(true);
        fetch("https://car-app-1b8bd-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orederedItems: cartCtx.cartItems
            })
        })
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearItemsFromCart();
    }

    const cartItems = <ul className='card-items'>
        {cartCtx.cartItems.map((item) => (
            <CartItemModal
                id={item.id}
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={addToCartHandler.bind(null, item)}
                onRemove={removeFromCartHandler}
            />
        ))}
    </ul>

    const modalActions = <div className='actions'>
        <button className='button--alt' onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className='button' onClick={orderHandler}>Order</button>}
    </div>

    const modalContent = hasItems ? (
        <Fragment>
            {cartItems}
            <div className='total'>
                <span>Total amount:</span>
                <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
            </div>
            {isCheckOut && <Checkout onConfirm={submitHandler} onCancel={props.onCloseCart} />}
            {!isCheckOut && modalActions}
        </Fragment>

    ) : <p>There is not car</p>

    const isSubmittingContent = <p>Sending order data...</p>;

    const didSubmitContent = 
    <Fragment>
        <p>Succesfully sent the order!</p>
        <button style={{padding:"5px 16px",cursor:"pointer",border:"none",borderRadius:"5px"}} onClick={props.onCloseCart}>Close</button>
    </Fragment>

    return (
        <Modal onCloseCart={props.onCloseCart}>
            {isSubmitting && isSubmittingContent}
            {didSubmit && !isSubmitting && didSubmitContent}
            {!isSubmitting && !didSubmit && modalContent}
        </Modal>
    )
}

export default Cart