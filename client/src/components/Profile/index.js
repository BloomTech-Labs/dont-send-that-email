import React from "react";
import { Col, Container, Row } from "reactstrap";
import Settings from "../Settings";
import Billing from "../Billing";
import Sidebar from "../Navigation/Sidebar";
import BreadCrumb from "../BreadCrumb";

const Profile = (props) => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col xs={12}>
          <BreadCrumb
            crumbs={[{ name: "Home", path: "/" }, { name: "Profile" }]}
            user={props.user}
          />
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
