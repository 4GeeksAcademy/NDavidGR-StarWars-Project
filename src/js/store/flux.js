const getState = ({ getStore, getActions, setStore }) => {
	let backendUrl = "https://www.swapi.tech/api"
	
	return {
	  store: {
		  people: [
			  {
				name: "Luke",
				gender: "Male",
				hair_color: "Blond",
				eye_color: "Blue",
			  },
			  {
				name: "Leia",
				gender: "Female",
				hair_color: "Brown",
				eye_color: "Brown",
			  },
			  
			],
			
			planets: [
			  {
				name: "Tatooine",
				population: 200000,
				gravity: "1 standard",
				terrain: "Desert",
			  },
			  {
				name: "Coruscant",
				population: 1000000000,
				gravity: "1 standard",
				terrain: "Cityscape",
			  },
			  
			],
			
			starships: [
			  {
				name: "Corvette",
				manufacturer: "Corellian Engineering Corporation",
				passengers: 6,
				crew: "1 pilot, 1 co-pilot, 4 gunners",
			  },
			  {
				name: "X-wing",
				manufacturer: "Incom Corporation",
				passengers: 1,
				crew: "1 pilot",
			  },
			  
			],
			
	  },
	  actions: {
		getPeople: () => {
			fetch(backendUrl + "/people?page=1&limit=100")
			.then(response => response.json())
			.then(data => setStore({people: data.results}))   
		},

		getPlanets: () => {
			fetch(backendUrl + "/planets?page=1&limit=100")
			.then(response => response.json())
			.then(data => setStore({planets: data.results}))   
		},

		getStarships: () => {
			fetch(backendUrl + "/starships?page=1&limit=100")
			.then(response => response.json())
			.then(data => setStore({starships: data.results}))   
		}
		
	  },
	};
  };
  
  export default getState;
  