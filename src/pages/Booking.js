import React, {useEffect} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Moment from 'moment';
import Modal from "../components/Modal";
import axios from "axios";

const Booking = () => {
    const [date, setDate] = React.useState(new Date());
    const [formatDate, setFormatDate] = React.useState('');
    const [day, setDay] = React.useState('Dimanche');
    const [hour, setHour] = React.useState('00:00');
    const [json, setJson] = React.useState([]);
    const [reservations, setReservations] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/calendar')
            .then(res => {
                setJson(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get('http://localhost:8000/api/reservations')
            .then(res => {
                setReservations(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

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

function getOpenHours(){
    let button;
    let hours;
    Object.keys(json).map(key => {
        if(key === day){
            button = json[key].map(item => {
                hours = <button
                    key={item.day + item.time}
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setHour(item.time)}
                >
                    {item.time}
                </button>
                reservations.map(reservation => {
                    if(reservation.date === formatDate && reservation.hour === item.time){
                        hours = <button
                            key={item.day + item.time}
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => setHour(item.time)}
                            disabled
                        >
                            {item.time}
                        </button>
                    }
                    if(reservation.date === formatDate && reservation.hour !== item.time) {
                        hours = <button
                            key={item.day + item.time}
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => setHour(item.time)}
                        >
                            {item.time}
                        </button>
                    }
                })
                return hours;
                })
            }
        return null;
        })
    if(button === undefined){
        return (
            <div className="alert alert-danger" role="alert">
                Aucun horaire disponible pour le {day}
            </div>
        )
    }
    return button;
    }

    function getModal(){
        const data = {
            "date": <p>Date : {day} {formatDate}</p>,
            "hour": <p>Heure : {hour}</p>
        }
        return (
            <Modal data={data} date={formatDate} hour={hour}/>
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