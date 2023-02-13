import React, { Fragment, useContext } from 'react'
import CartContext from '../store/cart-context'
import Modal from '../UI/Modal'
import CartItemModal from './CartItemModal';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.cartItems.length > 0;
    const addToCartHandler = (item) => {
        cartCtx.addToCartItem({...item,amount : 1})
    }
    const removeFromCartHandler = (id) => {
        cartCtx.removeFromCartItem(id);
    }
    const cartItems = <ul className='card-items'>
        {cartCtx.cartItems.map((item) => (
            <CartItemModal
                id = {item.id}
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd = {addToCartHandler.bind(null,item)}
                onRemove = {removeFromCartHandler}
            />
        ))}
    </ul>
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {
                hasItems ? (
                    <Fragment>
                        {cartItems}
                        <div className='total'>
                            <span>Total amount:</span>
                            <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
                        </div>
                        <div className='actions'>
                            <button className='button--alt' onClick={props.onCloseCart}>Close</button>
                            {hasItems && <button className='button'>Order</button>}
                        </div>
                    </Fragment>

                ) : <p>There is not car</p>
            }
        </Modal>
    )
}

export default Cart