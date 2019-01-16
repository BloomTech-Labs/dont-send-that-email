import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import LandingPage from './components/LandingPage';
import NewEmail from '../src/components/emailcreate';

class App extends Component {
  state = {
    user: null,
    testLogin: false // Fred: Just for testing locally
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

  handleClick = e => {
    this.setState({ testLogin: true });
  }

  componentDidMount() {
    this.updateUser();
  }

  render() {
    if (this.state.user || this.state.testLogin) {
      return (
        <div>
          <MainContent />
        </div>
      )
    }
    return (
      <div>
        <LandingPage
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
