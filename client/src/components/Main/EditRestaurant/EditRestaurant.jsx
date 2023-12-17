import React from "react";

const EditRestaurant = () => {
  return (
  <>
  <form className="formAdmin">
  <label>Nombre</label>
  <input type="text" />
  <label>Dirección</label>
  <input type="text" />
  <label>Tipo de cocina:</label>
  <input type="text" />
  <label>Opciones veganas</label>
  <input type="checkbox" />
  <input type="submit" value="Editar"/>
</form>
</>)
};

export default EditRestaurant;
