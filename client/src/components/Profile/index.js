import React from "react";
import Settings from "../Settings";
import Billing from "../Billing";
import Sidebar from "../Navigation/Sidebar";
import BreadCrumb from "../BreadCrumb";

const Profile = (props) => {
  return (
    <div>
      <Sidebar />
      <BreadCrumb crumbs={[{ name: "Profile" }]} user={props.user} />
      <Settings user={props.user} />
      <Billing />
    </div>
  );
};
export default Profile;
