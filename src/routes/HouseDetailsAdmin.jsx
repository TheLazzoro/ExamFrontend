import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import facade from '../facades/apiFacade';

const HouseDetailsAdmin = () => {
    const location = useLocation();
    const { houseData } = location.state;
    const [tenantsArr, setTenantsArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {

        async function populateHouses() {
            await facade.getTenantsByHouseId(houseData.id).then(res => {
                setTenantsArr(res.tenants);
                console.log(res.tenants);
            }).catch(e => {
                console.log(e);
            });
            setIsLoading(false);

        }
        populateHouses();

    }, [isLoading]);

    return (
        <div>
            <h2>{houseData.address}, {houseData.city}</h2>
            <h3>Rooms: {houseData.numberOfRooms}</h3>
            <h3>Tenants:</h3>
            <div>
                {tenantsArr == "" ? null : tenantsArr.map(tenant => <li>{tenant.name}</li>)}
            </div>
        </div>
    )
}

export default HouseDetailsAdmin