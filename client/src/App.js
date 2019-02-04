import React, { Component } from "react";

import axios from "axios";
import "./App.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Navigation/Sidebar";
import MainContent from "./components/MainContent";
import LandingPage from "./components/LandingPage";
import { Container } from "reactstrap";
import "typeface-montserrat";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faIgloo,
  faPlusCircle,
  faCopy,
  faTrash,
  faHome,
  faUser,
  faSignOutAlt,
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faIgloo,
  faPlusCircle,
  faCopy,
  faTrash,
  faHome,
  faUser,
  faSignOutAlt,
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
  faAt,
  fab
);

class App extends Component {
  state = {
    user: null
  };

  updateUser = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/auth/profile", {
        withCredentials: true
      })
      .then(response => {
        const { user, err } = response.data;
        if (user) {
          this.setState({ user }, () => console.log(this.state.user));
        } else {
          console.log(err);
        }
      });
  };

  handleClick = e => {
    this.setState({ testLogin: false });
  };

  componentDidMount() {
    this.updateUser();
  }

  render() {
    if (this.state.user) {
      return (
        <Container fluid>
          <Navigation user={this.state.user} class="navbar-transparent" />
          <Sidebar />
          <MainContent user={this.state.user} />
        </Container>
      );
    }
    return (
      <div>
        <LandingPage handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
