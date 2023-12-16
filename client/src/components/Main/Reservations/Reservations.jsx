import React, { useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { useEffect, useContext } from "react";
import {UserInfoContext} from "../../../context/userInfoContext";
import ReservationList from "./ReservationList/ReservationList"
import Filter from "./Filter/Filter";

const Reservations = () => {

  const [reservations, setReservations] = useState([]);
    const [filterReservations, setFilterReservations] = useState([]);
    const { userInfo } = useContext(UserInfoContext);

   

useEffect(() => {
  const user ={
    id:userInfo.id,
  }
  const fetchAllReserves = async () => {
   
    try {
        const response = await axios.get(`http://localhost:3000/api/reservation/user/${user.id}`);
        console.log(response.data)
        setReservations(response.data);
        setFilterReservations(response.data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};
    fetchAllReserves();
}, [])

  return <>
  <h1>Tus reservas</h1>
  <Filter/>
  <ReservationList reservations={reservations}/>
  </>;
};

export default Reservations;
