import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Settings from '../Settings';
import DocumentList from '../DocumentList';
import Billing from '../Billing';
import Sidebar from '../Navigation/Sidebar';
import './mainContent.css'


class MainContent extends Component {
    render() {
        return(
            <div>
                <div className="topContent">
                    <span>BreadCrumbs Placeholder</span>
                    <button>Sign Out</button>
                </div>
                <div className="bodyContent">
                    <Sidebar />
                    <Switch>
                    <Route exact path='/documents' render={props => (
                        <DocumentList />
                    )}
                    />
                    <Route exact path='/billing' render={props => (
                        <Billing />
                    )}  
                    />
                    <Route exact path='/settings' render={props => (
                        <Settings />
                    )}
                    />
                </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(MainContent);