import {jwtDecode} from "jwt-decode";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Form from './Form';
import RestaurantList from './RestaurantList';
import { RestaurantContext } from '../../../context/restaurantContext';
import Cliploader from "react-spinners/MoonLoader";



const Home = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [foodType, setFoodType] = useState('');
  const [vegan, setVegan] = useState(false);
  const [loading, setLoading] = useState(true)
  


  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      const response = await axios.get('/api/restaurant');
      setRestaurants(response.data);
      setFilterRestaurants(response.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false)

    }
  };

  useEffect(() => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return (
        (!searchTerm || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) && //solo aparecer restaurantes incluyen
        (!foodType || restaurant.type === foodType) && //solo aparecer restaurantes tipo de vovims
        (vegan === false || restaurant.vegan === vegan) //solo aparecen restaurantes veganos true
      );
    });

    setFilterRestaurants(filteredRestaurants);
  }, [restaurants, searchTerm, foodType, vegan]); // Cambio a searchTerm


  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  }

  return (
      <>
      <h3>Encuentra tu nuevo restaurante favorito</h3>
      <Form 
        onSearchChange={handleSearch} 
        setFoodType={setFoodType} 
        isVegan={vegan} 
        setVegan={setVegan}
      />  
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
        <RestaurantList restaurants={filterRestaurants} setRestaurants={setRestaurants} />
      )}
      </>
  )
  }  

export default Home;
