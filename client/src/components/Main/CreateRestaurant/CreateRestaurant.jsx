import {useState} from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

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
    className="create-input" 
    type="text"
    placeholder="Nombre del restaurante"
    name="name" 
    value={newRestaurant.name}
    onChange={handleInputChange}
    />
   
    <input 
     type="text"
     placeholder="Dirección"
     className="create-input" 
     name="address" 
     value={newRestaurant.address}
     onChange={handleInputChange}/>
     
    <input 
     type="text"
     className="create-input" 
     name="type" 
     placeholder="Tipo de cocina"
     value={newRestaurant.type}
     onChange={handleInputChange}/>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Switch
              inputProps={{ "aria-label": "ant design" }}
              type="checkbox"
              name="vegan" 
              value={newRestaurant.vegan}
              onChange={handleInputChange}           
            />
            <h4>Opcion vegana 🥗</h4>
          </Stack>


    <input className="create-button"type="submit" value="Crear"/>

  </form>
  </>)
};

export default CreateRestaurant;
