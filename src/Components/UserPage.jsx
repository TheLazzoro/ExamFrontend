import React, { useEffect, useState } from 'react'
import facade from '../facades/apiFacade';
import RentalCard from './RentalCard';
import UserRentals from './UserRentals';

const UserPage = () => {
    const token = facade.getToken();
	let isUser = false;

	if (token != null)
        isUser = facade.getRoles();

    return (
        <div>
            {isUser != "user" ? "You are not a user." : (
                <UserRentals />
            )}
        </div>
    )
}

export default UserPage