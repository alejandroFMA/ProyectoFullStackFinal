import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const RestaurantCard = ({ key, id, name, vegan, type }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      const tokenAdmin = decoded.admin === true;
      setIsAdmin(tokenAdmin);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const restaurantDetailUrl = `restaurant/${id}`;

  const handleDelete = () => {

    try{
    axios.delete(`http://localhost:3000/api/${restaurantDetailUrl}`)
    .then(response => {
      console.log('Reserva eliminada', response);
    })
    .catch(error => { 
      console.error('Error al eliminar la reserva', error);
    });
  } catch (error){
    console.log(error)

  }
   
  };

  return (
    <>
      <article className="restaurantCard">
        <div className="restauranContainer">
          <h3 className="restaurantName">{name}</h3>
          <p className="restaurantType">{type}</p>
          <p className="restaurantVegan">
            Opciones veganas: {vegan ? "Sí" : "No"}
          </p>

          <Link to={restaurantDetailUrl}>
            <button className="details-btn" type="button">
              Ver más
            </button>
          </Link>
        </div>
        {isAdmin ? (
          <>
            <div className="optionsAdmin">
              <button>
                <Link
                  to="/editrestaurant"
                  className="editar-btn"
                  onClick={scrollToTop}
                >
                  Editar
                </Link>
              </button>

              <button className="btn btn-delete"
              onClick={handleDelete}>
                <span className="mdi mdi-delete mdi-24px"></span>
                <span className="mdi mdi-delete-empty mdi-24px"></span>
                <span>Borrar</span>
              </button>
            </div>
          </>
        ) : null}
      </article>
    </>
  );
};

export default RestaurantCard;
