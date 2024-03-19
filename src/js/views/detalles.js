import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detalles = props => {
	const { store, actions } = useContext(Context);
	const [itemInfo, setItemInfo] = useState()
	const params = useParams();
	let item = store[params.categoria].find((x) => x.name == params.nombre)

	useEffect(() => {
		fetch(item.url)
			.then(resp => resp.json())
			.then(data => setItemInfo(data.result.properties))
			.catch(error => console.log(error))
	}, [])



	return (
		<div className="jumbotron">
			<div>
				<div className="d-flex">

					<div className="col-md-6 border-end border-danger border-1 ">
						<img src="https://placehold.co/1200x600?text=Image\nHere" className="img-fluid" />
					</div>
					<div className="col-md-6 border-end border-danger border-1  w-50 col-md-1 custom-div">
						<h1 className="ms-4">{item.name}</h1>
						<p className="ms-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique sollicitudin nibh sit amet commodo. Sit amet cursus sit amet. Egestas egestas fringilla phasellus faucibus. Tristique senectus et netus et malesuada fames ac turpis. Diam in arcu cursus euismod quis. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Odio morbi quis commodo odio aenean sed adipiscing. Nunc sed augue lacus viverra vitae.</p>
					</div>

				</div>

				<div className="d-flex border-top border-danger border-1" >
					<div className="col-2 custom-div border-end border-bottom border-danger border-1 p-3 ">
						<h5>{itemInfo?.hair_color ? "Hair Color:" : itemInfo?.population ? "Population:" : itemInfo?.manufacturer ? "Manufacturer:" : "Item information loading"}</h5>
						<p>{itemInfo?.hair_color || itemInfo?.population || itemInfo?.manufacturer}</p>

					</div>
					<div className="col-1 border-end border-bottom border-danger border-1 p-3">
						<h5>{itemInfo?.height ? "Height:" : itemInfo?.diameter ? "Diameter:" : itemInfo?.model ? "Model:" : "Item information loading"}</h5>
						<p>{itemInfo?.height || itemInfo?.diameter || itemInfo?.model}</p>

					</div>
					<div className="col-1 border-end border-bottom border-danger border-1 p-3">
						<h5>{itemInfo?.mass ? "Mass:" : itemInfo?.rotation_period ? "Rotation period:" : itemInfo?.starship_class ? "Class:" : "Item information loading"}</h5>
						<p>{itemInfo?.skin_color || itemInfo?.rotation_period || itemInfo?.starship_class}</p>

					</div>
					<div className="col-2 border-end border-bottom border-danger border-1 p-3">
						<h5>{itemInfo?.skin_color ? "Skin color:" : itemInfo?.orbital_period ? "Orbital period:" : itemInfo?.cost_in_credits ? "Cost:" : "Item information loading"}</h5>
						<p>{itemInfo?.skin_color || itemInfo?.orbital_period || itemInfo?.cost_in_credits}</p>

					</div>
					<div className="col-2 border-end border-bottom border-danger border-1 p-3">
						<h5>{itemInfo?.eye_color ? "Eye color:" : itemInfo?.gravity ? "Gravity:" : itemInfo?.length ? "Length:" : "Item information loading"}</h5>
						<p>{itemInfo?.eye_color || itemInfo?.gravity || itemInfo?.length}</p>

					</div>
					<div className="col-2 border-end border-bottom border-danger border-1 p-3">
						<h5>{itemInfo?.birth_year ? "Birth year:" : itemInfo?.climate ? "Climate:" : itemInfo?.crew ? "Crew:" : "Item information loading"}</h5>
						<p>{itemInfo?.birth_year || itemInfo?.climate || itemInfo?.crew}</p>

					</div>
					<div className="col-2 border-end border-bottom border-danger border-1 p-3">
						<h5>{itemInfo?.gender ? "Gender:" : itemInfo?.terrain ? "Terrain:" : itemInfo?.passengers ? "Passengers:" : "Item information loading"}</h5>
						<p>{itemInfo?.gender || itemInfo?.terrain || itemInfo?.passengers}</p>

					</div>
				</div>
			</div>
			<Link to="/">
				<span className="mt-4 ms-4 btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
