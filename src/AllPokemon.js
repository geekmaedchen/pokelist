import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function AllPokemon({ pokedex, toggleWant, toggleLucky }) {
  return (
    <div>
      {pokedex.map((pokemon, index) => (
        <PokemonUserList
          key={pokemon.pokedexId}
          pokedexId={pokemon.pokedexId}
          img={pokemon.img}
          pokemonName={pokemon.pokemonName}
          region={pokemon.region}
          typen={pokemon.typen}
          want={pokemon.want}
          lucky={pokemon.lucky}
          toggleWant={() => toggleWant(index)}
          toggleLucky={() => toggleLucky(index)}
        />
      ))}
    </div>
  )
}
