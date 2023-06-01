import './app.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import User from './pages/User'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail'

export function App() {
 

  return (
    <div id='App'>
      <HashRouter>

        <h1>POKEDEX OF THE POKEMONS</h1>

        <Routes>
          <Route 
          path ="/"
          element={ <User />}        
          />
          <Route 
          path ="/pokemons"
          element={ <PokemonList />}        
          />
          <Route 
          path ="/pokemons/:id"
          element={ <PokemonDetail />}        
          />
        </Routes>
        
        <p></p>
        
      </HashRouter>

      
        
    </div>
  )
}
