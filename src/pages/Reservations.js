import {useEffect, useState} from "react";
import axios from "axios";
import Moment from 'moment';

function Reservations(){
    const [json, setJson] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [id, setId] = useState(0);

    //call api
    useEffect(() => {
        axios.get('http://localhost:8000/api/reservations')
            .then(res => {
                setJson(res.data);
                setRefresh(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [refresh]);

    //reservation crud
    function updateReservation(){
        let date = document.getElementById('upDate').value;
        date = Moment(date).format('DD/MM/YYYY');
        
        axios.post('http://localhost:8000/api/reservation/update', {
            id: document.getElementById('upId').value,
            date: date,
            hour: document.getElementById('upHour').value
        })
            .then(res => {
                console.log(res);
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }
    function removeReservation(){
        axios.post('http://localhost:8000/api/reservation/delete', {
            id: id
        })
            .then(res => {
                console.log(res);
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }
    function createReservation(){

        let date = document.getElementById('newDate').value;
        date = Moment(date).format('DD/MM/YYYY');

        axios.post('http://localhost:8000/api/reservation/create', {
            name: document.getElementById('newName').value,
            mail: document.getElementById('newMail').value,
            date: date,
            hour: document.getElementById('newHour').value
        })
            .then(res => {
                console.log(res);
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }

    //table data
    function getData(){
        let data;
        data = json.map(item => {
            return(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.hour}</td>
                    <td>
                        <button className="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => setId(item.id)}>Modifier</button>
                        <button className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setId(item.id)}>Annuler</button>
                    </td>
                </tr>
            )
        });
        return data;
    }

    //modals
    function getModals(){
        return(
            <>
                {/*modal nouvelle réservation*/}
                <div className="modal fade" id="newModal" tabIndex="-1" aria-labelledby="newModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="newModalLabel">Créer une réservation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label htmlFor="newName">Nom Complet</label>
                                    <input type="text" id="newName"/>
                                </div>
                                <div>
                                    <label htmlFor="newMail">Email</label>
                                    <input type="email" id="newMail"/>
                                </div>
                                <div>
                                    <label htmlFor="newDate">Date</label>
                                    <input type="date" id="newDate"/>
                                </div>
                                <div>
                                    <label htmlFor="newHour">Heure</label>
                                    <input type="time" id="newHour"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => createReservation()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*modal update réservation*/}
                <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="updateModalLabel">Modifier une réservation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" id="upId" value={id}/>
                                <div>
                                    <label htmlFor="upDate">Date</label>
                                    <input type="date" id="upDate"/>
                                </div>
                                <div>
                                    <label htmlFor="upHour">Heure</label>
                                    <input type="time" id="upHour"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => updateReservation()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*modal delete réservation*/}
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Annuler une réservation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Etes-vous sur de vouloir annuler la réservation ?</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => removeReservation(id)} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        }

return(
    <>
        <h1>Liste des Réservations</h1>
        <table className="table table-striped text-center align-middle w-50 mx-auto">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {getData()}
            </tbody>
        </table>
        {getModals()}
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newModal">Nouvelle réservation</button>
    </>
)
}

export default Reservations;