import React, { useState } from 'react'
import facade from '../facades/apiFacade'

class House {
	constructor(address, city, rooms) {
		this.address = address;
		this.city = city;
		this.rooms = rooms;
	}
}

const AdminPage = () => {
	const [address, setAddress] = useState([]);
	const [city, setCity] = useState([]);
	const [rooms, setRooms] = useState([]);

	const token = facade.getToken();
	let isAdmin = false;

	if (token != null)
		isAdmin = facade.getRoles();

	const onAddressChange = (evt) => {
		setAddress(evt.target.value);
		console.log(evt.target.value);
	}

	const onCityChange = (evt) => {
		setCity(evt.target.value);
		console.log(evt.target.value);
	}

	const onRoomsChange = (evt) => {
		setRooms(evt.target.value);
		console.log(evt.target.value);
	}

	const createHouse = async () => {
        const house = {
            address: address,
            city: city,
			numberOfRooms: rooms
        }

        const res = await facade.createHouse(house).then();
        console.log(res);
    }

	return (
		<div>
			{isAdmin != "admin" ? <p>You are not admin.</p> : (
				<div>
					Hello admin
					<p />
					<input placeholder='Address' onChange={onAddressChange}></input>
					<p />
					<input placeholder='City' onChange={onCityChange}></input>
					<p />
					<input placeholder='Number of Rooms' onChange={onRoomsChange}></input>
					<p />
					<button onClick={createHouse}>Create House</button>
				</div>
			)}
		</div>
	)
}

export default AdminPage