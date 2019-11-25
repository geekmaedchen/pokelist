import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const PokelistStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: lightgrey;
  border: 2px solid #202020;
  padding: 0.3rem 1rem;
`
export default function Pokemon({ id, img, name, region, typen = [] }) {
  return (
    <PokelistStyled className="Pokemon">
      <div>
        <img src={img} alt="Icon" />
      </div>
      <div>
        <p className="Card__id">{id}</p>
        <h3>{name}</h3>
        <p className="Card__region">{region}</p>
        {typen.map(typ => (
          <Tag key={typ} text={typ} />
        ))}
      </div>
      <div>
        <h4>Want?</h4>
        <input type="checkbox" />
      </div>
    </PokelistStyled>
  )
}
