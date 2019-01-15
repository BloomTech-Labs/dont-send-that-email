import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from '../src/components/LandingPage';
import NewEmail from '../src/components/emailcreate';

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage/>
        < NewEmail />
      </div>
    );
  }
}

export default App;
