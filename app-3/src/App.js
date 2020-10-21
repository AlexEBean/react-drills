import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super ()

    this.state = {
      foodList: ["waffles", "pancakes", "ice cream", "sushi"],
      filteredFood: ""
    }
  }

  handleChange(value) {
    this.setState( {filteredFood: value})
  }

  render () {
    let foodsDisplay =this.state.foodList
      .filter(e => e.includes(this.state.filteredFood))
      .map((e, index) => <h2 key = {index}> {e} </h2>)
    return (
      < div className = "App">
        <input onChange = { e => this.handleChange(e.target.value) } type="text" />
        {foodsDisplay}
      </div>
    )
  }
}

export default App;
