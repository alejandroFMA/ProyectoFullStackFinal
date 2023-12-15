import React from "react";
import {Link} from "react-router-dom"

const RestaurantCard = ({key, id, name, vegan, type,}) => {
console.log(id)

  const restaurantDetailUrl = `/restaurant/${id}` 
  return (
    <>
        <article className="restaurantCard">
        <h3>{key}</h3>
        <p className="restaurantName">{name}</p>
        <p className="restaurantType">{type}</p>
        <p className="restaurantVegan">Opciones veganas: {vegan ? "Sí" : "No"}</p>   
        <Link to={restaurantDetailUrl}>
          <button type="button">RESERVAR</button>
        </Link>
        </article>
    
    </>
  );;

};

export default RestaurantCard;
