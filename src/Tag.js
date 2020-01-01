import React from 'react'
import styled from 'styled-components/macro'

export default function Tag({ text }) {
  return <TagStyled color={text}>{text}</TagStyled>
}

const TagStyled = styled.span`
  margin: 0 10px 0 0;
  display: inline-block;
  padding: 3px;
  border: 1px solid black;
  color: ${props => findColors(props.color).color || 'black'};
  background-color: ${props => findColors(props.color).background};
  border-radius: 8px;
`

function findColors(color) {
  const mapping = {
    Normal: { background: 'grey', color: 'white' },
    Fire: { background: 'red', color: 'white' },
    Water: { background: 'royalblue', color: 'white' },
    Electric: { background: 'gold' },
    Grass: { background: 'green', color: 'white' },
    Flying: { background: 'skyblue' },
    Bug: { background: 'yellowgreen' },
    Poison: { background: 'mediumorchid', color: 'white' },
    Rock: { background: 'tan' },
    Ground: { background: 'peru', color: 'white' },
    Fighting: { background: 'crimson', color: 'white' },
    Ice: { background: 'powderblue' },
    Psychic: { background: 'darkviolet', color: 'white' },
    Ghost: { background: 'mediumpurple', color: 'white' },
    Dragon: { background: 'slateblue', color: 'white' },
    Dark: { background: 'darkgrey' },
    Steel: { background: 'silver' },
    Fairy: { background: 'mistyrose' },
  }
  return mapping[color]
}
