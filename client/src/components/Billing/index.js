import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import "../../index.css";
import Checkout from "./Checkout";

class Billing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="billing-component">
        <Row>
          <Col xs={12} className="border rounded mb-4 pl-3 pt-3">
            <h3>Free user privileges:</h3>
            <ul>
              <li>100 email analyses per 30 days</li>
              <li>Storage for 5 emails in home page</li>
            </ul>
          </Col>
          <Col xs={12} className="border rounded pl-3 pt-3">
            <h3>Paid user privileges:</h3>
            <ul>
              <li>Unlimited email analyses</li>
              <li>Storage for unlimited emails in home page</li>
              <li>Can send emails through our email service provider</li>
            </ul>
            {!this.props.user.subscribed ? (
              <Checkout
                name={"30 Days"}
                description={"30 Days subscription of Don't send that email"}
                amount={10}
              />
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Billing;
