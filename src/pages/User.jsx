import { useNavigate } from "react-router-dom";
import './user.css';
import { useState } from "react";
import PokemonList from './PokemonList';

const User = () => {

const navigate =useNavigate();

const [value1, setValue1] = useState("");

const handleSubmit = e => {
    e.preventDefault ();
    <PokemonList nombre={value1}/>
    
}

    return (
        <div className="user">
            <h1 className="titulo2">Hellow Trainer!</h1>
           
            <img className="img_user" src="/escribir.jpg" alt="" />
                       
            
            <form className="form" onSubmit={ e => handleSubmit(e)}>
                <div className="input-wrapper">
                    <label htmlFor="name">User </label>
                    <input 
                    type="text" 
                    name="name"
                    id="name"
                    placeholder={"Enter your name to get started"}
                    onChange={ (e) => setValue1(e.target.value)}
                    value={ value1 }
                    
                    {...{ required: true }}/>

                    <button className="boton" type="submit" >Send</button>
                   
                   
                </div>
            </form>
        </div>
    );
};

export default User;