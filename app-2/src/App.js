import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  } 
  render() {
    let foodDisplay = this.state.foods.map((el, index) => {
      return <h2 key = {index} >{el}</h2>
    })
    return <div className = "App">{foodDisplay}</div>
  }
}

export default App;
