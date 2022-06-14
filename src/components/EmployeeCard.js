import React from "react";
import {Link} from "react-router-dom";
import PlaceHolder from "./assets/PlaceHolder.jpg"

function employeeCard(props) {
    return (
        // Card Employé avec photo/nom/description et bouton pour réserver 
        // mise d'une taille de card (col-3) pour avoir une remise à la ligne auto après 4 employées
        <div className="col-2 my-4 mx-3">
            <div className="card mx-2 borderNeon cardBg text-white">
                <img className="card-img-top imageMH" src={PlaceHolder} alt="Photo"></img>
                <div className="card-body px-4">
                    <h5 className="card-title text-center">{props.employee.name}</h5>
                    <p className="card-text">{props.employee.description}</p>
                    <Link to="/booking" state={props.employee.name} className="btn buttonEmpBG text-white d-flex justify-content-center">Réserver une heure</Link>
                </div>
            </div>
        </div>
    );
}

export default employeeCard;