import React, { Component } from 'react';
import './App.css';
import AddToDo from "./Components/AddToDo"
import MasterList from "./Components/MasterList"

class App extends Component {
  constructor () {
    super ()

      this.state = {
        masterToDoList: []
      }

      this.add = this.add.bind(this)
 }

  add(newToDo) {
    const updatedList = [...this.state.masterToDoList]
    updatedList.push(newToDo)
    this.setState({
      masterToDoList: updatedList
    })
  }

    render () {
      return (
        <div>
          <h1>My to-do list: </h1>
          <AddToDo add = {this.add} />
          <MasterList toDoList = {this.state.masterToDoList}/>
        </div>
      )
    }

}



export default App;
