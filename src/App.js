import React, { Component } from 'react';
import { AppClock } from './App.Clock';
import { AppLoginControl } from './App.LoginControl';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <header className="App-header col-lg-12">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AppClock />
        <AppLoginControl />
      </div>
    );
  }
}

export default App;
