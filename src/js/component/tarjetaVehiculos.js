import React from "react";
import { Link } from "react-router-dom";

/* {store.people.map(vehicles => <tarjetaVehiculos nombre = { vehicles.name } model = { vehicles.model} passengers = { vehicles.passengers} vehicle_class = { vehicles.vehicle_class}/>

{
    nombre: persona.name,
    mass: persona.mass,
    gender: persona.gender,
    height: personalbar.height
} */

export const Vehiculos = (props) => {
//     props = {
    //     nombre: persona.name,
    //     mass: persona.mass,
    //     gender: persona.gender,
    //     height: personalbar.height
//      }


    return <div> 
	
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {props.nombre}</h5>
                        <p className="card-text">Modelo: {props.model}</p>
                        <p className="card-text">N° de Pasajeros: {props.passengers}</p>
                        <p className="card-text">Clase: {props.eye_color}</p>
                        <Link to={"/detalles/vehicles/" + props.vehicle_class} className="btn btn-primary">more info</Link>
                        <a href="#" className="btn btn-danger ms-5"> ♥ </a>
                    </div>
                </div>

	</div>

   
}	