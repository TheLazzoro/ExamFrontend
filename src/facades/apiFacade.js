import { BASE_URL } from "../Constants";
import jwt from 'jwt-decode'

function handleHttpErrors(res) {
	if (!res.ok) {
		return Promise.reject({ status: res.status, fullError: res.json() });
	}
	return res.json();
}

function apiFacade() {
	const setToken = (token) => {
		localStorage.setItem("jwtToken", token);
	};

	const getToken = () => {
		return localStorage.getItem("jwtToken");
	};

	const getRoles = () => {
		return jwt(getToken()).roles;
	}

	const getName = () => {
		return jwt(getToken()).username;
	}

	const loggedIn = () => {
		const loggedIn = getToken() != null;
		return loggedIn;
	};

	const logout = () => {
		localStorage.removeItem("jwtToken");
	};

	const login = (user, password) => {
		const options = makeOptions("POST", true, {
			username: user,
			password: password,
		});
		return fetch(BASE_URL + "/api/login", options)
			.then(handleHttpErrors)
			.then((res) => {
				setToken(res.token);
			});
	};

	const createUser = (user, password) => {
		const options = makeOptions("POST", true, {
			username: user,
			password: password,
		});
		return fetch(BASE_URL + "/api/create-user", options)
			.then(handleHttpErrors);
	}

	const fetchData = () => {
		const options = makeOptions("GET", true); //True add's the token

		if (getRoles() === "user") {
			return fetch(BASE_URL + "/api/info/user", options).then(handleHttpErrors);
		} else if (getRoles() === "admin") {
			return fetch(BASE_URL + "/api/info/admin", options).then(handleHttpErrors);
		}
	};

	const getAllHouses = () => {
		const options = makeOptions("GET", true); //True add's the token

		return fetch(BASE_URL + "/api/house", options).then(handleHttpErrors);
	}

	const getAllTenants = () => {
		const options = makeOptions("GET", true); //True add's the token

		return fetch(BASE_URL + "/api/tenant", options).then(handleHttpErrors);
	}

	const createHouse = (house) => {
		const options = makeOptions("POST", true, house);

		return fetch(BASE_URL + "/api/house/create", options).then(handleHttpErrors);
	}

	const createRental = (rental) => {
		const options = makeOptions("POST", true, rental);

		return fetch(BASE_URL + "/api/rental/create", options).then(handleHttpErrors);
	}

	const makeOptions = (method, addToken, body) => {
		var opts = {
			method: method,
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
		};
		if (addToken && loggedIn()) {
			opts.headers["x-access-token"] = getToken();
		}
		if (body) {
			opts.body = JSON.stringify(body);
		}
		return opts;
	};
	return {
		makeOptions,
		setToken,
		getToken,
		getRoles,
		getName,
		loggedIn,
		login,
		logout,
		createUser,
		fetchData,
		getAllHouses,
		createHouse,
		createRental,
		getAllTenants,
	};
}

const facade = apiFacade();
export default facade;
