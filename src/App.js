import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import pokedexData from './pokedex.json'
import Header from './Header'
import PokemonUserList from './PokemonUserList'

function App() {
  const [pokedex, setPokedex] = useState(pokedexData)
  const [isOnlyWantShown, setIsOnlyWantShown] = useState([])
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        <button onClick={filterWant}>
          {isOnlyWantShown ? 'All Pokemon' : 'Wanted Pokemon'}
        </button>
      </Header>
      {(isOnlyWantShown
        ? pokedex.filter(pokemon => pokemon.want)
        : pokedex
      ).map((pokemon, index) => (
        <PokemonUserList
          key={pokemon.pokedexId}
          pokedexId={pokemon.pokedexId}
          img={pokemon.img}
          pokemonName={pokemon.pokemonName}
          region={pokemon.region}
          typen={pokemon.typen}
          want={pokemon.want}
          lucky={pokemon.lucky}
          toggleWant={() => toggle(index, 'want')}
          toggleLucky={() => toggle(index, 'lucky')}
        />
      ))}
    </div>
  )
  function toggle(index, propertyName) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, want: !pokemon[propertyName] },
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
  function filterWant() {
    setIsOnlyWantShown(!isOnlyWantShown)
  }
}

export default App
