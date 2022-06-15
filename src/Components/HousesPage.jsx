import React from 'react'
import { useState, useEffect } from 'react';
import facade from '../facades/apiFacade';
import HouseCard from './HouseCard';


const HousesPage = () => {
    const [housesArr, setHousesArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function populateHouses() {
            await facade.getAllHouses().then(res => {
                setHousesArr(res.houses);
                console.log(res.houses);
            }).catch(e => {
                console.log(e);
            });
            setIsLoading(false);

        }
        populateHouses();

    }, [isLoading]);

    return (
        <div>
            <div >{housesArr == "" ? null : housesArr.map(el => <HouseCard house={el} />)}</div>
        </div>
    )
}

export default HousesPage