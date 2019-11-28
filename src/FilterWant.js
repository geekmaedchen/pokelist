import React from 'react'
import PokemonUserList from './PokemonUserList'

export default function FilterWant({
  pokedex,
  toggleWant,
  toggleLucky,
  isOnlyWantShown,
}) {
  return (
    <div>
      {pokedex
        .filter(pokemon => pokemon.want)
        .map((pokemon, index) => (
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

/*
  pokedex,
  filterWant,
  toggleWant,
  toggleLucky,
  ,
}) {
      <GlobalStyle />
      <Header>
        <button onClick={filterWant}>
          {isOnlyWantShown ? 'All Pokemon' : 'Wanted Pokemon'}
        </button>
        <button onClick={filterLucky}>
          {isOnlyLuckyShown ? 'All Pokemon' : 'Lucky Pokemon'}
        </button>
      </Header>
{isOnlyWantShown
        ? pokedex.filter(pokemon => pokemon.want)
        : pokedex(
                      ).map((pokemon, index) => (
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

      
*/
