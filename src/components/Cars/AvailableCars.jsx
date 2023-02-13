import React from 'react'
import Card from '../../UI/Card';
import CarItem from './CarItem/CarItem';

const DUMMY_Cars = [
    {
        id: 'm1',
        name: 'Range Rover',
        description: 'Black color 2021',
        price: 200.99,
    },
    {
        id: 'm2',
        name: 'Mercedez',
        description: 'A german specialty!',
        price: 100.5,
    },
    {
        id: 'm3',
        name: 'Ford',
        description: 'American, raw, meaty',
        price: 120.99,
    },
    {
        id: 'm4',
        name: 'Ferrari',
        description: 'Italy experience',
        price: 180.99,
    },
];
const AvailableCars = () => {
    
    const carList = DUMMY_Cars.map((car) => {
        return <CarItem
                    id = {car.id}
                    name={car.name}
                    key={car.id}
                    description={car.description}
                    price={car.price}
                />
    })

    return (
        <div className='cars'>
            <Card>
                <ul>
                    {carList}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableCars