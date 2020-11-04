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
              {this.state.filters
                .map(filter => (<h1>{filter.name}</h1>))}
            </div>
        )  
    }
    isRegionDisabled() {
        return this.state.filters
            .map(filter => filter.name)
            .includes("region")
    }
    isTypeDisabled() {
        return this.state.filters
            .map(filter => filter.name)
            .filter(filterName => filterName === "type")
            .length >= 2
    }
    handleChange = event => {        
        event.preventDefault()
        const options = Array.apply(null, event.target.options)
        const selected = options.filter(option => option.selected)
        if (selected.length === 0) {
            return
        }
        console.log("value:" + selected[0].value)

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
                    <option value="" defaultValue>Add filter</option>
                    <option value="region" disabled={this.isRegionDisabled()}>Region</option>
                    <option value="type" disabled={this.isTypeDisabled()}>Type</option>
                </select>
                {this.createFilter()}
                <div className="hidden"><RegionFilter></RegionFilter></div>
            </div>
        )
    }
}