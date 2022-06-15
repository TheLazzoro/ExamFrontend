import React from 'react'
import { useLocation } from 'react-router-dom';

const HouseDetailsAdmin = () => {
    const location = useLocation();
    const { houseData } = location.state;
    console.log(houseData);

    return (
        <div>
            <h2>{houseData.address}, {houseData.city}</h2>
            <h3>Rooms: {houseData.numberOfRooms}</h3>
        </div>
    )
}

export default HouseDetailsAdmin