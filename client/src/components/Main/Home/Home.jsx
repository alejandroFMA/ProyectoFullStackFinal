import {jwtDecode} from "jwt-decode";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Form from './Form';
import RestaurantList from './RestaurantList';
import { RestaurantContext } from '../../../context/restaurantContext';
import {UserInfoContext} from "../../../context/userInfoContext";


const Home = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  const {setUserInfo}=useContext(UserInfoContext)
  const [ decodedToken ,setDecodedToken] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [foodType, setFoodType] = useState('');
  const [vegan, setVegan] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        setUserInfo(decoded);
    } 
}, [setUserInfo]);


  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/restaurant');
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
        (vegan === false || restaurant.vegan === vegan) 
      );
    });

    setFilterRestaurants(filteredRestaurants);
  }, [restaurants, searchTerm, foodType, vegan]); // Cambio a searchTerm


  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  }

  return (
      <>
      <Form 
        onSearchChange={handleSearch} 
        setFoodType={setFoodType} 
        isVegan={vegan} 
        setIsVegan={setVegan}
      />    
      <RestaurantList restaurants={filterRestaurants} />
      </>
  )
  }  

export default Home;
