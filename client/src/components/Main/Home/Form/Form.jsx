import {useState} from "react";
const Form = () => {
  
  const {inputValue, setInputValue} = useState("")
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(inputValue);
    setInputValue("");
  };
  return <form>
    <label htmlFor="nombre"></label>
    <input type="text"></input>
    <button type="submit">Buscar</button>


    </form>;
};

export default Form;
