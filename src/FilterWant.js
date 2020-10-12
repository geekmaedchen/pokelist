import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function FilterWant({ pokedex, userData, toggle }) {
  return (
    <div>
      {pokedex.allPokemonIds
        .map(id => pokedex.allPokemon[id] || { pokemonName: 'unknown Id' + id })
        .filter(pokemon => userData.allUserPokemon[pokemon.pokedexId].isWant)
        .map(pokemon => (
          <PokemonUserList
            key={pokemon.pokedexId}
            pokedexId={pokemon.pokedexId}
            userData={userData.allUserPokemon[pokemon.pokedexId]}
            image={pokemon.image}
            pokemonName={pokemon.pokemonName}
            region={pokemon.region}
            types={pokemon.types}
            toggleIsWant={() => toggle('isWant', pokemon.pokedexId)}
            toggleIsLucky={() => toggle('isLucky', pokemon.pokedexId)}
          />
        ))}
    </div>
  )
}
