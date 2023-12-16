import React from "react";
import ReservationCard from "../ReservationList/ReservationCard";
import axios from 'axios';

const ReservationList = ({ reservations }) => {

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
          id={reserve.id_reservations}
          name={reserve.Restaurant.name}
          address={reserve.Restaurant.address} 
          date={reserve.reservation_datetime}
          customers={reserve.customers}
          status={reserve.status}
          onDelete={deleteReservation}   
        />
      ))}
    </section>
  );
};

export default ReservationList;