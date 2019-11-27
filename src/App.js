import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import pokedexData from './pokedex.json'
import Header from './Header'
import PokemonUserList from './PokemonUserList'

function App() {
  const [pokedex, setPokedex] = useState(pokedexData)
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <a href="FilterWant">Filter Want</a>
      </Header>
      {pokedex.map((pokemon, index) => (
        <PokemonUserList
          key={pokemon.pokedexId}
          pokedexId={pokemon.pokedexId}
          img={pokemon.img}
          pokemonName={pokemon.pokemonName}
          region={pokemon.region}
          typen={pokemon.typen}
          want={pokemon.want}
          lucky={pokemon.lucky}
          toggleWant={() => toggleWant(index)}
          toggleLucky={() => toggleLucky(index)}
        />
      ))}
    </div>
  )
  function toggleWant(index) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, want: !pokemon.want },
      ...pokedex.slice(index + 1),
    ])
  }
  function toggleLucky(index) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, lucky: !pokemon.lucky },
      ...pokedex.slice(index + 1),
    ])
  }
}

export default App
