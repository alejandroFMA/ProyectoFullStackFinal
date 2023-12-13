const Form = ({onSearchChange, setFoodType, isVegan, setIsVegan}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange();
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Buscar restaurantes"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <select onChange={(e) => setFoodType(e.target.value)}>
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
            checked={isVegan}
            onChange={(e) => setIsVegan(e.target.checked)}
          />
        </label>

        <button type="submit" onSubmit={handleSubmit}>Buscar</button>
      </form>
    </>
  );
};

export default Form;
