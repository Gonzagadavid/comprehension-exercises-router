import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom'
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Route path="/pokemon-details/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />}/>
        <Route path="/" exact render={(props) => <Pokedex {...props} pokemons={pokemons} />}/>
      </BrowserRouter>
    </div>
  );
}

export default App;