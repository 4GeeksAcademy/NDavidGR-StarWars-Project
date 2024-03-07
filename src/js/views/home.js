import React, { useContext,  } from "react";
import { Navbar } from "../component/navbar";
import { Planeta } from "../component/tarjetaPlanetas";
import { Vehiculos } from "../component/tarjetaVehiculos";
import { Tarjeta } from "../component/tarjeta";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);


	console.log("Lista de vehiculos",store.vehicles);
	console.log("Lista de personas",store.people);
	console.log("Lista de planetas",store.planets);



	return <div>		
		<div className="d-flex overflow-scroll">
			{store.people.map(persona => <Tarjeta item = { persona } category = 'personas' />)}
		</div>
		
		




			{/* 
			Esto es un ejemplo:
			Context {
				store{
						people : [
	
							{
								name: "Manue",
								mass: "280",
								gender: "M"
							}, 
								
							{
								name: "David",
								mass: "76",
								gender: "M"
							}
	
						]
				},

				actions: {

				}
			}
			*/}
	
	</div>

}
	
