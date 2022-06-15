import React from 'react'
import { useLocation } from 'react-router-dom';

const HouseDetails = () => {
    const location = useLocation();
    const { rentalData } = location.state;
    console.log(rentalData);

    return (
        <div>
            <h2>{rentalData.house.address}, {rentalData.house.city}</h2>
            <h3>Rooms: {rentalData.house.numberOfRooms}</h3>
            <h3>Start Date: {rentalData.startDate}</h3>
            <h3>End Date: {rentalData.endDate}</h3>
            <h3>Annual Price: {rentalData.priceAnnual},- DKK</h3>
            <h3>Deposit: {rentalData.deposit},- DKK</h3>
        </div>
    )
}


export default HouseDetails