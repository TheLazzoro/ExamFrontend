import React, { useEffect, useState } from 'react'
import facade from '../facades/apiFacade';
import { useLocation } from 'react-router-dom';

const EditRentalPage = () => {
    const location = useLocation();
    const { rentalData } = location.state;

    console.log("rental Data: " + rentalData.house);

  return (
    <div>
        <h2>Edit Rental</h2>
        <div>
            <h3>No time :(</h3>
            <h3>Backend functionality exists.</h3>
        </div>
    </div>
  )
}

export default EditRentalPage