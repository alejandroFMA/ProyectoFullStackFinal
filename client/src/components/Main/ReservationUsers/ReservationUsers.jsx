import {useEffect} from "react";
import axios from "axios";

const ReservationUsers = () => {


  useEffect(() => {
    fetchAllReservations();
  }, []);

  const fetchAllReservations = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/all/reservation');
     console.log(response.data)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  return <div>ReservationUsers</div>;
};

export default ReservationUsers;
