import {useEffect, useState} from "react";
import axios from "axios";

function Hours(){
    const [refresh, setRefresh] = useState(false);
    const [hours, setHours] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8000/api/hours')
            .then(res => {
                setHours(res.data);
                setRefresh(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [refresh]);

//hour crud
    function updateHour(){
        axios.post('http://localhost:8000/api/hour/update', {
            id: document.getElementById('upId').value,
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
    function removeHour(){
        axios.post('http://localhost:8000/api/hour/remove', {
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
    function addHour(){

        axios.post('http://localhost:8000/api/hour/create', {
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

    //hour table
    function getHours(){
        let select;
        select = hours.map(hour => {
            return(
                <tr>
                    <td key={hour.id} value={hour.id}>{hour.name}</td>
                    <td>
                        <button className="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => setId(hour.id)}>Modifier</button>
                        <button className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setId(hour.id)}>Supprimer</button>
                    </td>
                </tr>
            )
        })
        return select
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
                                <h5 className="modal-title" id="newModalLabel">Ajouter une heure</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label htmlFor="newHour">Heure</label>
                                    <input type="time" id="newHour"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => addHour()} data-bs-dismiss="modal">Save changes</button>
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
                                <h5 className="modal-title" id="updateModalLabel">Modifier une heure</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" id="upId" value={id}/>
                                <div>
                                    <label htmlFor="upHour">Heure</label>
                                    <input type="time" id="upHour"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => updateHour()} data-bs-dismiss="modal">Save changes</button>
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
                                <h5 className="modal-title" id="deleteModalLabel">Supprimer une heure</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Etes-vous sur de vouloir supprimer l'heure ?</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => removeHour()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <h1>Liste des heures</h1>
            <table className="table table-striped w-25 mx-auto">
                <thead>
                <tr>
                    <th>Heures</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {getHours()}
                </tbody>
            </table>
            {getModals()}
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newModal">Ajouter une heure</button>
        </>
    )
}

export default Hours;