import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../Navigation/Sidebar";
import "../../index.css";
import Checkout from "./Checkout";

class Billing extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Sidebar />
          <Col className="border rounded">
            <h2>Free users are limited to:</h2>
            <ul>
              <li>100 email analyses per month</li>
              <li>Storage for 5 emails in home page</li>
              <li>Cannot send emails through our email service provider</li>
            </ul>
          </Col>
          <Col className="border rounded">
            <h2>Paid users have access to:</h2>
            <ul>
              <li>Unlimited email analyses</li>
              <li>Storage for unlimited emails in home page</li>
              <li>Can send emails through our email service provider</li>
            </ul>
            <Checkout
              name={"One month"}
              description={"One month subscription of Don't send that email"}
              amount={5}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Billing;
