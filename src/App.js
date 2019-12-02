import React, { useState } from 'react'
import pokedexData from './pokedex.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'
import FilterLucky from './FilterLucky'
import Searchbar from './Searchbar.js'

function App() {
  const [pokedex, setPokedex] = useState(pokedexData)

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Header>
              <Searchbar />
              <div className="Links">
                <Link to="/wanted">Wanted Pokemon</Link>
                <Link to="/lucky">Lucky Pokemon</Link>
              </div>
            </Header>
            <AllPokemon
              pokedex={pokedex}
              toggleIsWant={() => toggle(pokedex.pokedexId, 'want')}
              toggleIsLucky={() => toggle(pokedex.pokedexId, 'lucky')}
            />
          </Route>
          <Route path="/wanted">
            <Header>
              <Link to="/">All Pokemon</Link>
            </Header>
            <FilterWant
              pokedex={pokedex}
              toggleIsWant={() => toggle(pokedex.pokedexId, 'want')}
              toggleIsLucky={() => toggle(pokedex.pokedexId, 'lucky')}
            />
          </Route>
          <Route path="/lucky">
            <Header>
              <Link to="/">All Pokemon</Link>
            </Header>
            <FilterLucky
              pokedex={pokedex}
              toggleIsWant={() => toggle(pokedex.pokedexId, 'isWant')}
              toggleIsLucky={() => toggle(pokedex.pokedexId, 'isLucky')}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )

  function toggle(propertyName, index) {
    const pokemon = pokedex.pokedexId[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, [propertyName]: !pokemon[propertyName] },
      ...pokedex.slice(index + 1),
    ])
  }

  function toggleIsLucky(index) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, isLucky: !pokemon.isLucky },
      ...pokedex.slice(index + 1),
    ])
  }
}

export default App
