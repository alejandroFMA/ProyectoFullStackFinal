import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RestaurantContext } from "../../client/src/context/restaurantContext";
import { UserInfoContext } from "../../client/src/context/userInfoContext";
import {ReservationsUsersContext} from "./context/reservationsUsersContext"
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss"
import axios from "axios";


import "./App.css";


function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [userInfo, setUserInfo] = useState({})
  const [allReservations, setAllReservations] = useState([])
  axios.defaults.baseURL="http://localhost:3000"
  return (
    <>
      <BrowserRouter>
        <Header />
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
        <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
        <ReservationsUsersContext.Provider value={{allReservations, setAllReservations}}>
          <Main />        
        </ReservationsUsersContext.Provider> 
        </RestaurantContext.Provider>
        </UserInfoContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
