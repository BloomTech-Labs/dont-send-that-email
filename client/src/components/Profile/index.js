import React from "react";
import Settings from "../Settings";
import Billing from "../Billing";
import Sidebar from "../Navigation/Sidebar";

const Profile = (props) => {
  return (
    <div>
      <Sidebar />
      <Settings user={props.user} />
      <Billing />
    </div>
  );
};
export default Profile;
