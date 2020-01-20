import React from 'react'
import pokedex from './pokedex.json'
import friendsData from './friends.json'
import styled from 'styled-components/macro'
import Filter from './Filter'

export default function Overview() {
  const TableStyled = styled.table`
    border-collapse: collapse;
    height: 320px;
    width: 100%;

    th {
      color: darkgreen;
      border-bottom: 2px solid darkgreen;
      font-weight: bold;
      padding: 0 10px;
      text-align: left;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
  `

  return (
    <div>
      <h2>Hello Anja!</h2>
      <Filter />
      <p>Your friends need these pokemon:</p>
      <TableStyled>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Friend</th>
          </tr>
        </thead>

        {pokedex.allPokemonIds
          .map(
            id => pokedex.allPokemon[id] || { pokemonName: 'unknown Id' + id }
          )
          .map(pokemon => (
            <tbody class="table-hover">
              <tr>
                <td>{pokemon.pokedexId}</td>
                <td>{pokemon.pokemonName}</td>
                <td>
                  {(friendsData.allWanted[pokemon.pokedexId] || []).join(', ')}
                </td>
              </tr>
            </tbody>
          ))}
      </TableStyled>
    </div>
  )
}
