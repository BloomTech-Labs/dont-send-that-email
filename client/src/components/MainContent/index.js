import React from "react";
import { Switch, Route } from "react-router-dom";
import Billing from "../Billing";

const MainContent = () => {
    return (
    <div>
        <Switch>
            {/* <Route exact path="/" component={EmailList} /> */}
            <Route path="/billing" component={Billing} />
 
        </Switch>
    </div>
    )
};

export default MainContent;