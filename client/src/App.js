import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from '../src/components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <LandingPage/>


        </header>
      </div>
    );
  }
}

export default App;
