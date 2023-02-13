import React, { useRef, useState } from 'react'
import Input from '../../../UI/Input'

const CarItemForm = (props) => {
    const [amountIsValid,setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const amount = amountInputRef.current.value;
        if(amount.trim().length === 0 || +amount < 1 || +amount >5 ){
            setAmountIsValid(false);
            return
        }
        props.onAddToCart(amount)
    }
    return (
        <form className='form' onSubmit={submitHandler}>
            <Input
                ref = {amountInputRef}
                label = "Amount"
                input = {{
                    min : "1",
                    max : "5",
                    defaultValue: "1",
                    type: "number",
                    step: "1",
                    id: "amount"
                }}
            />
            <button>+ Add</button>
            {!amountIsValid ? <p>Please enter amount (1-5)</p> : null}
        </form>
    )
}

export default CarItemForm