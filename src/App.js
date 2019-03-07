import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
          <p>
           <Timer start={Date.now()}/>

          </p>
          
      </div>
    );
  }
}

export default App;
