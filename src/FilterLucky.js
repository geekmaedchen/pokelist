import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function FilterLucky({ pokedex, toggle }) {
  return (
    <div>
      {pokedex.allPokemonIds
        .map(id => pokedex.allPokemon[id] || { pokemonName: 'unknown Id' + id })
        .filter(pokemon => pokemon.isLucky)
        .map(pokemon => (
          <PokemonUserList
            key={pokemon.pokedexId}
            pokedexId={pokemon.pokedexId}
            image={pokemon.image}
            pokemonName={pokemon.pokemonName}
            region={pokemon.region}
            types={pokemon.types}
            isWant={pokemon.isWant}
            isLucky={pokemon.isLucky}
            toggleIsWant={() => toggle('isWant', pokemon.pokedexId)}
            toggleIsLucky={() => toggle('isLucky', pokemon.pokedexId)}
          />
        ))}
    </div>
  )
}
