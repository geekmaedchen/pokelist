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
        // Variant A
        return this.state.filters.length === 1
        // Variant B
        // return this.state.filters.length === 1 ? true : false
        // Variant C
        // if (this.state.filters.length === 1) {
        //     return true
        // } else {
        //     return false
        // }
    }
    handleChange = event => {        
        event.preventDefault()
        
        if (event.target.options[1].selected === true) {
            const newState = {
                ...this.state,
                filters: [
                    ...this.state.filters,
                    {name: "region"}
                ]
            }
            this.setState(newState)
            // event.target.options[1].setAttribute("selected", false)
            // event.target.options[0].setAttribute("selected", true)
            // console.log("new state", newState)
        }
    } 

    render() {
        return(
            <div>
                <label htmlFor="filter">Filter?</label>
                <select onChange={this.handleChange}>
                    <option disabled selected>Add filter</option>
                    <option disabled={this.isRegionDisabled()}>Region</option>
                </select>
                {this.createFilter()}
                <div className="hidden"><RegionFilter></RegionFilter></div>
            </div>
        )
    }
}