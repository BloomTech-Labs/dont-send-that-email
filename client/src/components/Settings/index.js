import React from "react";
import { Container, Col } from "reactstrap";
import "./settings.css";

const Settings = (props) => {
  console.log(props.user);
  if (!props.user.subscribed) {
    return (
      <div>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.emailaddress}</p>
        <p>Tier: Free</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.emailaddress}</p>
        <p>Tier: Paid</p>
      </div>
    );
  }
};

export default Settings;
