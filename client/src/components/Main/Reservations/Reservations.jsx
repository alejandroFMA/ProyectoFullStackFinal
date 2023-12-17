import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ReservationList from "./ReservationList/ReservationList"
import Filter from "./Filter/Filter";
import {jwtDecode} from "jwt-decode";

const Reservations = () => {

  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterReservations, setFilterReservations] = useState([]);
 
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);

  console.log(decoded)

  useEffect(() => {

    const fetchAllReserves = async () => {
      
      try {
        const response = await axios.get(`http://localhost:3000/api/reservation/user/${decoded.id}`);
        setReservations(response.data);
        setFilterReservations(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchAllReserves();
  
  }, [decoded.id]);

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
      <ReservationList reservations={filterReservations} />    </>
  );
};

export default Reservations;
