/*
import GlobalStyle from './GlobalStyle'
import pokedexData from './pokedex.json'
import Header from './Header'
import PokemonUserList from './PokemonUserList'



      <GlobalStyle />
      <Header>
        <button onClick={filterWant}>
          {isOnlyWantShown ? 'All Pokemon' : 'Wanted Pokemon'}
        </button>
        <button onClick={filterLucky}>
          {isOnlyLuckyShown ? 'All Pokemon' : 'Lucky Pokemon'}
        </button>
      </Header>
        isOnlyLuckyShown
          ? pokedex.filter(pokemon => pokemon.lucky)
          : pokedex
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
