import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RestaurantContext } from "../../client/src/context/restaurantContext";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
          <Main />
        </RestaurantContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
