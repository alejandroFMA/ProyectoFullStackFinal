import React from "react";

const CreateRestaurant = () => {
  return( 
  <>
  <form>
    <label>Nombre</label>
    <input type="text" />
    <label>Dirección</label>
    <input type="text" />
    <label>Tipo de cocina:</label>
    <input type="text" />
    <label>Opciones veganas</label>
    <input type="checkbox" />
    <input type="submit" value="Crear"/>

  </form>;
  </>)
};

export default CreateRestaurant;
