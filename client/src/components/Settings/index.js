import React from "react";
import {
  Col,
  Container,
  Row,
  Badge,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
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
        <Col xs={12}>
          <Card style={{ transition: null }}>
            <CardHeader>User Info</CardHeader>
            <CardBody>
              <p>
                <Badge>Username</Badge> {props.user.username}
              </p>
              <p>
                <Badge>Email</Badge> {props.user.emailaddress}
              </p>
              <p>
                <Badge>Tier</Badge>
                {props.user.subscribed ? " paid" : " free"}
              </p>
              {props.user.subscribed ? (
                <p>
                  <Badge>Subscription End Date</Badge>
                  {" " + dateFormat(props.user.subscriptionEnd)}
                </p>
              ) : null}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
