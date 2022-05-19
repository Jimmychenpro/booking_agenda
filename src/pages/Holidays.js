import {useEffect, useState} from "react";
import axios from "axios";
import Moment from "moment";

function Holidays() {
    const [json, setJson] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [id, setId] = useState(0);

    //call api
    useEffect(() => {
        axios.get('http://localhost:8000/api/holidays')
            .then(res => {
                setJson(res.data);
                setRefresh(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [refresh]);

    //holiday crud
    function updateHoliday(){
        let date = document.getElementById('upDate').value;
        date = Moment(date).format('DD/MM/YYYY');

        axios.post('http://localhost:8000/api/holiday/update', {
            id: document.getElementById('upId').value,
            date: date
        })
            .then(res => {
                console.log(res);
                setRefresh(true)
            })
            .catch(err => {
                console.log(err);
            })
    }
    function removeHoliday(){
        axios.post('http://localhost:8000/api/holiday/delete', {
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
    function createHoliday(){

        let date = document.getElementById('newDate').value;
        date = Moment(date).format('DD/MM/YYYY');

        axios.post('http://localhost:8000/api/holiday/create', {
            date: date,
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
        data = json.map(item => (
            <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                    <button className="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => setId(item.id)}>Modifier</button>
                    <button className="btn btn-danger mx-1" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setId(item.id)}>Supprimer</button>
                </td>
            </tr>
        ));
        return data;
    }

    //modals
    function getModals(){
        return(
            <>
                {/*modal nouveau congé*/}
                <div className="modal fade" id="newModal" tabIndex="-1" aria-labelledby="newModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="newModalLabel">Ajouter un congé</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <label htmlFor="newDate">Date</label>
                                    <input type="date" id="newDate"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => createHoliday()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*modal update congé*/}
                <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="updateModalLabel">Modifier un congé</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" id="upId" value={id}/>
                                <div>
                                    <label htmlFor="upDate">Date</label>
                                    <input type="date" id="upDate"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => updateHoliday()} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*modal delete congé*/}
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Supprimer un congé</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h5>Etes-vous sur de vouloir supprimer le congé ?</h5>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => removeHoliday(id)} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

  return (
    <>
      <h1>Liste des congés</h1>
      <table className="table table-striped align-middle w-25 mx-auto text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getData()}
        </tbody>
      </table>
        {getModals()}
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newModal">Nouveau congé</button>
    </>
  );
}

export default Holidays;