import React from "react";
import { Link } from "react-router-dom";
import { Planeta } from "./tarjetaPlanetas";

/* <Tarjeta nombre = { persona.name } mass = { persona.mass} gender = { persona.gender} height={persona.height} />

{
    nombre: persona.name,
    mass: persona.mass,
    gender: persona.gender,
    height: personalbar.height
} */

export const Tarjeta = ({item, category} ) => {
//     item = {
    //     nombre: persona.name,
    //     mass: persona.mass,
    //     gender: persona.gender,
    //     height: personalbar.height
//      }


    return <div> 
	
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{category == "personas" ? "Nombre: " + item.nombre : category == "planetas" ? "" } </h5>
                        <p className="card-text">Genero: {item.gender}</p>
                        <p className="card-text">Color de cabello: {item.hair_color}</p>
                        <p className="card-text">Color de ojos: {item.eye_color}</p>
                        <Link to={"/detalles/people/" + item.nombre} className="btn btn-primary">more info</Link>
                        <a href="#" className="btn btn-danger ms-5"> ♥ </a>
                    </div>
                </div>

	</div>

   
}	


