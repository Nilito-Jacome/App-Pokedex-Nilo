import { useState, useEffect } from 'react'
import axios from 'axios';
import Pokemon from '../components/Pokemon';

const PokemonList = () => {

  const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
      getData()
      }, []);
    
      const getData = async () => {
        try{
          const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
          setPokemonsList(resp.data.results)
        }catch(error){
          console.error(error)
        }        
      };
      
    return (
        <div className='PokemonList'>
            <h1>Pokemon list</h1>
            <h2>Welcome NOMBRE</h2>
            {
              pokemonsList.map(pokemon => (
                <Pokemon 
                key = {pokemon.name}
                url={pokemon.url}
                />
              ))
            }
        </div>
    );
};

export default PokemonList;