import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://www.demilked.com/magazine/wp-content/uploads/2015/10/webcomic-heart-vs-brain-nick-seluk-fb1.jpg"} />
      </div>
    );
  }
}

export default App;
