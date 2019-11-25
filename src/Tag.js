import React from 'react'
import styled from 'styled-components/macro'

export default function Tag({ text }) {
  return <TagStyled color={text}>{text}</TagStyled>
}

const TagStyled = styled.span`
  margin: 1rem 1rem 1rem 0;
  padding: 3px;
  border: 1px solid black;
  color: whitesmoke;
  background-color: ${props => findColor(props.color)};
  border-radius: 8px;
`

function findColor(color) {
  const mapping = {
    Normal: 'grey',
    Feuer: 'red',
    Wasser: 'blue',
    Elektro: 'yellow',
    Pflanze: 'green',
    Flug: 'blue',
    Käfer: 'green',
    Gift: 'indigo',
    Gestein: 'braun',
    Boden: 'gelbbraun',
    Kampf: 'rot',
    Eis: 'hellblau',
    Psycho: 'pink',
    Geist: 'lila',
    Drache: 'lila',
    Unlicht: 'anthrazit',
    Stahl: 'grau',
    Fee: 'pink',
  }
  return mapping[color]
}
