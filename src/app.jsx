import "./app.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

export function App() {
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
