import React from "react";
import RestaurantCard from "./RestaurantCard"

const RestaurantList = ({restaurants}) => {
  return (

  <section className="restaurantList">
  {restaurants.map(restaurant => (
    <RestaurantCard 
      key={restaurant.id}
      name={restaurant.name}
      address={restaurant.address}    
      type={restaurant.type}
      vegan={restaurant.vegan}/>
  ))}
  </section>)
 
}  

export default RestaurantList;
