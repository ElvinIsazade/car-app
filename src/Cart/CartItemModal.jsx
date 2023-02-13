import React from 'react'

const CartItemModal = (props) => {
    const price = `$${props.price}`
    return (
        <li className='cart-item'>
            <div>
                <h2>{props.name}</h2>
                <div className='summaryy'>
                    <span className='price'>{price}</span>
                    <span className='amount'>X {props.amount}</span>
                </div>
            </div>
            <div className='actions'>
                <button onClick={() => props.onRemove(props.id)}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItemModal