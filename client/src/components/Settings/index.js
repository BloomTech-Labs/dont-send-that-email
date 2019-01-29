import React from "react";
import { Container, Col, Row } from "reactstrap";
import "../../index.css";

const dateFormat = (dateString) => {
  let formattedDateString = dateString.slice(0, 10);
  return formattedDateString;
};
const Settings = (props) => {
  console.log(props.user);
  return (
    <Container className="settings-component">
      <Row>
        <Col className="border rounded pl-3 pt-3 mb-4">
          <p>Username: {props.user.username}</p>
          <p>Email: {props.user.emailaddress}</p>
          <p>{props.user.subscribed ? "Tier: paid" : "Tier: free"}</p>
          {props.user.subscribed ? (
            <p>
              Subscription End Date: {dateFormat(props.user.subscriptionEnd)}
            </p>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
