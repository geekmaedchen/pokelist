import React from 'react'
import styled from 'styled-components/macro'

export default function Searchbar({ onInput }) {
  return (
    <SearchbarStyled>
      <img
        className="search-icon"
        src={require('../src/icons/search.svg')}
        alt=""
      />
      <input onInput={onInput} />
    </SearchbarStyled>
  )
}

const SearchbarStyled = styled.div`
  display: flex;
  padding: 4px;
  width: 320px;
  height: 2.5rem;
  margin: 0 0 0 12px;
  border: 4px solid var(--gradientcolordark);
  border-radius: 12px;
  background: var(--white);

  input {
    background: var(--white);
    font-size: 1rem;
    border-radius: 12px;
    width: 100%;
    margin-left: 5px;
  }
`
