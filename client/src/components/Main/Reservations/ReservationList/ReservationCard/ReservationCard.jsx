import React from "react";
import { format } from 'date-fns'


const ReservationCard = ({id, name, address, date, customers, status, onDelete }) => {

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <article className="reservationCard">
       <h3>{name}</h3>
      <div className="reservation-card-details">
      <p className="reservation-text-body">{address}</p>
      <p className="reservation-text-body">Fecha de la reserva: {format(new Date(date), 'dd-MM-yyyy HH:mm')}</p>
      <p className="reservation-text-body">Número de comensales: {customers}</p>
      <p className="reservation-text-bodys">Estado: {status}</p> 
      </div>      
      <button className="reservation-card-button" type="button" onClick={handleDelete}>Borrar</button>
    </article>
  );
};

export default ReservationCard;