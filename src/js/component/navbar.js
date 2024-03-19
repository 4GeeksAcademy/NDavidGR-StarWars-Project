import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-2 ms-5">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" width="70" alt="" />
				<h1 className="title fw-bold"> StarWars Blog </h1>
			<div className="ml-auto">
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favs
					</button>
					<ul class="dropdown-menu">
						<li>
							<h4>People</h4>
							{store.favorites.filter(item => item.category == 'people').map(item =>
								<div>
									{item.name}
								</div>
							)

							}
						</li>
						<li>
							<h4>Planets</h4>
							{store.favorites.filter(item => item.category == 'planets').map(item =>
								<div>
									{item.name}
								</div>
							)}
						</li>
						<li>
							<h4>Starships</h4>
							{store.favorites.filter(item => item.category == 'starships').map(item =>
								<div>
									{item.name}
								</div>
							)}

						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
};
