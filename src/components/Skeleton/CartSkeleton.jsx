import React from 'react';
import Skeleton from 'react-loading-skeleton'

const CartSkeleton = ({ cars }) => {

    return Array(cars).fill(0).map((item, i) => {
        return <div className='skeleton-wrapper' key={i}>
            <div className="left-col">
                <Skeleton count={3} width={130} />
            </div>
            <div className="right-col">
                <Skeleton count={2} width={130} />
            </div>
        </div>
    })

}

export default CartSkeleton