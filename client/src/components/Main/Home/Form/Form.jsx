import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

const Form = ({ onSearchChange, setFoodType, vegan, setVegan }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearchChange();
  // };

  return (
    <>
      <form className="filtroHome">
        <input
          type="text"
          className="form__field"
          placeholder="Buscar restaurantes..."
          name="name"
          required
          onChange={(event) => onSearchChange(event.target.value)}
        />

        <div className="filtroComida">
          <select onChange={(event) => setFoodType(event.target.value)}>
            {/* pendiente realizar fetch de types e restaurant para mapear select con todos los types*/}
            <option value="">Todos los Tipos</option>
            <option value="Americana">Americana</option>
            <option value="Italiana">Italiana</option>
            <option value="Española">Española</option>
            <option value="Internacional">Internacional</option>
            <option value="China">China</option>
            <option value="Japonesa">Japonesa</option>
            <option value="Mexicana">Mexicana</option>
          </select>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <h1>🍔</h1>
            <Switch
              inputProps={{ "aria-label": "ant design" }}
              type="checkbox"
              checked={vegan}
              onChange={(event) => setVegan(event.target.checked)}
            />
            <h1>🥗</h1>
          </Stack>
        </div>
      </form>
    </>
  );
};

export default Form;
