import React, { Component } from "react";
import { Link } from "react-router-dom";
import { pushRotate as Menu } from "react-burger-menu";
import "./sideBar.css";

export default class Sidebar extends Component {
  logoutUrl = process.env.REACT_APP_BACKEND_URL + "/auth/logout";
  render() {
    return (
      <div className="sideBar">
        <Menu pageWrapId={"page-wrap"}>
          <Link to="/" className="btn btn-secondary">
            Home
          </Link>
          <Link to="/billing" className="btn btn-secondary">
            Billing
          </Link>
          <Link to="settings" className="btn btn-secondary">
            Settings
          </Link>
          <a className="btn btn-secondary" href={this.logoutUrl}>
            Sign Out
          </a>
        </Menu>
      </div>
    );
  }
}
