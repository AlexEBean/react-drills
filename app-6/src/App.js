import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from "./Todo"

class App extends Component {
  constructor() {
    super() 
    this.state = {
      list: [],
      input: ""
    }
    this.handleAdd = this.handleAdd.bind(this)
  }


  handleInputChange(val) {
    this.setState({ input: val})
  }

  handleAdd() {
    const {list, input} = this.state
    this.setState({
      list: [...list, input],
      input: ""
    })
  }

  render () {

    const updatedList = this.state.list.map((e, i) => {
      return <Todo key = {i} task = {e} />
    })

    return (
      <div className = "App">
        <h1>My to-do-list</h1>
        <input 
          placeholder = "Enter new task"
          value = {this.state.input}
          onChange = {e => this.handleInputChange(e.target.value)}/>
          <button onClick = {this.handleAdd} >Add</button>

          <br/>

          {updatedList}
      </div>
    )
  }

}

export default App;
