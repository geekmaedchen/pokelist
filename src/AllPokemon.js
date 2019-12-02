import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function AllPokemon({
  pokedex,
  me,
  toggleIsWant,
  toggleIsLucky,
}) {
  return (
    <div>
      {pokedex.map((pokemon, index) => (
        <PokemonUserList
          key={pokemon.pokedexId}
          pokedexId={pokemon.pokedexId}
          id={pokemon.pokedexId}
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
