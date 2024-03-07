const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			planets: [],
			vehicles: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeopleData: (url) => {

					fetch(url).then(res => res.json()).then(data => {

						let siguiente_url = data.next

						if (siguiente_url != null) {
							getActions().loadPeopleData(siguiente_url)
						}
						
						setStore({ "people": [...getStore().people ,...data.results] })
						
					})
			},

			loadPlanetsData: (url) => {

				fetch(url).then(res => res.json()).then(data => {

					let siguiente_url = data.next

					if (siguiente_url != null) {
						getActions().loadPlanetsData(siguiente_url)
					}
					
					setStore({ "planets": [...getStore().planets ,...data.results] })
					
				})
		},

		loadVehiclesData: (url) => {

			fetch(url).then(res => res.json()).then(data => {

				let siguiente_url = data.next

				if (siguiente_url != null) {
					getActions().loadVehiclesData(siguiente_url)
				}
				
				setStore({ "vehicles": [...getStore().vehicles ,...data.results] })
				
			})
	},
			loadSomeData: () => {
				getActions().loadPeopleData("https://swapi.dev/api/people/")
				getActions().loadPlanetsData("https://swapi.dev/api/planets/")
				getActions().loadVehiclesData("https://swapi.dev/api/vehicles/")
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
			}
		}
	};
};

export default getState;
