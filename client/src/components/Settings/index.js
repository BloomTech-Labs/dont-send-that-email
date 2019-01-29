import React from "react";
import { Container, Col } from "reactstrap";
import "./settings.css";

const dateFormat = (dateString) => {
  let formattedDateString = dateString.slice(0, 10);
  return formattedDateString;
};
const Settings = (props) => {
  console.log(props.user);
  if (!props.user.subscribed) {
    return (
      <div>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.emailaddress}</p>
        <p>Tier: free</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Username: {props.user.username}</p>
        <p>Email: {props.user.emailaddress}</p>
        <p>Tier: subscribed</p>
        <p>Subscription End Date: {dateFormat(props.user.subscriptionEnd)}</p>
      </div>
    );
  }
};

export default Settings;
