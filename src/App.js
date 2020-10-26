import React, { useState } from 'react'
import pokedex from './pokedex.json'
import storedUserData from './user.json'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Overview from './Overview'
import Filter from './Filter'
import AllPokemon from './AllPokemon'
import FilterWant from './FilterWant'
import FilterLucky from './FilterLucky'
import Login from './Login'
import SignUp from './SignUp'


export default function App() {
  const [userData, setUserData] = useState(storedUserData)

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
          <div><Filter></Filter></div>
        </Header>
        <Switch>
          <Route exact path="/">
            <AllPokemon pokedex={pokedex} userData={userData} toggle={toggle} />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/wanted">
            <FilterWant pokedex={pokedex} userData={userData} toggle={toggle} />
          </Route>
          <Route path="/lucky">
            <FilterLucky pokedex={pokedex} userData={userData} toggle={toggle} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  )

  function toggle(propertyName, pokedexId) {
    const oldPokemon = userData.allUserPokemon[pokedexId]
    // copy and modify pokemon
    const pokemon = {
      ...oldPokemon,
      [propertyName]: !oldPokemon[propertyName],
    }
    // copy all pokemon and overwrite for pokedexId
    const allPokemon = { ...userData.allUserPokemon, [pokedexId]: pokemon }
    // copy pokedex and overwrite allPokemon
    const newPokedex = { ...userData, allUserPokemon: allPokemon }

    setUserData(newPokedex)
  }
}