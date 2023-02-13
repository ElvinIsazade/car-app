import React from 'react'

const Card = (props) => {
    return (
        <div className='card-wrapper'>
            {props.children}
        </div>
    )
}

export default Card