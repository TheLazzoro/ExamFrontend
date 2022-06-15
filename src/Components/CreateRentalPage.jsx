import React, { useEffect, useState } from 'react'
import facade from '../facades/apiFacade';

const CreateRentalPage = () => {
    const [housesArr, setHousesArr] = useState([]);
    const [personArr, setPersonArr] = useState([]);
    const [tenantsArr, setTenantsArr] = useState([]);
    const [contactPerson, setContactPerson] = useState([]);
    const [isLoadingHouses, setIsLoadingHouses] = useState([]);
    const [selectedHouse, setSelectedHouse] = useState([]);
    const [priceAnnual, setPriceAnnual] = useState([]);
    const [deposit, setDeposit] = useState([]);

    useEffect(() => {

        async function populateHouses() {
            await facade.getAllHouses().then(res => {
                setHousesArr(res.houses);
                console.log(res.houses);
            });

            await facade.getAllTenants().then(res => {
                setPersonArr(res.tenants);
                console.log(res.tenants);
            });

            setIsLoadingHouses(false);

        }
        populateHouses();

    }, [isLoadingHouses]);


    const onSelectHouse = (evt) => {
        const selectedIndex = evt.target.selectedIndex;
        setSelectedHouse(housesArr[selectedIndex]);
    }

    const onChangeAnnualPrice = (evt) => {
        setPriceAnnual(evt.target.value);
    }

    const onChangeDeposit = (evt) => {
        setDeposit(evt.target.value);
    }

    const onAddTenant = (tenant) => {
        setTenantsArr(oldArray => [...oldArray, tenant]);
    }

    const onSetContactPerson = (tenant) => {
        setContactPerson(tenant);
    }

    const onCreateRentalAgreement = async () => {
        const tenants = {
            tenants: tenantsArr
        }

        const rental = {
            house: selectedHouse,
            startDate: "2022-06-15",
            endDate: "2023-06-15",
            priceAnnual: priceAnnual,
            deposit: deposit,
            contactPerson: contactPerson,
            tenants: tenants,
        }

        console.log(rental);

        await facade.createRental(rental)
    }

    return (
        <div>
            <p />
            Select House:
            <select name='dropdownFood' onChange={onSelectHouse}>
                {!housesArr ? "" : housesArr.map(el => <option id={el.id}>{el.address}, {el.city}</option>)}
            </select>
            <p />
            <div className='split left' >
                <table style={{ width: "300px" }}>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    {personArr.map((el) =>
                        <tr>
                            <td>{el.name}</td>
                            <td><button onClick={() => onAddTenant(el)}>Add</button>
                                <button onClick={() => onSetContactPerson(el)}>Set Contact</button></td>
                        </tr>)}
                </table>
            </div>
            <div className='split right' >
                <table style={{ width: "300px" }}>
                    <tr>
                        <th>Name</th>
                    </tr>
                    {tenantsArr.map((el) =>
                        <tr>
                            <td>{el.name}</td>
                        </tr>)}
                </table>
            </div>
            <p />
            <input placeholder='Annual Price (DKK)' onChange={onChangeAnnualPrice}></input>
            <p />
            <input placeholder='Deposit (DKK)' onChange={onChangeDeposit}></input>
            <p />
            <button onClick={onCreateRentalAgreement}>Create Rental Agreement</button>
        </div>
    )
}

export default CreateRentalPage