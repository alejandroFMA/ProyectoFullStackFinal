import {useState} from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

const EditRestaurant = () => {
  return (
  <>
   <form className="formAdmin" >
    <h1>Edita restaurante</h1>
    <p>Introduce los nuevos datos para modificar un restaurante.</p>
    <input
    className="create-input" 
    type="text"
    placeholder="Nombre del restaurante"
    name="name" 
    
    />
   
    <input 
     type="text"
     placeholder="Dirección"
     className="create-input" 
     name="address" 
     />
     
    <input 
     type="text"
     className="create-input" 
     name="type" 
     placeholder="Tipo de cocina"
     />

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Switch
              inputProps={{ "aria-label": "ant design" }}
              type="checkbox"
              name="vegan"            
            />
            <h4>Opcion vegana 🥗</h4>
          </Stack>


    <input className="create-button"type="submit" value="Crear"/>

  </form>
    <img src="https://i.gifer.com/origin/11/114544e9090a354c8b67fe7b47b4aae3_w200.gif"></img>

</>)
};

export default EditRestaurant;
