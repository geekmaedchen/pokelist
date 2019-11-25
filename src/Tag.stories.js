import React from 'react'
import styled from 'styled-components/macro'

export default { title: 'Tag' }

export const TagNormal = ({ text = 'Normal' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagFeuer = ({ text = 'Feuer' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagWasser = ({ text = 'Wasser' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagElektro = ({ text = 'Elektro' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagPflanze = ({ text = 'Pflanze' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagFlug = ({ text = 'Flug' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagKäfer = ({ text = 'Käfer' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagGift = ({ text = 'Gift' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagGestein = ({ text = 'Gestein' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagBoden = ({ text = 'Boden' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagKampf = ({ text = 'Kampf' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagEis = ({ text = 'Eis' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagPsycho = ({ text = 'Psycho' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagGeist = ({ text = 'Geist' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagDrache = ({ text = 'Drache' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagUnlicht = ({ text = 'Unlicht' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagStahl = ({ text = 'Stahl' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

export const TagFee = ({ text = 'Fee' }) => (
  <TagStyled color={text}>{text}</TagStyled>
)

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
    Elektro: 'gold',
    Pflanze: 'forestgreen',
    Flug: 'dodgerblue',
    Käfer: 'green',
    Gift: 'indigo',
    Gestein: 'brown',
    Boden: 'peru',
    Kampf: 'firebrick',
    Eis: 'aqua',
    Psycho: 'pink',
    Geist: 'mediumslateblue',
    Drache: 'midnightblue',
    Unlicht: 'dimgray',
    Stahl: 'silver',
    Fee: 'pink',
  }
  return mapping[color]
}
