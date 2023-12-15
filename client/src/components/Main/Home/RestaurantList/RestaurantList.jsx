import React from "react";
import RestaurantCard from "./RestaurantCard"

const RestaurantList = ({restaurants}) => {

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
      rating={restaurant.rating}/>
  ))}
  </section>)
 
}  


export default RestaurantList;
