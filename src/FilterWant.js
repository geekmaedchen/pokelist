import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function FilterWant({ pokedex, toggleIsWant, toggleIsLucky }) {
  return (
    <div>
      {pokedex.allPokemon
        .filter(pokemon => pokemon.isWant)
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
            toggleIsWant={() => toggleIsWant(pokedex.pokedexId)}
            toggleIsLucky={() => toggleIsLucky(pokedex.pokedexId)}
          />
        ))}
    </div>
  )
}
