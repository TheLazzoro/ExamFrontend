import React, { useEffect, useState } from 'react'
import facade from '../facades/apiFacade';
import HouseCard from './HouseCard';
import RentalCard from './RentalCard';

const UserPage = () => {
    const [isLoadingRentals, setIsLoadingRentals] = useState(true);
    const [rentalsArr, setRenatalsArr] = useState([]);


    let username = "";
    const token = facade.getToken();
	let isUser = false;

	if (token != null) {
		isUser = facade.getRoles();
        username = facade.getName();
    }


    useEffect(() => {

        async function populateRentals() {
            await facade.getAllRentals(username).then(res => {
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

export default UserPage