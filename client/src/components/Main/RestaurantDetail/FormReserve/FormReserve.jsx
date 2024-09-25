import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import axios from "axios";

const FormReserve = ({ userInfo, id_restaurant }) => {
  // const token = localStorage.getItem('token');

  const [reserve, setReserve] = useState({
    reservation_datetime: null,
    people: "",
  });
  console.log(id_restaurant)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReserve({ ...reserve, [name]: value });
  };

  const handleDateTimeChange = (newValue) => {
    setReserve({ ...reserve, reservation_datetime: newValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const reservationData = {
        id_user: userInfo.id,
        id_restaurant: id_restaurant,
        reservation_datetime: dayjs(reserve.reservation_datetime),
        customers: parseInt(reserve.people, 10),
      };
      const response = await axios.post(
        "/api/reservation",
        reservationData
      );
      console.log(response.data);
      setReserve({
        reservation_datetime: null,
        people: "",
      });
      alert("reserva realizada");
    } catch (error) {
      console.error(
        error.response?.data || error.message
      );
      alert(error.message);
      // POP UP DE ERROR
    }
  };

  return (
    <>   
      <form className="reserve-form" onSubmit={handleSubmit}>
        <div className="inputs-reserve">
        <h1>Haz tu reserva ahora</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Fecha y hora de reserva"
              name="reservation_datetime"
              value={reserve.reservation_datetime}
              onChange={handleDateTimeChange}
              renderInput={(params) => <TextField {...params} />}
              shouldDisableTime={(value, view) =>
                view === "hours" && value.hour() > 23 && value.hour() < 12
              }
              disablePast
              required
            />
          </LocalizationProvider>

          <div className="quantity">
            <input
              type="number"
              className="inp-number"
              name="people"
              id="people"
              placeholder="Número de personas"
              value={reserve.people}
              onChange={handleInputChange}
              min="1"
              max="8"
              autoComplete="off"
              required
            />
          </div>
        </div>

        <button className="reserve-button" type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormReserve;
