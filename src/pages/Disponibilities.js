import {useEffect, useState} from "react";
import axios from "axios";

function Disponibilities(){
    const [day, setDay] = useState('Lundi');
    const [json, setJson] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [hours, setHours] = useState([]);
    const [day_id, setDay_id] = useState(1);
    const [hour_id, setHour_id] = useState(0);
    const [hour, setHour] = useState('');

    //call api
    useEffect(() => {
        axios.get('http://localhost:8000/api/calendar')
            .then(res => {
                setJson(res.data);
                setRefresh(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [refresh]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/hours')
            .then(res => {
                setHours(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function handleDay(day, day_id){
        setDay(day);
        setDay_id(day_id);
    }

    function addDisponibility(){
        axios.post('http://localhost:8000/api/calendar/add', {
            day: day_id,
            hour: hour_id
        })
            .then(res => {
                console.log(res);
                setRefresh(true);
            })
            .catch(err => {
                console.log(err);
            })
    }
    function removeDisponibility(){
        axios.post('http://localhost:8000/api/calendar/remove', {
            day_id: day_id,
            hour: hour
        })
            .then(res => {
                console.log(res);
                setRefresh(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    function getHours(){
        let select;
        select = hours.map(hour => {
            return(
                <option key={hour.id} value={hour.id}>{hour.name}</option>
            )
        })
        return select
    }

    function getTabs(){
        return(
            <ul className="nav nav-tabs d-flex justify-content-around">
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Lundi', 1)}>Lundi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Mardi', 2)}>Mardi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Mercredi', 3)}>Mercredi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Jeudi', 4)}>Jeudi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Vendredi', 5)}>Vendredi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Samedi', 6)}>Samedi</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={() => handleDay('Dimanche', 7)}>Dimanche</a>
            </li>
        </ul>
        )
    }

    function getData(){
        let data;
        Object.keys(json).map(key => {
            if(day === key){
                data = json[day].map(item => {
                    return (<tr key={item.time}>
                            <td>{item.time}</td>
                            <td>
                                <button className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setHour(item.time)}>Supprimer</button>
                            </td>
                    </tr>
                    )
                })
            }
        })
        if(data === undefined){
            data = (<tr>
                <td colSpan="2">Aucune disponibilité</td>
            </tr>)
        }
        return (
            <table className="table table-striped text-center w-50 mx-auto">
                <thead>
                    <tr>
                        <th>Heure</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
    )
    }

    function setHourFromSelect(){
        let hourId = document.getElementById('hour').value;
        setHour_id(hourId);
    }

    //modals
    function getModals(){
        return(
            <>
                {/*modal nouvelle disponibilité*/}
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
                                    <select name="hour" id="hour" onChange={() => setHourFromSelect()}>
                                        {getHours()}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => addDisponibility()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*modal delete disponibility*/}
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
                                <button type="button" className="btn btn-primary" onClick={() => removeDisponibility()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <h1>Liste des Disponibilitées</h1>
            <div className="w-50 mx-auto">
                {getTabs()}
                <button className="btn btn-primary my-2" data-bs-toggle="modal" data-bs-target="#newModal">Ajouter une dipsonibilitée</button>
                {getData()}
                {getModals()}
            </div>
        </>
    )
}

export default Disponibilities;