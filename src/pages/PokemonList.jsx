import { useState, useEffect } from 'react'
import axios from 'axios';
import Pokemon from '../components/Pokemon';
import './pokemonList.css';
import User from './User';

const PokemonList = (nombre) => {

  const valor = nombre.value1

  console.log(valor+"hola que tal")

  const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
      getData()
      }, []);
    
      const getData = async () => {
        try{
          const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
          console.log(resp.data)
          setPokemonsList(resp.data.results)
        }catch(error){
          console.error(error)
        }        
      };
      
    return (
        <div className='pokemons'>
            <h1 className='titulo3'>Pokemon list</h1>
            <h2 className='titulo4'>Welcome </h2>
        <div className='tarjetas'>
            {
              pokemonsList.map(pokemon => (
                <Pokemon 
                key = {pokemon.name}
                url = {pokemon.url}
                />
                ))
              }
        </div>
        </div>
    );
};

export default PokemonList;