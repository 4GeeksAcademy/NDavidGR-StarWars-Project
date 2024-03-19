const getState = ({ getStore, getActions, setStore }) => {
	let backendUrl = "https://www.swapi.tech/api";



	return {
		store: {
			people: [],

			planets: [],

			starships: [],

			favorites: [],
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

			updateFavorites: (name, uid, category) => {
				let store = getStore()
				let favorite = {
					name: name,
					uid: uid,
					category: category
				}
				let alreadyInFavorites = store.favorites.find(item => item.name == name && item.category == category)
				if (alreadyInFavorites) {
					let newFavorites = store.favorites.filter(item => item.uid != uid && item.category != category)
					setStore({
						favorites: newFavorites
					})
				} else {
					store.favorites.push(favorite)
					setStore(store)
				}




			}
		},
	};
};

export default getState;
