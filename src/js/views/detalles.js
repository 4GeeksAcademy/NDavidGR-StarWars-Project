import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detalles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let personaje = store.people.find(item => item.name == params.nombre) 
	let planeta = store.planets.find(item => item.name == params.nombre)
	let starship = store.starships.find(item => item.name == params.nombre)

	return (
		<div className="jumbotron">
			<div>
				<div className="d-flex">
					
					<div className="border-end border-danger border-1  w-50">  
						<img src="..."  />
					</div>
					<div>
						<h1>{personaje?.name || planeta?.name || starship?.name}</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo. Sit amet cursus sit amet. Egestas egestas fringilla phasellus faucibus. Tristique senectus et netus et malesuada fames ac turpis. Diam in arcu cursus euismod quis. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Odio morbi quis commodo odio aenean sed adipiscing. Nunc sed augue lacus viverra vitae.</p>
					</div>
					
				</div>

				<div className="d-flex border-top border-danger border-1" >
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
					<div className="border-end border-danger border-1">
						<h5>Property Name</h5>
						<p>Property</p>

					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
