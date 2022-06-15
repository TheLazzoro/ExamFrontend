import React from 'react'
import { Link } from 'react-router-dom';
import { linkStyleUnderline } from '../stylesReact';

const RentalCard = ({ rental }) => {
    const house = rental.house;
    const startDate = rental.startDate;
    const endDate = rental.endDate;
    const priceAnnual = rental.priceAnnual;
    const deposit = rental.deposit;


    console.log(rental);


    return (
        <div className='card' style={{ display: "inline-block", width: "200px", margin: "10px" }}>
            <img src="../src/Img/HouseRental.webp" alt="Avatar" style={{ width: "100%" }} />
            <div className='container'>
                <Link to="/User/HouseDetails" style={linkStyleUnderline} state={{rentalData: rental}} >{house.address}</Link>
                <p>{house.city}</p>
            </div>
        </div>
    )
}

export default RentalCard