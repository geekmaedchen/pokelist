import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const PokemonStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: lightgrey;
  border: 2px solid #202020;
  padding: 0.3rem 1rem;
`
export default function Pokemon({
  pokedexId,
  img,
  pokemonName,
  region,
  typen = [],
  want,
  lucky,
}) {
  return (
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
        <input type="checkbox" checked={want} />
        <h4>Lucky?</h4>
        <input type="checkbox" checked={lucky} />
      </div>
    </PokemonStyled>
  )
}
