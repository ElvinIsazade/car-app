import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const fiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputsValidity,setFormInputsValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();


    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = fiveChar(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalIsValid && enteredStreetIsValid;

        if(!formIsValid) {
            return
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        });
        
    };

    return (
        <form className="form-wrapper" onSubmit={confirmHandler}>
            <div className={`${formInputsValidity.name ? "control" : "control invalid"}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsValidity.name && <p style={{color: "red"}}>Please enter a valid name!</p>}
            </div>
            <div className={`${formInputsValidity.street ? "control" : "control invalid"}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsValidity.street && <p style={{color: "red"}}>Please enter a valid street!</p>}
            </div>
            <div className={`${formInputsValidity.postal ? "control" : "control invalid"}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalInputRef} />
                {!formInputsValidity.postal && <p style={{color: "red"}}>Please enter a valid postal!</p>}
            </div>
            <div className={`${formInputsValidity.name ? "control" : "control invalid"}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsValidity.city && <p style={{color: "red"}}>Please enter a valid city!</p>}
            </div>
            <div className="actions-button-wrapper">
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className="confirm-submit">Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;