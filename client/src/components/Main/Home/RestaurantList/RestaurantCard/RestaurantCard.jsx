import {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {jwtDecode} from "jwt-decode";

const RestaurantCard = ({key, id, name, vegan, type,}) => {

const [isAdmin, setIsAdmin] = useState(false);
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = jwtDecode(token);
    const tokenAdmin = decoded.admin === true
    setIsAdmin(tokenAdmin)
  } else {  
    setIsAdmin(false)
  }
}, []);

  const restaurantDetailUrl = `/restaurant/${id}` 



  return (
    <>
        <article className="restaurantCard">
        <div className="restauranContainer">
        <p className="restaurantName">{name}</p>
        <p className="restaurantType">{type}</p>
        <p className="restaurantVegan">Opciones veganas: {vegan ? "Sí" : "No"}</p>   

        <Link to={restaurantDetailUrl}>
          <button type="button">RESERVAR</button>
        </Link>
        </div>
        {isAdmin ? (
          <>
       <div className="optionsAdmin">   
       <button >
          <Link to="/editrestaurant" 
          className="Editar"
          onClick={scrollToTop}     
          >Editar</Link>
        </button>

        <button    
        type="button"      
          >Borrar
         </button>       
        </div>
        </>)
        : (null)}
        </article>
    
    </>
  );;

};

export default RestaurantCard;
