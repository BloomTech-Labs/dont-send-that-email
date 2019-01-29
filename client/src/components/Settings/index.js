import React from "react";
import { Container, Col } from "reactstrap";
import "./settings.css";

const dateFormat = (dateString) => {
  let formattedDateString = dateString.slice(0, 10);
  return formattedDateString;
};
const Settings = (props) => {
  console.log(props.user);
  return (
    <div>
      <p>Username: {props.user.username}</p>
      <p>Email: {props.user.emailaddress}</p>
      <p>{props.user.subscribed ? "Tier: paid" : "Tier: free"}</p>
      {props.user.subscribed ? (
        <p>Subscription End Date: {dateFormat(props.user.subscriptionEnd)}</p>
      ) : null}
    </div>
  );
};

export default Settings;
