import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

export default { title: 'PokemonUserList' }

export const PokemonUserListUnchecked = ({
  img = 'https://www.pkparaiso.com/imagenes/shuffle/sprites/001.png',
  pokedexId = '#001',
  pokemonName = 'Bisasam',
  region = 'Kanto',
  typen = ['Pflanze', 'Gift'],
}) => (
  <PokemonStyled pokedexId={pokedexId}>
    <div>
      <img src={img} alt="Pokemon Icon" />
    </div>
    <div>
      <p>{pokedexId}</p>
      <h3>{pokemonName}</h3>
      <p>{region}</p>
      {typen.map(typ => (
        <Tag key={typ} text={typ} />
      ))}
    </div>
    <div>
      <h4>Want?</h4>
      <input type="checkbox" />
    </div>
  </PokemonStyled>
)

export const PokemonUserListChecked = ({
  img = 'https://www.pkparaiso.com/imagenes/shuffle/sprites/001.png',
  pokedexId = '#001',
  pokemonName = 'Bisasam',
  region = 'Kanto',
  typen = ['Pflanze', 'Gift'],
}) => (
  <PokemonStyled>
    <div>
      <img src={img} alt="Pokemon Icon" />
    </div>
    <div>
      <p>{pokedexId}</p>
      <h3>{pokemonName}</h3>
      <p>{region}</p>
      {typen.map(typ => (
        <Tag key={typ} text={typ} />
      ))}
    </div>
    <div>
      <h4>Want?</h4>
      <input type="checkbox" checked />
    </div>
  </PokemonStyled>
)

const PokemonStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: lightgrey;
  border: 2px solid #202020;
  padding: 0.3rem 1rem;
`
