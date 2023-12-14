import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Reservations from "../Main/Reservations";
import RestaurantDetail from "../Main/RestaurantDetail";
import CreateRestaurant from "../Main/CreateRestaurant";
import EditRestaurant from "../Main/EditRestaurant";
import ReservationsUsers from "../Main/ReservationUsers";
import SignIn from "../Main/SignIn"
import SignUp from "../Main/SignUp";

const Main = () => {

  const location = useLocation()

  return (
    <>
      <main>
      <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/createrestaurant/" element={<CreateRestaurant />} />
          <Route path="/editrestaurant/" element={<EditRestaurant />} />
          <Route path="/reservationsusers/" element={<ReservationsUsers />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />      
        </Routes>
      </main>
    </>
  );
};

export default Main;
