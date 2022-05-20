import React, {useEffect, useRef} from "react";
import axios from "axios";
import apiClient from "../services/api";

function Modal(props){
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const ref = useRef();

    function setNameFromInput(){
        setName(document.getElementById("name").value);
    }
    function setEmailFromInput(){
        setEmail(document.getElementById("email").value);
    }

    function reserve(){
        axios.post('http://localhost:8000/api/reservation/create', {
            name: name,
            mail: email,
            date: props.date,
            hour: props.hour
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        sendMail().then(r => {
            ref.current.click();
        });
    }

    async function sendMail() {
        try {
            await apiClient.get('/sanctum/csrf-cookie');
            await apiClient.post('/api/sendMail', {
                name: name,
                mail: email,
                date: props.date,
                hour: props.hour
            });
            setMessage('Votre réservation a bien été prise en compte, vous recevrez un mail de confirmation.');
        } catch (error) {
            setMessage('Une erreur est survenue, veuillez réessayer plus tard.');
            console.log("ERROR:: ", error.response);
        }
    }

    return(
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
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
                <div className="modal-dialog modal-dialog-centered">
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
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => reserve()}>Valider</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
            <button ref={ref} type="button" className="btn btn-secondary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal3">Valider</button>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel3">Récapitulatif</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
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