import React from 'react'
import pokedex from './pokedex.json'
import friendsData from './friends.json'
import styled from 'styled-components/macro'

export default function Overview() {
  const TableStyled = styled.table`
    background: white;
    border-radius: 3px;
    border-collapse: collapse;
    height: 320px;
    margin: auto;
    max-width: 600px;
    padding: 5px;
    width: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    th {
      color: #d5dde5;
      background: #1b1e24;
      border-bottom: 4px solid #9ea7af;
      border-right: 1px solid #343a45;
      font-size: 1.5rem;
      font-weight: 100;
      padding: 0 10px;
      text-align: left;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      vertical-align: middle;
    }

    th:first-child {
      border-top-left-radius: 3px;
    }

    th:last-child {
      border-top-right-radius: 3px;
      border-right: none;
    }

    tr {
      border-top: 1px solid #c1c3d1;
      border-bottom: 1px solid #c1c3d1;
      color: #666b85;
      font-size: 16px;
      font-weight: normal;
      text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
    }

    tr:first-child {
      border-top: none;
    }

    tr:last-child {
      border-bottom: none;
    }
  `

  return (
    <div>
      <h2>Hello User!</h2>
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
