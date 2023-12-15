import {useState} from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import axios from 'axios';

const FormReserve = ({userInfo, id_restaurant}) => {

  const [reserve, setReserve]= useState({
  reservation_datetime: null,
  people: ''})


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserve({ ...reserve, [name]: value });
  };


  const handleDateTimeChange = (newValue) => {
    setReserve({ ...reserve, reservation_datetime: newValue });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const reservationData = {
        id_user:userInfo.id,
        id_restaurant:id_restaurant,
        reservation_datetime: reserve.reservation_datetime.toISOString(), 
        customers: parseInt(reserve.people, 10)
       
      };
      const response = await axios.post('http://localhost:3000/api/reservation', reservationData);
      console.log(response.data);
      setReserve({
        reservation_datetime: null,
        people: ''
      });
      alert("reserva realizada")
      // POP UP DE RESERVA OK
    } catch (error) {
      console.error("Error creating reservation:", error.response?.data || error.message);
      alert(error.message)
      // POP UP DE ERROR
    }
  };


  return <>
  <form onSubmit={handleSubmit}>
    <h1>Haz tu reserva ahora</h1>
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
             label="Fecha y hora de reserva"
             name="reservationDateTime"
             value={reserve.reservation_datetime}
             onChange={handleDateTimeChange}
             renderInput={(params) => <TextField {...params} />}
             shouldDisableTime={(value, view) =>
              view === 'hours' && value.hour() > 12 && value.hour() < 23
            }
            disablePast
             required
        />
    </LocalizationProvider>

      <input type="number"
        name="people"
        id="people"
        placeholder="Número de personas"
        value={reserve.people}
        onChange={handleInputChange}
        min="1"
        max="8"
        autoComplete="off"
        required></input>

      <button type="submit">Enviar</button>
  </form>
  
  
  </>;
};

export default FormReserve;
