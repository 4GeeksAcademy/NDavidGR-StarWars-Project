import React from "react";
import { Link } from "react-router-dom";

/* <TarjetaPlanetas nombre = { planets.name } diameter = { planets.diameter} climate = { planets.climate} terrain = { planets.terrain}/>

{
    nombre: persona.name,
    mass: persona.mass,
    gender: persona.gender,
    height: personalbar.height
} */

export const Planeta = (props) => {
//     props = {
    //     nombre: planets.name,
    //     diameter: planets.diameter,
    //     climate: planets.climate,
    //     terrain: planets.terrain
//      }


    return <div> 
	
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://picsum.photos/400/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Planeta: {props.nombre}</h5>
                        <p className="card-text">Diámetro: {props.diameter}</p>
                        <p className="card-text">Clima: {props.climate}</p>
                        <p className="card-text">Terreno: {props.terrain}</p>
                        <Link to={"/detalles/planets/" + props.nombre} className="btn btn-primary">more info</Link>
                        <a href="#" className="btn btn-danger ms-5"> ♥ </a>
                    </div>
                </div>

	</div>

   
}	


