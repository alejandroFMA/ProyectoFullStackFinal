import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import ReservationList from "./ReservationList/ReservationList"
import Filter from "./Filter/Filter";
import {jwtDecode} from "jwt-decode";
import Cliploader from "react-spinners/MoonLoader";




const Reservations = () => {

  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterReservations, setFilterReservations] = useState([]);
  const [loading, setLoading] = useState(true)
 
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);

  console.log(decoded)
  console.log(reservations)

  useEffect(() => {

    const fetchAllReserves = async () => {
      
      try {
        const response = await axios.get(`/api/reservation/user/${decoded.id}`);
        setReservations(response.data);
        setFilterReservations(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false)

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
      <ReservationList reservations={filterReservations}  setReservations={setReservations}/>
      )}    </>
  );
};

export default Reservations;
