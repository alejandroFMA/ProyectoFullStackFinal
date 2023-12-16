import React, { useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useEffect, useContext } from "react";
import {UserInfoContext} from "../../../context/userInfoContext";

const Reservations = () => {
    const [reservations, setReservations] = useState([])
    const [filterReservations, setFilterReservations]= useState([])
    const {UserInfo}=useContext(UserInfoContext)

    console.log()
 

  const fetchAllReserves = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/reservation/`);
        setReservations(response.data);
        setFilterReservations(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };




  return <div>Reservations</div>;
};

export default Reservations;
