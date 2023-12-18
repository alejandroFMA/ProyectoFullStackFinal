import { useState, useContext } from "react";
import { format } from "date-fns";
import axios from "axios";
import {ReservationsUsersContext} from "../../../../../context/reservationsUsersContext";

const UsersReservationCards = ({
  id,
  name,
  address,
  email,
  username,
  date,
  customers,
  status,
  onDelete
}) => {
  const {setAllReservations} = useContext(ReservationsUsersContext)

  const [ estado, setEstado ] = useState( status );

  const handleDelete = async () => {
    onDelete(id);
    alert("¡Reserva eliminada!");
    setAllReservations(prevReserves => [...prevReserves]);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/api/reservation/${id}`,
        {
          status: estado,
        }       
      );
      console.log("Estado actualizado", response.data)
      alert("Estado actualizado: " + response.data.status)
  
      setAllReservations(prevReserves =>
        prevReserves.map(reserve =>
          reserve.id === id ? { ...reserve, status: estado } : reserve
        ));
    } catch (error) {
      console.error("Error al editar la reserva" + error);
    }
  };

  const handleStatus = (event) => {

    setEstado(event.target.value)

  }

  return (
    <article className="reservationUserCard">
      <b>Reserva #{id}</b>
      <p>{name}</p>
      <p>{address}</p>
      <p>{email}</p>
      <p>{username}</p>
      <p>Fecha de la reserva: {format(new Date(date), "dd-MM-yyyy HH:mm")}</p>
      <p>Número de comensales: {customers}</p>
      <p>Estado: {status}</p>

      <form className="changeStatus" onSubmit={handleSubmit}>
       
        <select name="status" value={estado} onChange={handleStatus}>
          <option></option>
          <option value="Anulada">Anulada</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmada">Confirmada</option>
        </select>
      

        <div className="buttons-user-reservation">

        <input type="submit" className="cambiar-estado" value="Cambiar Estado" />
        <button class="btn btn-delete"
           onClick={handleDelete}
          >
            <span class="mdi mdi-delete mdi-24px"></span>
            <span class="mdi mdi-delete-empty mdi-24px"></span>
            <span>Borrar</span>
          </button>
          </div>    
      </form>

       



    </article>
  );
};

export default UsersReservationCards;
