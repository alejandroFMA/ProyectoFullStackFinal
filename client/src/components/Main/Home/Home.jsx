import {useState, useEffect} from "react";
import axios from "axios";
import Form from "./Form";
import RestaurantList from "./RestaurantList/RestaurantList";


const Home = () => {
  
  const [restaurants, setRestaurants]= useState([])

  const fetchRestaurant = async () =>{

    const response = await axios.get('/api/restaurant', {
      method: 'GET', 
      headers: {
          'Content-Type': 'application/json',
      }
    })
    const data = response;
    setRestaurants(data)

    console.log(data)

  }

  useEffect(() => {
      fetchRestaurant()
  }, [])
  

  return (
    <>
      <div>Home</div>
      <Form />
      <RestaurantList restaurants={restaurants}/>
    </>
  );
};

export default Home;
