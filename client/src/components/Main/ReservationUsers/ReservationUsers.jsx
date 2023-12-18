import {useEffect, useContext, useState} from "react";
import axios from "axios";
import ListReserves from "./ListReserves";
import {ReservationsUsersContext} from "../../../context/reservationsUsersContext"
import Cliploader from "react-spinners/MoonLoader";

const ReservationUsers = () => {

  const {setAllReservations} = useContext(ReservationsUsersContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllReservations();
  }, []);

  const fetchAllReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/all/reservation');
     console.log(response.data)
     const usersReservations= response.data
     setAllReservations(usersReservations)
     setLoading(false)

    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false)

    }
  };
  return (<>
  <h1>Control de reservas</h1>
  { loading ? (<div>
        <Cliploader 
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        color={"#1fcceb"} 
        className="spinner" 
        />
      </div>

      ) : (
  <ListReserves fetch={fetchAllReservations}/>
  )}    
  </>
)
};

export default ReservationUsers;
