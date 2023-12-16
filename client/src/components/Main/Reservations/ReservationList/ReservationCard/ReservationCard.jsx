import React from "react";
import { format } from 'date-fns'


const ReservationCard = ({name, address, date, customers, status }) => {

 

  return (
    <article className="restaurantCard">
      <p>{name}</p>
      <p>{address}</p>
      <p>{date}</p>
      <p>{customers}</p>
      <p>{status}</p>       
      <button type="button">Borrar reserva</button>
    </article>
  );
};

export default ReservationCard;