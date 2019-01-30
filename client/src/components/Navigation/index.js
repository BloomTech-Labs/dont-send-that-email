import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav
 } from "reactstrap";
import Sidebar from "./Sidebar";
import "./index.css";

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
            <NavbarBrand href="/" >Don't Send That Email!</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink disabled href="#"><p>Hello! {this.props.user.username}</p></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}