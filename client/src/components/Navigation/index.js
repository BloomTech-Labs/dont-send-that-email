import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/">Emails</Link> <br/>
            <Link to="/billing">Billing</Link> <br/>
            <Link to="Settings">Settings</Link>
        </div>
    );
};

export default Navigation;