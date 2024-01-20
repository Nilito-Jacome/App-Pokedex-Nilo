import '../componentes/User.css';
import { useNavigate } from "react-router-dom";
import { useState} from "react";

const User = () => {
    const navigate =useNavigate();

    const [value1, setValue1] = useState("");
    const [saveData1, setSaveData1] = useState(false);

    const handleImputChange = (e) => {
      const text = e.target.value
      setValue1(text);
    }

    const handleSubmit = e => {
        e.preventDefault ();
        navigate("/pokemons");
        localStorage.setItem('nombre', value1);
        alert(`Hola ${value1}`);
        setSaveData1(true);
      }

  return (
    <div className="User">
      <h1 className="titulo2">Hellow Trainer!</h1>
      <img className="img_user" src="/escribir.jpg" alt="" />

      <form className="form" onSubmit={(e) => handleSubmit(e)}>

        <div className="input-wrapper">
          <label htmlFor="name">User </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder = {"Enter your name to get started"}
            onChange = { handleImputChange }            
            {...{ required: true }}
          />

          <button className="boton" type="submit">
            Send
          </button>         
            
        </div>
      </form>
    </div>
  );
};

export default User;

