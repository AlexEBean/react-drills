import React,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foodList: ["waffles", "pancakes", "ice cream", "sushi"]
    }
  }

  render () {
    let foodsDisplay =this.state.foodList.map((element, index) => {
      return <h2 key = {index}> {element} </h2>
    })

    return <div className = "App"> {foodsDisplay} </div>
  }
}

export default App;
