import React from "react";
import { Col, Container, Row, Badge, Card, CardBody, CardHeader } from "reactstrap";
import "./settings.css";
import moment from "moment-timezone";

const dateFormat = date => {
    return moment(date).calendar();
};
const Settings = props => {
    return (
        <Container className="settings-component">
            <Row>
                <Col xs={12}>
                    <Card className="no-transition">
                        <CardHeader>User Info</CardHeader>
                        <CardBody>
                            <p>
                                <span className="user-info-left">
                                    <Badge>Username</Badge>
                                </span>
                                <span className="user-info-right">{props.user.username}</span>
                            </p>
                            <p>
                                <span className="user-info-left">
                                    <Badge>Tier</Badge>
                                </span>
                                <span className="user-info-right">{props.user.subscribed ? "Paid" : "Free"}</span>
                            </p>
                            {props.user.subscribed ? (
                                <p>
                                    <span className="user-info-left">
                                        <Badge>Expiration</Badge>
                                    </span>
                                    <span className="user-info-right">
                                        {" " + dateFormat(props.user.subscriptionEnd)}
                                    </span>
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
