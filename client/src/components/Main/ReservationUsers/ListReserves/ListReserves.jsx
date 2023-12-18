import {useContext} from "react";
import UserReservationCard from "./UsersReservationCards"
import axios from 'axios';
import {ReservationsUsersContext} from "../../../../context/reservationsUsersContext"

const ListReserves = ({fetch}) => {

  const {allReservations, setAllReservations} = useContext(ReservationsUsersContext)

  const deleteReservation = async (id) => {
   const response = axios.delete(`http://localhost:3000/api/reservation/${id}`)
   try{
     console.log(response.data)
     setAllReservations(reservaActual => reservaActual.filter(reserve => reserve.id_reservations !== id));
    
    } catch(error){ 
        console.error('Error al eliminar la reserva', error);
      };
  };
  
  return  (
  <section className="reservationList">
  {allReservations.map(reserve => (
    <UserReservationCard 
      key={reserve.id_reservations}
      id={reserve.id_reservations}
      email={reserve.User.email}
      username={reserve.User.username}
      name={reserve.Restaurant.name}
      date={reserve.reservation_datetime}    
      customers={reserve.customers}
      status={reserve.status}
      onDelete={deleteReservation}
      fetch={fetch}
      />
  ))}
  </section>);
};

export default ListReserves;
