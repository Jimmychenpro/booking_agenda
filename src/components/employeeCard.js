import React from "react";


function employeeCard(props) {
    return (
        // Card Employé avec photo/nom/description et bouton pour réserver 
        // mise d'une taille de card (col-3) pour avoir une remise à la ligne auto après 4 employées
        <div className="col-3 my-4 ">
            <div className="card mx-2 borderNeon cardBg text-white">
                <img className="card-img-top imageMH" src="..." alt="Photo"></img>
                <div className="card-body px-4">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text">texte descriptif de la personne qui sera en charge de vous et ce qu'elle peut proposer</p>
                    <a href="/booking" className="btn buttonEmpBG text-white d-flex justify-content-center">Réserver une heure</a>
                </div>
            </div>
        </div>
    );
}

export default employeeCard;