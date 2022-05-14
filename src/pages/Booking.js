import React, {useEffect} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Moment from 'moment';

const Booking = () => {
    const [date, setDate] = React.useState(new Date());
    const [formatDate, setFormatDate] = React.useState('');
    const [day, setDay] = React.useState('Dimanche');
    const [hour, setHour] = React.useState('00:00');

    useEffect(() => {
        if(date !== undefined){
            getDay();
            setFormatDate(Moment(date).format('DD/MM/YYYY'));
        }
    }, [date]);


    function getDay(){
        switch (date.getDay()){
            case 1:
                return setDay("Lundi");
            case 2:
                return setDay("Mardi");
            case 3:
                return setDay("Mercredi");
            case 4:
                return setDay("Jeudi");
            case 5:
                return setDay("Vendredi");
            case 6:
                return setDay("Samedi");
            default:
                return setDay("Dimanche");
        }
    }

    const json =
    {
        "Lundi": {
            "hours": {
                "1": "08:00",
                "2": "09:00",
                "3": "10:00"
            }
        },
        "Mardi": {
            "hours": {
                "1": "08:00",
                "2": "09:00",
                "3": "10:00",
                "4": "11:00",
            }
        },
        "Mercredi": {
            "hours": {
                "1": "08:00",
                "2": "09:00",
                "3": "10:00",
                "4": "11:00",
                "5": "12:00"
            }
        },
        "Jeudi": {
            "hours": {
                "1": "10:00",
                "2": "11:00",
                "3": "12:00",
            }
        },
        "Vendredi": {
            "hours": {
                "1": "14:00",
                "2": "15:00",
                "3": "16:00",
            }
        },
        "Samedi": {
            "hours": {
                "1": "08:00",
                "2": "09:00",
                "3": "10:00"
            }
        },
        "Dimanche": {
            "hours": {
                "1": "08:00",
                "2": "09:00",
                "3": "10:00"
            }
        }

    }

function getOpenHours(){
    const hours = json[day];
    return Object.keys(hours.hours).map(key => {
        return (
            <button key={key} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setHour(hours.hours[key])}>{hours.hours[key]}</button>
            )
        });
    }

    function getModal(){
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Récapitulatif</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Prestataire : ----</p>
                            <p>Date : {day} {formatDate}</p>
                            <p>Heure : {hour}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Booking</h1>
            <div>
                <Calendar onChange={setDate} value={date} minDate={new Date()} />
            </div>
            <div>
                <p>Heure disponible pour le {day} {formatDate}</p>
                {getOpenHours()}
            </div>
            {getModal()}
        </div>
    )
}

export default Booking;