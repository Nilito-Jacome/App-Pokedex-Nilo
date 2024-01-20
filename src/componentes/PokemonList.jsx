import "../componentes/PokemonList.css";
import PokemonCard from "../componentes/PokemonCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState(0);
  const navigate = useNavigate();

  const getData1 = () => {
    return localStorage.getItem('nombre')
  }
  useEffect(() => {
    setNombre(getData1());
  })
  
  useEffect(() => {
    getData();
  }, [numero]);

  const getData = async () => {
    try {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${numero}&limit=20`);
      //const resp = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemonsList(resp.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const Salir = () => {
    navigate("/");
    alert(`Adios ${nombre} tes esperamos despues`);
    localStorage.removeItem("nombre");
  }

  const Mas = () => {
    if (numero >= 0 && numero < 1300) {
      setNumero ( numero + 20 );
      getData(numero);
    } else {
      setNumero (numero + 0 );
    }           
  }
  
  const Menos = () => {
    if (numero > 0) {
      setNumero ( numero - 20 );   
      getData(numero);         
    } else {
      alert("no hay menos pokemones");
    }
  }
 console.log(numero)

  return (
    <div className="PokemonsList">
      <h1 className="titulo3">Pokemon list</h1>
      <h2 className="titulo4">Welcome {nombre}</h2>
      <div className="tarjetas">

        {pokemonsList.map((pokemonCard) => (
          <PokemonCard 
          key={pokemonCard.name} 
          url={pokemonCard.url} 
          />
        ))}
      </div>
      <div className="Botones">
        <button className="Salir" onClick={Salir}> Salir</button>
        <button className="Mas" onClick={Mas}> Mas</button>
        <button className="Menos" onClick={Menos}> Menos</button>
      </div>
    </div>
  );
};

export default PokemonList;
