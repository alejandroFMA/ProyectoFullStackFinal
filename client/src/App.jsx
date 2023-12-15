import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RestaurantContext } from "../../client/src/context/restaurantContext";
import { UserInfoContext } from "../../client/src/context/userInfoContext";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [userInfo, setUserInfo] = useState({})

  return (
    <>
      <BrowserRouter>
        <Header />
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
        <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
          <Main />        
        </RestaurantContext.Provider>
        </UserInfoContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
