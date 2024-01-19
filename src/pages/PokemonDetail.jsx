import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './pokemonDetail.css';
import { useNavigate } from "react-router-dom";

const PokemonDetail = () => {
    
    const [data, setData] = useState ({})
    const { id } = useParams()
    const navigate =useNavigate()

    useEffect ( () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( resp => setData(resp.data) )
        .catch( error => console.error(error) )
    }, [id])

    return (
        <div className='pokemon-card'>
            <h1 className='nombre'> {data.name}</h1>
            <img className='foto' src={data.sprites?.other.dream_world.front_default} alt="" />

            <button className='regresar1' onClick={() => navigate("/pokemons")}> Regresar</button>
        </div>
    );
};

export default PokemonDetail;