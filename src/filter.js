import React, {Component} from 'react'


export default class Filter extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {selectValue: ''}
    }

handleChange = event => {
    event.preventDefault()
    if (event.target.options[0].selected === true) {
        console.log('No region')
    }
    this.setState({selectValue:event.target.value})
} 

render() {
    var message = 'You selected ' + this.state.selectValue
    return (
      <div>
          <label for="region-select">Choose a region:</label>

            <select name="region" id="region-select" value={this.state.selectValue} onChange={this.handleChange}>
                <option value="">--Please choose an option--</option>
                <option value="kanto">Kanto</option>
                <option value="johto">Johto</option>
                <option value="hoenn">Hoenn</option>
                <option value="sinnoh">Sinnoh</option>
                <option value="unova">Unova</option>
                <option value="galar">Galar</option>
            </select>
        <p>{message}</p>
      </div>
        )
    }
}