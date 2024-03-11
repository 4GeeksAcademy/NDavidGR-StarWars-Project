const getState = ({ getStore, getActions, setStore }) => {
	let backendUrl = "https://www.swapi.tech/api";
  
	return {
	  store: {
		people: [],
  
		planets: [],
  
		starships: [],
	  },
	  actions: {
		getPeople: () => {
		  fetch(backendUrl + "/people?page=1&limit=100")
			.then((response) => response.json())
			.then((data) => setStore({ people: data.results }));
		},
  
		getPlanets: () => {
		  fetch(backendUrl + "/planets?page=1&limit=100")
			.then((response) => response.json())
			.then((data) => setStore({ planets: data.results }));
		},
  
		getStarships: () => {
		  fetch(backendUrl + "/starships?page=1&limit=100")
			.then((response) => response.json())
			.then((data) => setStore({ starships: data.results }));
		},
	  },
	};
  };
  
  export default getState;
  