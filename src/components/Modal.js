import React, {useEffect} from "react";

function Modal(props){
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    function setNameFromInput(){
        setName(document.getElementById("name").value);
    }
    function setEmailFromInput(){
        setEmail(document.getElementById("email").value);
    }

    //simulation function email
    //0 = success, 1 = error
    const number = 1;
    useEffect(() => {
        if(number === 0){
            setMessage(
                <div>
                    <p>Merci, {name.split(' ')[0]}</p>
                    <p>Votre réservation est enregistrée</p>
                </div>
            );
        }else{
            setMessage(
                <div>
                    <p>Désole, {name.split(' ')[0]}, une erreur est survenue</p>
                    <p>Votre réservation n'a pas été enregistrée</p>
                </div>
            );
        }
    }, [name, email]);
    //fin simulation function email

    return(
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Récapitulatif</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {props.data.date}
                            {props.data.hour}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Valider</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Récapitulatif</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body d-flex flex-column">
                            <label htmlFor="name">Nom complet</label>
                            <input type="text" id="name" onChange={() => setNameFromInput()}/>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={() => setEmailFromInput()}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal3">Valider</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel3">Récapitulatif</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal2" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {message}
                            <p>email de destination: {email}</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;