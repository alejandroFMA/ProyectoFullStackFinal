import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Form from './Form';
import RestaurantList from './RestaurantList';
import { RestaurantContext } from '../../../context/restaurantContext';

const Home = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [foodType, setFoodType] = useState('');
  const [isVegan, setIsVegan] = useState(false);

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/restaurant');
      console.log(response.data)
      setRestaurants(response.data);
      setFilterRestaurants(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  console.log("Restaurants before filtering:", restaurants);

  useEffect(() => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return (
        (!searchTerm || restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!foodType || restaurant.type === foodType) &&
        (isVegan === false || restaurant.vegan === isVegan) 
      );
    });

    setFilterRestaurants(filteredRestaurants);
  }, [restaurants, searchTerm, foodType, isVegan]); // Cambio a searchTerm

  console.log("Is Vegan:", isVegan);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  }

  return (
      <>
      <Form 
        onSearchChange={handleSearch} 
        setFoodType={setFoodType} 
        isVegan={isVegan} 
        setIsVegan={setIsVegan}
      />    
      <RestaurantList restaurants={filterRestaurants} />
      </>
  )
  }  

export default Home;
