import React, { Component } from 'react';

import axios from 'axios';
import './App.css';
import MainContent from './components/MainContent';
import LandingPage from './components/LandingPage';
import 'typeface-montserrat';



class App extends Component {
  state = {
    user: null,
  }

  updateUser = () => {
    axios.get(process.env.REACT_APP_PROFILE_URL, { withCredentials: true })
      .then(response => {
        const { user, err } = response.data;
        if (user) {
          this.setState({ user });
        } else {
          console.log(err);
        }
      });
  }

  handleClick = e => {
    this.setState({ testLogin: false });
  }

  componentDidMount() {
    this.updateUser();
  }

  render() {

    if (this.state.user) {
      return (
        <div>
          <MainContent 
            user={this.state.user}
          />
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
