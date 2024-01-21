import './PokemonCard.css';
import {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemon = ({ url }) => {

const [data, setData] = useState({})

useEffect ( () => {
    getPokemonDetail()
}, [])

const getPokemonDetail = async () => {
    try {
        const resp = await axios.get( url )
        setData(resp.data)
    }catch(error){
        console.error(error)
    }
}
    return (
        
        <Link to= {`/pokemons/${data.id}`}>
            <div  className="pokemones">
                <h1 className="titulo5">{data.name}</h1>
                <img className="img_poke" src={data.sprites?.front_default} alt=""/>
            </div>
        </Link >
    );
};

export default Pokemon;