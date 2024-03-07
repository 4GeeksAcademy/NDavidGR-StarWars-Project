import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" width="70" alt="" />
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars Blog</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favoritos</button>
				</Link>
			</div>
		</nav>
		
	);
};
