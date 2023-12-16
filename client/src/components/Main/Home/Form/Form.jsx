const Form = ({onSearchChange, setFoodType, vegan, setVegan}) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearchChange();
  // };

  return (
    <>
      <form className="filtroHome">
        <input
          type="text"
          placeholder="Buscar restaurantes"
          onChange={(event) => onSearchChange(event.target.value)}
        />
        {/* <button type="submit" onSubmit={handleSubmit}>Buscar</button> */}
        <select onChange={(event) => setFoodType(event.target.value)}> {/* pendiente realizar fetch de types e restaurant para mapear select con todos los types*/}
          <option value="">Todos los Tipos</option>
          <option value="Americana">Americana</option>
          <option value="Italiana">Italiana</option>
          <option value="Española">Española</option>
          <option value="Internacional">Internacional</option>
          <option value="China">China</option>
        </select>
        <label>
          Vegano:
          <input
            type="checkbox"
            checked={vegan}
            onChange={(event) => setVegan(event.target.checked)}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
