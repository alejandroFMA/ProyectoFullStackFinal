import {useState} from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import axios from 'axios';

const FormReserve = () => {

  const [reserve, setReserve]= useState({
  email: '',
  reservationDateTime: null,
  numberPeople: ''})


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReserve({ ...reserve, [name]: value });
  };


  const handleDateTimeChange = (newValue) => {
    setReserve({ ...reserve, reservationDateTime: newValue });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const reservationData = {
        email: reserve.email,
        reservation_datetime: reserve.reservationDateTime.toISOString(), 
        customers: parseInt(reserve.numberPeople, 10),
        status: "Pendiente"
      };
      const response = await axios.post('/api/reservation', reservationData);
      console.log(response.data);
      setReserve({
        email: '',
        reservationDateTime: null,
        numberPeople: ''
      });
      // POP UP DE RESERVA OK
    } catch (error) {
      console.error("Error creating reservation:", error.response?.data || error.message);
      // POP UP DE ERROR
    }
  };


  return <>
  <form>
      <input  
        type="email"
        name="email"
        placeholder="Introduce Email"
        value={reserve.email}
        onChange={handleInputChange}
        required></input>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
             label="Fecha y hora de reserva"
             name="reservationDateTime"
             value={reserve.reservationDateTime}
             onChange={handleDateTimeChange}
             renderInput={(params) => <TextField {...params} />}
             required
        />
      </DemoContainer>
    </LocalizationProvider>

      <input type="number"
        name="numberPeople"
        id="numberPeople"
        placeholder="Número de personas"
        value={reserve.numberPeople}
        onChange={handleInputChange}
        min="1"
        max="8"
        autoComplete="off"
        required></input>
      <button type="submit" onSubmit={handleSubmit} >Enviar</button>
  </form>
  
  
  </>;
};

export default FormReserve;
