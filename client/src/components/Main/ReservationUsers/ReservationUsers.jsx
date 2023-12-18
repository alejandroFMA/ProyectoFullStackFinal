import {useEffect, useContext} from "react";
import axios from "axios";
import ListReserves from "./ListReserves";
import {ReservationsUsersContext} from "../../../context/reservationsUsersContext"

const ReservationUsers = () => {

  const {setAllReservations} = useContext(ReservationsUsersContext)

  useEffect(() => {
    fetchAllReservations();
  }, []);

  const fetchAllReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/all/reservation');
     console.log(response.data)
     const usersReservations= response.data
     setAllReservations(usersReservations)

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return (<>
  <h1>Control de reservas</h1>
  <ListReserves fetch={fetchAllReservations}/>
  </>
)
};

export default ReservationUsers;
