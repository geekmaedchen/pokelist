import React from 'react'
import styled from 'styled-components/macro'
import Tag from './Tag'

const PokemonStyled = styled.section`
  display: grid;
  grid-template-columns: 1.5fr 3fr;

  p {
    margin: 0;
  }

  :last-child .Border {
    border-bottom: none;
  }

  .ImageColumn {
    margin-right: 1em;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  img {
    max-width: 100px;
  }
  .Border {
    display: grid;
    grid-template-columns: 1.3fr 0.6fr;
    border-bottom: 1px solid darkgreen;
  }

  .Text {
    margin: 0.3em;
  }

  .PokemonName {
    display: block;
    font-size: 1.17em;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  .descriptionCheckbox {
    margin-top: 0;
    font-weight: bold;

    & :last-child {
      margin-top: 0.8em;
    }
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
      <div className="Border">
        <div className="Text">
          <p>{pokedexId}</p>
          <p className="PokemonName">{pokemonName}</p>
          <p>{region}</p>
          {types.map(typ => (
            <Tag key={typ} text={typ} />
          ))}
        </div>
        <div className="CustomUserColumn">
          <label htmlFor="Want">
            <div className="descriptionCheckbox">Want?</div>
          </label>
          <input
            type="checkbox"
            id="Want"
            name="Want"
            onChange={toggleIsWant}
            checked={isWant}
          />
          <label htmlFor="Lucky">
            <div className="descriptionCheckbox">Lucky?</div>
          </label>
          <input
            type="checkbox"
            id="Lucky"
            name="Lucky"
            onChange={toggleIsLucky}
            checked={isLucky}
          />
        </div>
      </div>
    </PokemonStyled>
  )
}
