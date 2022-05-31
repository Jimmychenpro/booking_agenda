import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Booking() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center bg-dark text-light'>
          <h1 className='mt-4'>Choisissez une date : </h1>
          <div className='calendar mt-4'>
              <Calendar onChange={onChange} value={value} showDoubleView={true}/>
          </div>
          <div className='Hours mt-4'>
              <h1>Sélectionnez une heure :</h1>
              <button type="button" class="btn btn-primary btn-md">Large button</button>
          </div>
      </div>
    </>
  );
}

export default Booking;