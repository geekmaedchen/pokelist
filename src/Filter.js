import React, {Component} from 'react'
import RegionFilter from './RegionFilter'

export default class Filter extends Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            selectValue: '',
            filters: [] 
        }
    }
    createFilter() {
        return (
            <div>
              {this.state.filters.map(filter => (<h1>{filter.name}</h1>))}
            </div>
        )  
    }
    isRegionDisabled() {
        return this.state.filters.map(filter => filter.name).includes("region")
    }
    handleChange = event => {        
        event.preventDefault()
        
        if (event.target.options[1].selected === true) {
            const newState = {
                ...this.state,
                filters: [
                    ...this.state.filters,
                    {name: "region", region: null}
                ]
            }
            this.setState(newState)
            console.log("new state", newState)
        }
        else if (event.target.options[2].selected === true) {
            const newState = {
                ...this.state,
                filters: [
                    ...this.state.filters,
                    {name: "type", type: null}
                ]
            }
            this.setState(newState)
            console.log("new state", newState)
        }
    } 

    render() {
        return(
            <div>
                <label htmlFor="filter">Filter?</label>
                <select onChange={this.handleChange}>
                    <option disabled selected>Add filter</option>
                    <option disabled={this.isRegionDisabled()}>Region</option>
                    <option>Type</option>
                </select>
                {this.createFilter()}
                <div className="hidden"><RegionFilter></RegionFilter></div>
            </div>
        )
    }
}