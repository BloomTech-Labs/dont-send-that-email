import React from "react";
import { Col, Container, Row } from "reactstrap";
import Settings from "../Settings";
import Billing from "../Billing";
import Sidebar from "../Navigation/Sidebar";
import BreadCrumb from "../BreadCrumb";
import Navigation from "../Navigation";

const Profile = (props) => {
  return (
    <Container>
        <Row>
          <Col xs={12}>
            <BreadCrumb crumbs={[{ name: "Profile" }]} user={props.user} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Settings user={props.user} />
          </Col>
          <Col xs={12} sm={6}>
            <Billing user={props.user} />
          </Col>
        </Row>
    </Container>
  );
};
export default Profile;
