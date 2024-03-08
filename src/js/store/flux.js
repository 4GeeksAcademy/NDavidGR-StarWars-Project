const getState = ({ getStore, getActions, setStore }) => {
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
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		loadPeopleData: (url) => {
		  fetch(url)
			.then((res) => res.json())
			.then((data) => {
			  let siguiente_url = data.next;
  
			  if (siguiente_url != null) {
				getActions().loadPeopleData(siguiente_url);
			  }
  
			  setStore({ people: [...getStore().people, ...data.results] });
			});
		},
  
		loadPlanetsData: (url) => {
		  fetch(url)
			.then((res) => res.json())
			.then((data) => {
			  let siguiente_url = data.next;
  
			  if (siguiente_url != null) {
				getActions().loadPlanetsData(siguiente_url);
			  }
  
			  setStore({ planets: [...getStore().planets, ...data.results] });
			});
		},
  
		loadVehiclesData: (url) => {
		  fetch(url)
			.then((res) => res.json())
			.then((data) => {
			  let siguiente_url = data.next;
  
			  if (siguiente_url != null) {
				getActions().loadVehiclesData(siguiente_url);
			  }
  
			  setStore({ starships: [...getStore().vehicles, ...data.results] });
			});
		},
		loadSomeData: () => {
		  getActions().loadPeopleData("https://swapi.dev/api/people/");
		  getActions().loadPlanetsData("https://swapi.dev/api/planets/");
		  getActions().loadVehiclesData("https://swapi.dev/api/starships/");
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
	  },
	};
  };
  
  export default getState;
  