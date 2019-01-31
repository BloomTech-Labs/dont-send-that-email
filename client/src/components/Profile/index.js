import React from "react";
import { Col, Container, Row } from "reactstrap";
import Settings from "../Settings";
import Billing from "../Billing";
import "./index.css";

const Profile = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Settings user={props.user} />
        </Col>
        <Col xs={12} md={6}>
          <Billing user={props.user} />
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
