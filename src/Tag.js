import React from 'react'
import styled from 'styled-components/macro'

export default function Tag({ text }) {
  return <TagStyled color={text}>{text}</TagStyled>
}

const TagStyled = styled.span`
  margin: 1rem 1rem 1rem 0;
  padding: 3px;
  border: 1px solid black;
  color: black;
  background-color: ${props => findColor(props.color)};
  border-radius: 8px;
`

function findColor(color) {
  const mapping = {
    Normal: 'grey',
    Feuer: 'red',
    Wasser: 'royalblue',
    Elektro: 'gold',
    Pflanze: 'green',
    Flug: 'skyblue',
    Käfer: 'yellowgreen',
    Gift: 'mediumorchid',
    Gestein: 'tan',
    Boden: 'peru',
    Kampf: 'crimson',
    Eis: 'powderblue',
    Psycho: 'darkviolet',
    Geist: 'mediumpurple',
    Drache: 'slateblue',
    Unlicht: 'darkgrey',
    Stahl: 'silver',
    Fee: 'mistyrose',
  }
  return mapping[color]
}
