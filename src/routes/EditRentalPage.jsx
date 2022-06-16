import React, { useEffect, useState } from 'react'
import facade from '../facades/apiFacade';

const EditRentalPage = () => {
    const [isLoading, setIsLoading] = useState([]);
    const [tenantsArr, setTenantsArr] = useState([]);

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

  return (
    <div>EditRentalPage</div>
  )
}

export default EditRentalPage