import React from "react";
import { format } from 'date-fns'


const ReservationCard = ({id, name, address, date, customers, status, onDelete }) => {

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <article className="restaurantCard">
      <p>{name}</p>
      <p>{address}</p>
      <p>{format(new Date(date), 'dd-MM-yyyy HH:mm')}</p>
      <p>{customers}</p>
      <p>{status}</p>       
      <button type="button" onClick={handleDelete}>Borrar reserva</button>
    </article>
  );
};

export default ReservationCard;