import React, { Component } from 'react';

class AddToDo extends Component {
    constructor () {
      super ()
  
        this.state = {
          toDoInput: ""
         }
    }
  
    handleChange = (event) => {
      this.setState({
        toDoInput: event.target.value
      })
    }

    addToDo = () => {
      this.props.add(this.state.toDoInput)
    }

    render () {
      // console.log(this.state.toDoInput)
      return (
        <div>
            <input type="text" onChange = {event => this.handleChange(event)} value = {this.state.toDoInput} />
            <button onClick = {this.addToDo}>
              Add
            </button>
        </div>
      )
    }
  
}


export default AddToDo