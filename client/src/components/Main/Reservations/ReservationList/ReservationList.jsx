import React from "react";
import ReservationCard from "../ReservationList/ReservationCard";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

const ReservationList = ({ reservations, setReservation }) => {

  const deleteReservation = (id) => {
    axios.delete(`http://localhost:3000/api/reservation/${id}`)
      .then(response => {
        console.log('Reserva eliminada', response);
      })
      .catch(error => { 
        console.error('Error al eliminar la reserva', error);
      });
  };


  return (
    <section className="reservationList">
      {reservations.map(reserve => (
        <ReservationCard 
         key={uuidv4()}
          id={reserve.id_reservations}
          name={reserve.Restaurant.name}
          address={reserve.Restaurant.address} 
          date={reserve.reservation_datetime}
          customers={reserve.customers}
          status={reserve.status}
          onDelete={deleteReservation}   
          setReservation={setReservation}
        />
      ))}
    </section>
  );
};

export default ReservationList;