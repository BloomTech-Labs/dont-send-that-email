import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from '../src/components/LandingPage';
import WatsonDummy from '../src/components/TempWatsonPage'
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        <WatsonDummy />

      </div>
    );
  }
}

export default App;
