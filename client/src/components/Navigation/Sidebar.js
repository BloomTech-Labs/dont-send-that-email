import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pushRotate as Menu } from "react-burger-menu";
import "./sideBar.css";

export default class Sidebar extends Component {
  logoutUrl = process.env.REACT_APP_BACKEND_URL + "/auth/logout";
  render() {
    return (
      <Menu right pageWrapId={"page-wrap"}>
        <Link to="/">
          <Button color="danger">
            <FontAwesomeIcon icon="home" />
            <span>Home</span>
          </Button>
        </Link>
        <Link to="/profile">
          <Button color="danger">
            <FontAwesomeIcon icon="user" />
            <span>Profile</span>
          </Button>
        </Link>
        <a href={this.logoutUrl}>
          <Button color="danger">
            <FontAwesomeIcon icon="sign-out-alt" />
            <span>Sign Out</span>
          </Button>
        </a>
      </Menu>
    );
  }
}
