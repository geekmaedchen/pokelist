import React from 'react'
import styled from 'styled-components/macro'
import Tag from './Tag'

const PokemonStyled = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  background: lightgray;
  border: 2px solid #202020;
  border-top: none;

  .ImageColumn {
    margin-right: 1em;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  img {
    max-width: 100px;
  }

  .PokemonName {
    display: block;
    font-size: 1.17em;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
    font-weight: bold;
  }

  .descriptionCheckbox {
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: bold;
  }

  input {
    margin: 0 0 0 15px;
  }
`
export default function PokemonUserList({
  pokedexId,
  image,
  pokemonName,
  region,
  types = [],
  isWant,
  isLucky,
  toggleIsWant,
  toggleIsLucky,
}) {
  return (
    <PokemonStyled>
      <div className="ImageColumn">
        <img src={image} alt="Pokemon Icon" />
      </div>
      <div>
        <p>{pokedexId}</p>
        <p className="PokemonName">{pokemonName}</p>
        <p>{region}</p>
        {types.map(typ => (
          <Tag key={typ} text={typ} />
        ))}
      </div>
      <div className="CustomUserColumn">
        <label for="Want">
          <div className="descriptionCheckbox">Want?</div>
        </label>
        <input
          type="checkbox"
          id="Want"
          name="Want"
          onClick={toggleIsWant}
          checked={isWant}
        />
        <label for="Lucky">
          <div className="descriptionCheckbox">Lucky?</div>
        </label>
        <input
          type="checkbox"
          id="Lucky"
          name="Lucky"
          onClick={toggleIsLucky}
          checked={isLucky}
        />
      </div>
    </PokemonStyled>
  )
}
