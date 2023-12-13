import React from "react";

const RestaurantCard = ({key, name, vegan,address, type, rating}) => {
  return (
    <>
        <article className="restaurantCard">
        <h3>{key}</h3>
        <p className="restaurantName">{name}</p>
        <p className="restaurantAddress">{address}</p>
        <p className="restaurantType">{type}</p>
        <p className="restaurantVegan">Opciones veganas: {vegan ? "Sí" : "No"}</p>
        <p className="restaurantRating">{rating}</p>
        </article>
    
    </>
  );;
};

export default RestaurantCard;
