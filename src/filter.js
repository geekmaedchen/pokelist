import React, {Component} from 'react'
import regions from './regions.json'

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
    const selected = this.state.selectValue
    return (
      <div>
          <label htmlFor="region-select">Choose a region:</label>
            <select name="region" id="region-select" value={selected} onChange={this.handleChange}>
                <option value="">--Please choose an option--</option>
                {regions.allRegions.map(region => (
                    <option key={region} value={region}>{regions[region].name}</option>
                ))}
            </select>
            <p>{selected ? "You selected " + regions[selected].name : ""}</p>
      </div>
        )
    }
}