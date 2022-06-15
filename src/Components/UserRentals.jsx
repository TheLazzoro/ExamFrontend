import React, { useEffect, useState } from 'react'
import facade from '../facades/apiFacade';
import RentalCard from './RentalCard';

const UserRentals = () => {
    const [isLoadingRentals, setIsLoadingRentals] = useState(true);
    const [rentalsArr, setRenatalsArr] = useState([]);


    const username = facade.getName();

    useEffect(() => {

        async function populateRentals() {
            await facade.getAllRentalsByUser(username).then(res => {
                setRenatalsArr(res.rentals);
                console.log(res.rentals);
            });

            setIsLoadingRentals(false);

        }
        populateRentals();

    }, [isLoadingRentals]);

    return (
        <div>
            {isLoadingRentals ? "Loading" : (rentalsArr.map(el => <RentalCard rental={el} />))}
        </div>
    )
}

export default UserRentals