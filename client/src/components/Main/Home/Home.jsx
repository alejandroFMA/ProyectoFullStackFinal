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
      <RestaurantList restaurants={filterRestaurants} setRestaurants={setRestaurants}/>
      </>
  )
  }  

export default Home;
