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
          <BreadCrumb crumbs={[{ name: "Profile" }]} user={props.user} />
        </Col>
      </Row>
      <Settings user={props.user} />
      <Billing />
    </Container>
  );
};
export default Profile;
