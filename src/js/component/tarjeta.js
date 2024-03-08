import React from "react";
import { Link } from "react-router-dom";


/* <Tarjeta nombre = { persona.name } mass = { persona.mass} gender = { persona.gender} height={persona.height} />

{
    nombre: persona.name,
    mass: persona.mass,
    gender: persona.gender,
    height: personalbar.height
} */

export const Tarjeta = ({item, categoria} ) => {
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
                        <h5 className="card-title">{item.name} </h5>
                        <p className="card-text">
                            {
                            categoria == "personas" ? "Género: " + item.gender : 
                            categoria == "planetas" ? "Población: " + item.population:
                            "Fabricamente: " + item.manufacturer
                            }
                            </p>
                        <p className="card-text">
                            {
                            categoria == "personas" ? "Color de Cabello: " + item.hair_color : 
                            categoria == "planetas" ? "Gravedad: " + item.gravity:
                            "Capacidad de Pasajeros: " + item.passengers
                            }
                        </p>
                        <p className="card-text">{
                            categoria == "personas" ? "Color de Ojos: " + item.eye_color : 
                            categoria == "planetas" ? "Terreno: " + item.terrain:
                            "tripulación: " + item.crew
                            }</p>
                        <Link to={"/detalles/"+categoria+"/" + item.name} className="btn btn-primary">more info</Link>
                        <a href="#" className="btn btn-danger ms-5"> ♥ </a>
                    </div>
                </div>

	</div>

   
}	


