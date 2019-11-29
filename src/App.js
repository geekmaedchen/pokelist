import React, { useState } from 'react'
import pokedexData from './pokedex.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'
import FilterLucky from './FilterLucky'

function App() {
  const [pokedex, setPokedex] = useState(pokedexData)

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Header>
              <Link to="/wanted">Wanted Pokemon</Link>
              <Link to="/lucky">Lucky Pokemon</Link>
            </Header>
            <AllPokemon
              pokedex={pokedex}
              toggleIsLucky={toggleIsLucky}
              toggleIsWant={toggleIsWant}
            />
          </Route>
          <Route path="/wanted">
            <Link to="/">All Pokemon</Link>
            <FilterWant
              pokedex={pokedex}
              toggleIsLucky={toggleIsLucky}
              toggleIsWant={toggleIsWant}
            />
          </Route>
          <Route path="/lucky">
            <Link to="/">All Pokemon</Link>
            <FilterLucky
              pokedex={pokedex}
              toggleIsLucky={toggleIsLucky}
              toggleIsWant={toggleIsWant}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  function toggleIsWant(index) {
    const pokemon = pokedex[index]
    setPokedex([
      ...pokedex.slice(0, index),
      { ...pokemon, isWant: !pokemon.isWant },
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
