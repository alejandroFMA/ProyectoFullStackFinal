import React from "react";
import RestaurantCard from "./RestaurantCard"
import { v4 as uuidv4 } from "uuid";

const RestaurantList = ({restaurants, setRestaurants}) => {

  console.log(restaurants)
  
  return (

  <section className="restaurantList">
  {restaurants.map(restaurant => (
    <RestaurantCard 
      key={restaurant.id_restaurants}
      id={restaurant.id_restaurants}
      name={restaurant.name}
      address={restaurant.address}    
      type={restaurant.type}
      vegan={restaurant.vegan}
      rating={restaurant.rating}
      setRestaurants={setRestaurants}/>
  ))}
  </section>)
 
}  


export default RestaurantList;
