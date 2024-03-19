import React from "react";
import { Link } from "react-router-dom";


/* <Tarjeta nombre = { persona.name } mass = { persona.mass} gender = { persona.gender} height={persona.height} />

{
    nombre: persona.name,
    mass: persona.mass,
    gender: persona.gender,
    height: personalbar.height
} */

export const Tarjeta = ({ item, categoria, actions }) => {
    //     item = {
    //     nombre: persona.name,
    //     mass: persona.mass,
    //     gender: persona.gender,
    //     height: personalbar.height
    //      }


    return <div>

        <div className="card" style={{ width: "18rem" }}>
            <img src="https://fakeimg.pl/600x400" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name} </h5>

                <Link to={"/detalles/" + categoria + "/" + item.name} className="btn btn-primary">more info</Link>
                <button onClick={() => actions.updateFavorites(item.name, item.uid, categoria)} className="btn btn-danger ms-2"> ♥ </button>
            </div>
        </div>

    </div>


}


