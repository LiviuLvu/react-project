import React, { Component } from 'react';
import { AppClock } from './App.Clock';
import { AppLoginControl } from './App.LoginControl';
import AppList from './App.List';
import MultipleInputs from './App.MultipleInputs';
import AppTemperatureConvert from './App.TemperatureConvert';
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
        <AppList />
        <MultipleInputs />
        <hr/>
        <AppTemperatureConvert />
      </div>
    );
  }
}

export default App;
