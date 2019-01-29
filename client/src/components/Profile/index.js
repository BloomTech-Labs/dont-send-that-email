import React from "react";
import Settings from "../Settings";
import Billing from "../Billing";

const Profile = (props) => {
  return (
    <div>
      <Settings user={props.user} />
      <Billing />
    </div>
  );
};
export default Profile;
