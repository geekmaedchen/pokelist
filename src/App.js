import React, { useState } from 'react'
import pokedexData from './pokedex.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Overview from './Overview'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'
import FilterLucky from './FilterLucky'
import Login from './Login'

export default function App() {
  const [pokedex, setPokedex] = useState(pokedexData)

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header>
          <img
            className="Logo"
            src={require('../src/icons/PokeList.png')}
            width="300"
            alt="PokeList-App-Logo"
          />
          <div className="Links">
            <Link to="/overview">Overview</Link>
            <Link to="/">All</Link>
            <Link to="/wanted">Wanted</Link>
            <Link to="/lucky">Lucky</Link>
          </div>
        </Header>
        <Switch>
          <Route exact path="/">
            <AllPokemon pokedex={pokedex} toggle={toggle} />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/wanted">
            <FilterWant pokedex={pokedex} toggle={toggle} />
          </Route>
          <Route path="/lucky">
            <FilterLucky pokedex={pokedex} toggle={toggle} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )

  function toggle(propertyName, pokedexId) {
    const oldPokemon = pokedex.allPokemon[pokedexId]
    // copy and modify pokemon
    const pokemon = {
      ...oldPokemon,
      [propertyName]: !oldPokemon[propertyName],
    }
    // copy all pokemon and overwrite for pokedexId
    const allPokemon = { ...pokedex.allPokemon, [pokedexId]: pokemon }
    // copy pokedex and overwrite allPokemon
    const newPokedex = { ...pokedex, allPokemon: allPokemon }

    setPokedex(newPokedex)
  }
}
