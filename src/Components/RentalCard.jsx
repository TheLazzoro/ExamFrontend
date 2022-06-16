import React from 'react'
import { Link } from 'react-router-dom';
import facade from '../facades/apiFacade';
import { linkStyle, linkStyleUnderline } from '../stylesReact';

const RentalCard = ({ rental, onDeleteRental }) => {
    const house = rental.house;

    console.log(rental);
    
    const onClickDelete = async (evt) => {
        const id = evt.target.id;
        await facade.deleteRental(id).then( res => {
            console.log(res);
            onDeleteRental();
        });
    }

    return (
        <div className='card' style={{ display: "inline-block", width: "200px", margin: "10px" }}>
            <img src="../src/Img/HouseRental.webp" alt="Avatar" style={{ width: "100%" }} />
            <div className='container'>
                <Link to="/User/HouseDetails" style={linkStyleUnderline} state={{rentalData: rental}} >{house.address}</Link>
                <p>{house.city}</p>
                <Link to="/Admin/Rentals/Edit" style={linkStyleUnderline}>Edit</Link>
                <button id={rental.id} onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default RentalCard