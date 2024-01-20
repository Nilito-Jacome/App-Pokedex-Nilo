import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import User from './componentes/User';
import PokemonList from './componentes/PokemonList';
import PokemonDetail from './componentes/PokemonDetail';

const  App = () => {

  return (
    <div className="App">

      <HashRouter>
        <h1 className="titulo1">POKEDEX OF THE POKEMONS</h1>

        <Routes>

          <Route 
          path="/" 
          element={<User />} 
          />
          <Route 
          path="/pokemons" 
          element={<PokemonList />} 
          />
          <Route 
          path="/pokemons/:id" 
          element={<PokemonDetail />} 
          />
        </Routes>


      </HashRouter>
    </div>
  );
}

export default App;
