import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import facade from '../facades/apiFacade'
import { linkStyle } from '../stylesReact';

class House {
	constructor(address, city, rooms) {
		this.address = address;
		this.city = city;
		this.rooms = rooms;
	}
}

const AdminPage = () => {
	const token = facade.getToken();
	let isAdmin = false;

	if (token != null)
		isAdmin = facade.getRoles();


	return (
		<div>
			{isAdmin != "admin" ? <p>You are not admin.</p> : (
				<div>
					<nav
						style={{
							borderBottom: "solid 1px",
							paddingBottom: "1rem",
						}}
					>
						<div className="link-container">
							<Link to="/Admin/Houses" style={linkStyle}>Houses</Link> |{" "}
							<Link to="/Admin/CreateHouse" style={linkStyle}>Create House</Link> |{" "}
							<Link to="/Admin/CreateRental" style={linkStyle}>Create Rental Agreement</Link> |{" "}
						</div>
						<Outlet />
					</nav>
				</div>
			)}
		</div>
	)
}

export default AdminPage