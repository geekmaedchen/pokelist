import React from 'react'
import styled from 'styled-components/macro'
import typeNames from './typeNames.json'

export default function Tag({ text }) {
  return <TagStyled color={text} className={text}>{typeNames[text].name}</TagStyled>
}

const TagStyled = styled.span`
  margin: 0 10px 0 0;
  display: inline-block;
  padding: 3px;
  border: 1px solid black;
  color: ${props => findColors(props.color).color || 'black'};
  background-color: ${props => findColors(props.color).background || 'white'};
  border-radius: 8px;

  .normal {background: green}
`

function findColors(color) {
  const mapping = {
    normal: { background: 'grey', color: 'white' },
    fire: { background: 'red', color: 'white' },
    water: { background: 'royalblue', color: 'white' },
    electric: { background: 'gold' },
    grass: { background: 'green', color: 'white' },
    flying: { background: 'skyblue' },
    bug: { background: 'yellowgreen' },
    poison: { background: 'mediumorchid', color: 'white' },
    rock: { background: 'tan' },
    ground: { background: 'peru', color: 'white' },
    fighting: { background: 'crimson', color: 'white' },
    ice: { background: 'powderblue' },
    psychic: { background: 'darkviolet', color: 'white' },
    ghost: { background: 'mediumpurple', color: 'white' },
    dragon: { background: 'slateblue', color: 'white' },
    dark: { background: 'darkgrey' },
    steel: { background: 'silver' },
    fairy: { background: 'mistyrose' },
  }
  return mapping[color]
}
