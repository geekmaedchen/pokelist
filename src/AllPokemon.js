import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function AllPokemon({ pokedex, userData, toggle }) {
  return (
    <div>
      {pokedex.allPokemonIds
        .map(id => pokedex.allPokemon[id] || { pokemonName: 'unknown Id' + id })
        .map(pokemon => (
          <PokemonUserList
            pokemon={pokemon}
            userData={userData.allUserPokemon[pokemon.pokedexId]}
            key={pokemon.pokedexId}
            pokedexId={pokemon.pokedexId}
            id={pokemon.pokedexId}
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
