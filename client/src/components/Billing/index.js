import React, { Component } from "react";
import { Col, Container, Row, Card, CardBody, CardHeader } from "reactstrap";
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
          <Col xs={12}>
            <Card className="no-transition">
              <CardHeader>Free User Privileges</CardHeader>
              <CardBody>
                <ul>
                  <li>100 email analyses per 30 days</li>
                  <li>Storage for 5 emails in home page</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card className="no-transition">
              <CardHeader>Paid User Privileges</CardHeader>
              <CardBody>
                <ul>
                  <li>Unlimited email analyses</li>
                  <li>Storage for unlimited emails in home page</li>
                  <li>Can send emails through our email service provider</li>
                </ul>
                {!this.props.user.subscribed ? (
                  <Checkout
                    name={"30 Days"}
                    description={
                      "30 Days subscription of Don't send that email"
                    }
                    amount={10}
                  />
                ) : null}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Billing;
