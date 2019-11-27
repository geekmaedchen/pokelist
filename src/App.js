import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import pokedexData from './pokedex.json'
import PokemonUserList from './PokemonUserList'

function App() {
  const [pokedex, setPokedex] = useState(pokedexData)
  return (
    <div className="App">
      <GlobalStyle />
      {pokedex.map(pokemon => (
        <PokemonUserList
          key={pokemon.id}
          pokedexId={pokemon.pokedexId}
          img={pokemon.img}
          pokemonName={pokemon.pokemonName}
          region={pokemon.region}
          typen={pokemon.typen}
        />
      ))}
    </div>
  )
}

export default App
