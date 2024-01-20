import "../componentes/PokemonDetail.css";
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const PokemonDetail = () => {

    const [data, setData] = useState ({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect ( () => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( resp => setData(resp.data) )
        .catch( error => console.error(error) )
    }, [id])

    return (
        <div className="PokemonDetail">
            <h1 className='nombre'> {data.name}</h1>
            <img className='foto' src={data.sprites?.other.dream_world.front_default} alt="" />

            <button className='regresar1' onClick={() => navigate("/pokemons")}> Regresar</button>
        </div>
    );
};

export default PokemonDetail;