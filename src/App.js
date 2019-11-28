import React, { useState } from 'react'
import pokedexData from './pokedex.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'

function App() {
  const [pokedex, setPokedex] = useState(pokedexData)

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Link to="/wanted">Wanted Pokemon</Link>
            <AllPokemon
              pokedex={pokedex}
              toggleLucky={toggleLucky}
              toggleWant={toggleWant}
            />
          </Route>
          <Route path="/wanted">
            <Link to="/">All Pokemon</Link>
            <FilterWant
              pokedex={pokedex}
              toggleLucky={toggleLucky}
              toggleWant={toggleWant}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  function toggleWant(index) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, want: !pokemon.want },
      ...pokedex.slice(index + 1),
    ])
  }
  function toggleLucky(index) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, lucky: !pokemon.lucky },
      ...pokedex.slice(index + 1),
    ])
  }
}

export default App
