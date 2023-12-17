import React, { useState } from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import {UserInfoContext} from "../../../context/userInfoContext";
import ReservationList from "./ReservationList/ReservationList"
import Filter from "./Filter/Filter";

const Reservations = () => {

  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterReservations, setFilterReservations] = useState([]);
  const { userInfo } = useContext(UserInfoContext);


  useEffect(() => {
    const fetchAllReserves = async () => {
      if (!userInfo.id) return; 
      try {
        const response = await axios.get(`http://localhost:3000/api/reservation/user/${userInfo.id}`);
        setReservations(response.data);
        setFilterReservations(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchAllReserves();
  }, [userInfo.id]);

  useEffect(() => {
    const filtered = reservations.filter(reservation => {
      return reservation.Restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilterReservations(filtered);
  }, [searchTerm, reservations]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1>Tus reservas</h1>
      <Filter onSearchChange={handleSearchChange} />
      <ReservationList reservations={filterReservations} /> {/* Usar filterReservations aquí */}
    </>
  );
};

export default Reservations;
