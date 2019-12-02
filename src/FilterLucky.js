import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function FilterLucky({ pokedex, toggleIsWant, toggleIsLucky }) {
  return (
    <div>
      {pokedex.allPokemon
        .filter(pokemon => pokemon.isLucky)
        .map((pokemon, index) => (
          <PokemonUserList
            key={pokemon.pokedexId}
            pokedexId={pokemon.pokedexId}
            image={pokemon.image}
            pokemonName={pokemon.pokemonName}
            region={pokemon.region}
            types={pokemon.types}
            isWant={pokemon.isWant}
            isLucky={pokemon.isLucky}
            toggleIsWant={() => toggleIsWant(index)}
            toggleIsLucky={() => toggleIsLucky(index)}
          />
        ))}
    </div>
  )
}
