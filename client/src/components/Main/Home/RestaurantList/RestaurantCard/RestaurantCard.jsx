import React from "react";

const RestaurantCard = ({key, name, vegan, type}) => {
  return (
    <>
        <article className="restaurantCard">
        <h3>#{key}</h3>
        <p className="restaurantName">{name}</p>
        <p className="restaurantType">{type}</p>
        <p className="restaurantVegan">{vegan}</p>

        </article>
    
    </>
  );;
};

export default RestaurantCard;
