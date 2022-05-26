import {useEffect, useState} from "react";
import axios from "axios";

function Employees(){
    const [id, setId] = useState('');
    const [json, setJson] = useState([]);
    const [refresh, setRefresh] = useState(false);

    //api
    useEffect(() => {
        axios.get('http://localhost:8000/api/employees')
            .then(res => {
                setJson(res.data);
                setRefresh(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [refresh]);

    //crud
    function updateEmployee(){
        axios.post('http://localhost:8000/api/employees/update', {
            id: document.getElementById('upId').value,
            name: document.getElementById('upName').value,
            desc: document.getElementById('upDesc').value,
        })
            .then(res => {
                console.log(res);
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }
    function removeEmployee(){
        axios.post('http://localhost:8000/api/employees/remove', {
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
    function createEmployee(){
        axios.post('http://localhost:8000/api/employees/create', {
            name: document.getElementById('name').value,
            desc: document.getElementById('desc').value,

        })
            .then(res => {
                console.log(res);
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }

    //data
    function getData(){
        let data;
        data = json.map(item => {
            return(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                        <button className="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => setId(item.id)}>Modifier</button>
                        <button className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setId(item.id)}>Supprimer</button>
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
                                <h5 className="modal-title" id="newModalLabel">Ajouter une employée</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label htmlFor="name">Nom</label>
                                    <input type="text" id="name"/>
                                </div>
                                <div>
                                    <label htmlFor="desc">Description</label>
                                    <textarea name="desc" id="desc" cols="50" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => createEmployee()} data-bs-dismiss="modal">Save changes</button>
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
                                <h5 className="modal-title" id="updateModalLabel">Modifier une employée</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" id="upId" value={id}/>
                                <div>
                                    <label htmlFor="upName">Nom</label>
                                    <input type="text" id="upName"/>
                                </div>
                                <div>
                                    <label htmlFor="upDesc">Description</label>
                                    <textarea name="upDesc" id="upDesc" cols="50" rows="10"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => updateEmployee()} data-bs-dismiss="modal">Save changes</button>
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
                                <h5 className="modal-title" id="deleteModalLabel">Supprimer une employée</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Etes-vous sur de vouloir supprimer l'employée ?</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => removeEmployee(id)} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <h1>Liste des employées</h1>
            <table className="table table-striped text-center align-middle w-75 mx-auto">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {getData()}
                </tbody>
            </table>
            {getModals()}
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newModal">Nouvelle employée</button>
        </>
    )
}

export default Employees;