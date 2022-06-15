import React from 'react'
import { Link } from 'react-router-dom';
import { linkStyle } from '../stylesReact';

const HouseCard = ({ house }) => {

    return (
        <div className='card' style={{ display: "inline-block", width: "200px", margin: "10px" }}>
            <img src="../src/Img/HouseRental.webp" alt="Avatar" style={{ width: "100%" }} />
            <div className='container'>
                <Link to="/CreateAccount" style={linkStyle} >{house.address}</Link>
                <p>{house.city}</p>
            </div>
        </div>
    )
}

export default HouseCard