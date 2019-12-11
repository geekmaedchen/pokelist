import React, { useState } from 'react'
import pokedexData from './pokedex.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'
import FilterLucky from './FilterLucky'
import Searchbar from './Searchbar.js'
import Overview from './Overview'

export default function App() {
  const [pokedex, setPokedex] = useState(pokedexData)

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header>
          <img
            className="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
            alt="Pokemon Logo"
          />
          <Switch>
            <Route exact path="/">
              <div className="Links">
                <Link to="/overview">Overview</Link>
                <Link to="/wanted">Wanted Pokemon</Link>
                <Link to="/lucky">Lucky Pokemon</Link>
              </div>
              <Searchbar />
            </Route>
            <Route>
              <Link to="/">All Pokemon</Link>
            </Route>
          </Switch>
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
