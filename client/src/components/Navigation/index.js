import React from "react";
import {
  Navbar,
  NavbarBrand,
 } from "reactstrap";
import Sidebar from "./Sidebar";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Sidebar />
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Don't Send That Email!</NavbarBrand>
          <h6 className="greetings">Hello! {this.props.user.username}</h6>
        </Navbar>
      </div>
    );
  }
}