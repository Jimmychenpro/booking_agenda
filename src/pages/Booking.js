import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Booking() {
  const [value, onChange] = useState(new Date());

  return (
    <>
        <h1>Choisissez une date : </h1>
        <div className='calendar'>
            <Calendar onChange={onChange} value={value} />
        </div>
        <div className='Hours'>
            <h1>Sélectionnez une heure :</h1>
            <div>10:00</div>
        </div>
    </>
  );
}

export default Booking;