import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import CarItemForm from './CarItemForm';

const CarItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const addToCartItemHandler = (amount) =>{
        cartCtx.addToCartItem({
            id : props.id,
            name: props.name,
            amount: +amount,
            price: props.price
        });
    }
    return (
        <li className='cart-item'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
            <CarItemForm onAddToCart = {addToCartItemHandler} />
        </li>
    )
}

export default CarItem