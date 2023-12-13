import { useState, useContext } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import {RestaurantContext} from '../../client/src/context/restaurantContext'

import './App.css'




function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <><Header/>
    <RestaurantContext.Provider value={{restaurants, setRestaurants}}>
      <Main/>
    </RestaurantContext.Provider>
      <Footer/>
    </>
  )
}

export default App
