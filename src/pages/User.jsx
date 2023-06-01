import { useNavigate } from "react-router-dom";

const User = () => {

const navigate =useNavigate()

const handleSubmit = e => {
    e.preventDefault ()
    console.log(e.target[0].value)
    navigate("/pokemons")
}
    return (
        <div>
            <h1>Hellow Trainer!</h1>

            <img src="/escribir.jpg" alt="" />
            
            <form onSubmit={ e => handleSubmit(e)}>
                <div className="input-wrapper">
                    <label htmlFor="Usuario">Usuario </label>
                    <input type="text" id="name"
                    placeholder={"Cive me your name to start"}
                    {...{ required: true }}/>
                    
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default User;