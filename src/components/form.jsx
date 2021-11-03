import React,  { Component } from "react";

export class Form extends Component {
  state = {
        name:"",
        calories: 0, 
        image:""
  }

  handleChange = (evt) => {
    const target = evt.target.id 
    const value = evt.target.value
    console.log(value)
    this.setState({
      [target]: value
    })
  }

  render() {
      return (
        <div>

          <h3>Add new food</h3>

          <div className="form">
            <label htmlFor="name">Name: 
            <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label htmlFor="calories">Calories: 
            <input type="text" id="calories" value={this.state.calories} onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label htmlFor="image">Image: 
            <input type="text" id="image" value={this.state.image} onChange={this.handleChange} />
            </label>
          </div>
          <button onClick={() => this.props.handleAdd(this.state)}>Add</button>

        </div>
  )
}
}

export default Form
