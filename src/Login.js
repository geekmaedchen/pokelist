import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      formControls: {
        username: {
          value: '',
        },
        password: {
          value: '',
        },
      },
    }
  }
  changeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    const newState = {
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    }
    this.setState(newState)
  }
  submitFormHandler = event => {
    event.preventDefault()

    if (
      this.state.formControls.username.value === 'user' &&
      this.state.formControls.password.value === '1234'
    ) {
      alert('You logged in')
    } else {
      alert('Wrong Password')
    }

  }
  submitFormHandlerNew = event => {
    event.preventDefault()

    let username = 'john_doe'
    let password = 'monkey'
    let url = 'https://trading-api.pokemongo.hamburg/1/session'
    let headers = new Headers()
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`))
    fetch(url,{mode: 'cors', method: 'POST', headers: headers})
        .then(response => {
            console.log("status code:", response.status)
            console.log("response body", response.body)
            return response
        }).catch(error => {
            console.error(error)
        })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form id="login" onSubmit={this.submitFormHandlerNew}>
          <input
            type="text"
            name="username"
            id="username-field"
            class="login-form-field"
            placeholder="Username"
            value={this.state.formControls.username.value}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            class="login-form-field"
            placeholder="Password"
            value={this.state.formControls.password.value}
            onChange={this.changeHandler}
          />
          <input type="submit" value="Login" id="login-form-submit" />
        </form>
      </div>
    )
  }
}
