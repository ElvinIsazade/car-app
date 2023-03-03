import React, { Fragment, useEffect, useState } from 'react';
import Button from '../UI/Button';
import { FiShoppingCart } from "react-icons/fi";

const Header = (props) => {
    const [randomImage,setRandomImage] = useState("");
    const getRandomPhoto = async () => {
        // const response = await fetch("https://source.unsplash.com/1600x900/?car");
        // setRandomImage(response.url)
    }
    useEffect(() => {
        getRandomPhoto()
    },[])
    return (
        <Fragment>
            <div className='header-container'>
                <div className="logo">
                    <a href="!#">Cars</a>
                </div>
                <Button
                    onClick = {props.onShowCart}
                    icon={<FiShoppingCart />}
                    text="Your Cart"
                    type="button"
                />
            </div>
            <div className="main-image">
                <img src={randomImage} alt="Cars" />
            </div>
        </Fragment>

    )
}

export default Header