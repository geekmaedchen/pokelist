import React from 'react'
import PokemonUserList from './PokemonUserList'

export default { title: 'PokemonUserList' }

export const PokemonUserListUnchecked = () => (
  <div style={{ width: 375, margin: 30 }}>
    <PokemonUserList
      pokedexId={'#001'}
      image={'https://www.pkparaiso.com/imagenes/shuffle/sprites/001.png'}
      pokemonName={'Bisasam'}
      region={'Kanto'}
      types={['Grass', 'Poison']}
      isWant={false}
      isLucky={false}
    />
  </div>
)

export const PokemonUserListChecked = () => (
  <div style={{ width: 375, margin: 30 }}>
    <PokemonUserList
      pokedexId={'#001'}
      image={'https://www.pkparaiso.com/imagenes/shuffle/sprites/001.png'}
      pokemonName={'Bisasam'}
      region={'Kanto'}
      types={['Grass', 'Poison']}
      isWant={true}
      isLucky={true}
    />
  </div>
)
