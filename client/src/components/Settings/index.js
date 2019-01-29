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
          <p><b>Username:</b> {props.user.username}</p>
          <p><b>Email:</b> {props.user.emailaddress}</p>
          {props.user.subscribed ? <p><b>Tier:</b> Paid</p> : <p><b>Tier:</b> Free</p>}
          {props.user.subscribed ? (
            <p>
              <b>Subscription End Date:</b> {dateFormat(props.user.subscriptionEnd)}
            </p>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
