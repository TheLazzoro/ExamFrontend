import React, { useState } from 'react'
import facade from '../facades/apiFacade';

const CreateHousePage = () => {
    const [address, setAddress] = useState([]);
	const [city, setCity] = useState([]);
	const [rooms, setRooms] = useState([]);


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
            <p />
            <input placeholder='Address' onChange={onAddressChange}></input>
            <p />
            <input placeholder='City' onChange={onCityChange}></input>
            <p />
            <input placeholder='Number of Rooms' onChange={onRoomsChange}></input>
            <p />
            <button onClick={createHouse}>Create House</button>
        </div>
    )
}

export default CreateHousePage