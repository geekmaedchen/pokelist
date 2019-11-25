import React from 'react'
import GlobalStyle from './GlobalStyle'
import Pokemon from './Pokemon'

function App() {
  const pokemon = [
    {
      id: '#001',
      img: 'https://www.pkparaiso.com/imagenes/shuffle/sprites/001.png',
      name: 'Bisasam',
      region: 'Kanto',
      typen: ['Pflanze', 'Gift'],
    },
    {
      id: '#002',
      img: 'https://www.pkparaiso.com/imagenes/shuffle/sprites/002.png',
      name: 'Bisaknosp',
      region: 'Kanto',
      typen: ['Pflanze', 'Gift'],
    },
  ]
  return (
    <div className="App">
      <GlobalStyle />
      {pokemon.map(pokemon => (
        <Pokemon
          img={pokemon.img}
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          region={pokemon.region}
          typen={pokemon.typen}
        />
      ))}
    </div>
  )
}

export default App
