let currentHouse = null;

function globalsFacade() {

    const getHouse = () => {
		return currentHouse;
	};

    const setHouse = (house) => {
		currentHouse = house;
	};

    return {
        getHouse,
        setHouse
    };
}

const globalsFacade = globalsFacade();
export default facade;