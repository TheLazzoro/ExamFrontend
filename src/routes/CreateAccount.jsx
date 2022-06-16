import React from 'react'
import { useState } from "react";
import "../App.css";
import { Outlet, Link } from "react-router-dom";
import facade from '../facades/apiFacade';
import { linkStyleUnderline } from '../stylesReact';

const CreateAccount = () => {
    const init = { username: "", password: "", repeatedPassword: "" };
    const [userCredentials, setUserCredentials] = useState(init);
    const [tenantCredentials, setTenantCredentials] = useState(init);
    const [errorText, setErrorText] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const performCreateUser = (evt) => {
        evt.preventDefault();

        if (userCredentials.password === userCredentials.repeatedPassword) {
            setIsLoading(true);
            facade.createUser(userCredentials.username, userCredentials.password, tenantCredentials.name, tenantCredentials.phone, tenantCredentials.job).then((res) => {
                setErrorText("");
            }).catch(e => {
                if (e.status === 409) {
                    setErrorText("Username already exists.");
                } else {
                    setErrorText("Unknown error.");
                }
            }).finally(() => {
                setIsLoading(false);
            });

        } else {
            setErrorText("Passwords do not match.");
        }
    };
    const onChange = (evt) => {
        setUserCredentials({
            ...userCredentials,
            [evt.target.id]: evt.target.value,
        });
    };
    const onChangeTenantDetails = (evt) => {
        setTenantCredentials({
            ...tenantCredentials,
            [evt.target.id]: evt.target.value,
        });
    };


    return (
        <header className="App-header" >
            <a>Create User</a>
            <p></p>
            <form onChange={onChange}>
                <div>
                    <input placeholder="Username" id="username" />
                </div>
                <div>
                    <input placeholder="Password" type="password" id="password" />
                </div>
                <div>
                    <input placeholder="Repeat Password" type="password" id="repeatedPassword" />
                </div>
                <p />

            </form>
            <form onChange={onChangeTenantDetails}>
                <div>
                    <input placeholder="Full Name" type="input" id="name" />
                </div>
                <div>
                    <input placeholder="Phone" type="input" id="phone" />
                </div>
                <div>
                    <input placeholder="Job" type="input" id="job" />
                </div>
                <div>
                    <button onClick={performCreateUser}>Create User</button>
                </div>
            </form>
            <div >
                {!isLoading ? (<p id='lblError' style={{ color: "#f77" }}>{errorText}</p>) : (<div className="loader">.</div>)}
            </div>
            <hr />
            <Link to="/" style={linkStyleUnderline}>Cancel</Link>
            <Outlet />

        </header>
    )
}

export default CreateAccount