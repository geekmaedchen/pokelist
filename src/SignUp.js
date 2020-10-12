import React, {Component} from 'react'

export default class SignUp extends Component {
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
          this.state.formControls.username.value === '' &&
          this.state.formControls.password.value === ''
        ) {
    
          alert('Please insert name and password')
        } else {
          alert('You signed up')
        }
      }
    
      render() {
   return (
    <div>
    <h1>Sign Up to PokeList</h1>
    <div>We've made it easier to keep track of all the Pokemon you and your friends are wanting.</div>
    <form id="signup" onSubmit={this.submitFormHandler}>
      <input
        type="text"
        name="username"
        id="username-field"
        className="signup-form-field"
        placeholder="Username"
        value={this.state.formControls.username.value}
        onChange={this.changeHandler}
      />
      <input
        type="password"
        name="password"
        id="password"
        className="signup-form-field"
        placeholder="Password"
        value={this.state.formControls.password.value}
        onChange={this.changeHandler}
      />
      <input type="submit" value="Sign up" id="signup-form-submit" />
    </form>
  </div>
   )
      }
} 