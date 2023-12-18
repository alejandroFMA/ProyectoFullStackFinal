import React from "react";

const Filter = ({onSearchChange}) => {
  return <input
  type="text"
  placeholder="Buscar por nombre de restaurante"
  onChange={onSearchChange}
/>;
};

export default Filter;
