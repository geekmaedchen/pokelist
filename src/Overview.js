import React from 'react'
import pokedex from './pokedex.json'
import friendsData from './friends.json'

export default function Overview() {
  return (
    <div>
      <h2>Hello User!</h2>
      <p>Your friends need these pokemon:</p>
      {pokedex.allPokemonIds
        .map(id => pokedex.allPokemon[id] || { pokemonName: 'unknown Id' + id })
        .map(pokemon => (
          <div>
            {pokemon.pokedexId} {pokemon.pokemonName}&nbsp;
            {(friendsData.allWanted[pokemon.pokedexId] || []).join(', ')}
          </div>
        ))}
    </div>
  )
}
