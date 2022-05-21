import React from "react";


function employeeCard(props) {
    return (
        <div className="card">
            <img className="card-img-top" src="..." alt="Photo"></img>
            <div className="card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <p className="card-text">texte descriptif de la personne qui sera en charge de vous et ce qu'elle peut proposer</p>
                <a href="#" className="btn btn-primary ">Réserver une heure</a>
            </div>
        </div>
    );
}

export default employeeCard;