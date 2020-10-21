import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios"

class App extends Component {
  constructor(){
    super()

    this.state = {
      darthVader: ""
    }
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/4/").then(response => {
      this.setState({
        darthVader: response.data
      })
    })
  }

  render(){
    const {name, birth_year, height, eye_color} = this.state.darthVader
    return(
      <div className = "App">
        <h1>Name: {name}</h1>
        <h1>Birth Year: {birth_year}</h1>
        <h1>Height: {height}</h1>
        <h1>Eye Color: {eye_color}</h1>
      </div>
    )
  }

}

export default App;
