import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Emails</Link> <br />
      <Link to="/profile">Profile</Link> <br />
    </div>
  );
};

export default Navigation;
