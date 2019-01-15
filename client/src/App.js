import React, { Component } from 'react';
import './App.css';
import LandingPage from '../src/components/LandingPage';
import Navigation from '../src/components/Navigation';
import MainContent from '../src/components/MainContent';

class App extends Component {
  render() {
    if (true) {
      return <LandingPage/>
    }
    return (
      <div>



        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default App;
