import React from 'react'
import GlobalStyle from './GlobalStyle'
import PokemonUserList from './PokemonUserList'

function App() {
  const pokemon = [
    {
      pokedexId: '#001',
      img: 'https://www.pkparaiso.com/imagenes/shuffle/sprites/001.png',
      pokemonName: 'Bisasam',
      region: 'Kanto',
      typen: ['Pflanze', 'Gift'],
    },
    {
      pokedexId: '#002',
      img: 'https://www.pkparaiso.com/imagenes/shuffle/sprites/002.png',
      pokemonName: 'Bisaknosp',
      region: 'Kanto',
      typen: ['Wasser', 'Gift'],
    },
  ]
  return (
    <div className="App">
      <GlobalStyle />
      {pokemon.map(pokemon => (
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
