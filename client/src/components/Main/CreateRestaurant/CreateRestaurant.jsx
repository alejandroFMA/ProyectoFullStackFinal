import {useState} from "react";
import axios from "axios";

const CreateRestaurant = () => {

  const [newRestaurant, setNewRestaurant]= useState({
    name:"",
    address:"",
    type:"",
    vegan: false})
  
  
    const handleInputChange = (event) => {
      const { name, value, type, checked } = event.target;
      setNewRestaurant({ ...newRestaurant, [name]: type === "checkbox" ? checked : value});
    };
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/api/restaurant', newRestaurant);
        console.log(response.data);
        setNewRestaurant({
          name:"",
          address:"",
          type:"",
          vegan: false
        });
        alert("Restaurante creado")
        // POP UP DE RESERVA OK
      } catch (error) {
        console.error("Error creating reservation:"+ error, error.message);
        alert(error.message)
        // POP UP DE ERROR
      }
    };
  

  return( 
  <>
  <form className="formAdmin" onChange={handleInputChange} onSubmit={handleSubmit} >
    <h1>Nuevo restaurante</h1>
    <p>Introduce los datos para crear un nuevo restaurante.</p>
    <input 
    type="text"
    placeholder="Nombre del restaurante"
    name="name" 
    value={newRestaurant.name}
    onChange={handleInputChange}
    />
   
    <input 
     type="text"
     placeholder="Dirección"
     name="address" 
     value={newRestaurant.address}
     onChange={handleInputChange}/>
     
    <input 
     type="text"
     name="type" 
     placeholder="Tipo de cocina"
     value={newRestaurant.type}
     onChange={handleInputChange}/>

    <label>
    <input type="checkbox" 
      name="vegan" 
     value={newRestaurant.vegan}
     onChange={handleInputChange}/>¿Opciones veganas?</label>

    <input type="submit" value="Crear"/>

  </form>
  </>)
};

export default CreateRestaurant;
