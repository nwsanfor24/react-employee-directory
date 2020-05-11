import React, { Component } from 'react'

class FilterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      employeeFilter: e.target.value
    })
    this.props.onChange(event.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">Filter by Employee Name: </label>
        <input type="text" id="filter" 
          value={this.state.employeeFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default FilterForm;