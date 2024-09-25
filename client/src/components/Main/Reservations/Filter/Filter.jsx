import React from "react";

const Filter = ({onSearchChange}) => {
  return <input
  className="filtro-reservas"
  type="text"
  placeholder="Buscar por nombre de restaurante"
  onChange={onSearchChange}
/>;
};

export default Filter;
