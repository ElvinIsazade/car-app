import React, { useEffect, useState } from 'react'
import Card from '../../UI/Card';
import CartSkeleton from '../Skeleton/CartSkeleton';
import CarItem from './CarItem/CarItem';

const AvailableCars = () => {

    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[httpError,setHttpError] = useState();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch("https://car-app-1b8bd-default-rtdb.firebaseio.com/cars.json");
                if(!response.ok) {
                    throw new Error("Something went wrong!");
                }
                const responseData = await response.json();
                const loadedCars = [];
                for (const key in responseData) {
                    loadedCars.push({
                        id: key,
                        name: responseData[key].name,
                        description: responseData[key].description,
                        price: responseData[key].price
                    })
                }
                setCars(loadedCars);
                setIsLoading(false);
                setHttpError();
            } catch (error) {
                setHttpError(error.message);
                setIsLoading(false);
            }
        }
        fetchCars()
    }, []);

    const carList = cars.map((car) => {
        return <CarItem
            id={car.id}
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
                    {httpError && <p>{httpError}</p>}
                    {isLoading && <CartSkeleton cars={4} />}
                    {carList}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableCars