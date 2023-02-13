import React, { Fragment } from 'react'

const Modal = (props ) => {
    return (
        <Fragment>
            <div className="backdrop" onClick={props.onCloseCart}></div>
            <div className='modal'>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default Modal