import React, { useState } from 'react'
import pokedexData from './pokedex.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'
import FilterLucky from './FilterLucky'
import Searchbar from './Searchbar.js'

export default function App() {
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
            <AllPokemon pokedex={pokedex} toggle={toggle} />
          </Route>
          <Route path="/wanted">
            <Header>
              <Link to="/">All Pokemon</Link>
            </Header>
            <FilterWant pokedex={pokedex} toggle={toggle} />
          </Route>
          <Route path="/lucky">
            <Header>
              <Link to="/">All Pokemon</Link>
            </Header>
            <FilterLucky pokedex={pokedex} toggle={toggle} />
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

  //function toggleIsLucky(index) {
  //  const pokemon = pokedex[index]
  // setPokedex([
  //  ...pokedex.slice(0, index),
  //   { ...pokemon, isLucky: !pokemon.isLucky },
  //    ...pokedex.slice(index + 1),
  //   ])
  // }
}
