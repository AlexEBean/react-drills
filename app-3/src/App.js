import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    
    this.state = {
      unfilteredString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  
  }

  handleChange(filter) {
    this.setState({unfilteredString: filter})
  }

  render() {
    let foodDisplay = this.state.foods
      .filter((el) => {
        return el.includes(this.state.unfilteredString)
      })
      .map((el, index) => {
        return <h2 key = {index} >{el}</h2>
      })
      
    return <div className = "App"> {foodDisplay}
      <input onChange = {e => this.handleChange(e.target.value)} type = "text"/>
    </div>
  }
  
}

export default App;
