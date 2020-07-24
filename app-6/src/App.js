import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"

class App extends Component {
  constructor () {
    super()
  
    this.state = {
      list: [],
      input: ""
    }

    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleInput(val) {
    this.setState ({
      input: val
    })
  }

  handleAddTask() {
    this.setState ({
      list: [...this.state.list, this.state.input],
      
    })
  }

  render() {
    let list = this.state.list.map((el, index) => {
      return <Todo key={index} task={el} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>

          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInput(e.target.value)}
          />

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        {list}
      </div>
    );
  }

}


export default App;
