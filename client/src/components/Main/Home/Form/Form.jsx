const Form = ({onSearchChange, setFoodType, vegan, setVegan}) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearchChange();
  // };

  return (
    <>
      <form className="filtroHome">
      
          <div class="form__group field">
            <input type="text" 
            class="form__field" 
            placeholder="Buscar restaurantes" name="name" 
            required onChange={(event) => onSearchChange(event.target.value)}/>
            <label for="name" class="form__label">Restaurante</label>
          </div>

          

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
