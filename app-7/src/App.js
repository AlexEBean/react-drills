import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./Components/List"
import NewTask from "./Components/NewTask"

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: []
    }
    
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render(){
    return (
      <div className = "App">
        <h1> My to-do list: </h1>
        <NewTask add = {this.handleAddTask}/>
        <List toDoList = {this.state.list}/>
      </div>
    )
  }

}

export default App;
