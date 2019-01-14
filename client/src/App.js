import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import LandingPage from './components/LandingPage';

class App extends Component {
  state = {
    user: null
  }

  updateUser = () => {
    axios.get(process.env.REACT_APP_PROFILE_URL, { withCredentials: true })
      .then(response => {
        const { user, err } = response.data;
        if (user) {
          this.setState({ user });
        }
      });
  }

  componentDidMount() {
    this.updateUser();
  }

  render() {
    if (this.state.user) {
      return (
        <div>
          Logged in!
        </div>
      )
    }
    return (
      <div>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
