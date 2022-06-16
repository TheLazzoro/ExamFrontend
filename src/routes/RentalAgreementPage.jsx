import React from 'react'
import { useState, useEffect } from 'react';
import facade from '../facades/apiFacade';
import RentalCard from '../Components/RentalCard';

const RentalAgreementPage = () => {
    const [rentalsArr, setRentalsArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function populateRentals() {
            await facade.getAllRentals().then(res => {
                setRentalsArr(res.rentals);
                console.log(res.rentals);
            }).catch(e => {
                console.log(e);
            });
            setIsLoading(false);

        }
        populateRentals();

    }, [isLoading]);

    const onDeleteRental = () => {
        setIsLoading(true);
    }

  return (
    <div>
    {isLoading ? "Loading" : (rentalsArr.map(el => <RentalCard rental={el} onDeleteRental={onDeleteRental} />))}
    </div>
  )
}

export default RentalAgreementPage