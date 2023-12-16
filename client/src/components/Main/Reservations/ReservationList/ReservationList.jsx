import React from "react";
import ReservationCard from "../ReservationList/ReservationCard";

const ReservationList = ({ reservations }) => {
  return (
    <section className="reservationList">
      {reservations.map(reserve => (
        <ReservationCard 
          key={reserve.id_reservations}
          name={reserve.Restaurant.name}
          address={reserve.Restaurant.address} 
          date={reserve.reservation_datetime}
          customers={reserve.customers}
          status={reserve.status}   
        />
      ))}
    </section>
  );
};

export default ReservationList;