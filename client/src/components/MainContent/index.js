import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Settings from '../Settings';
import DocumentList from '../DocumentList';
import Billing from '../Billing';
import Sidebar from '../Navigation/Sidebar';
import './mainContent.css'


class MainContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <div className="topContent">
                    <span>Breadcrumbs Placeholder</span>
                    <button>Sign Out</button>
                </div>
                <div className="bodyContent">
                    <Sidebar />
                    <Switch>
                    <Route exact path='/documents' name='Home' render={props => (
                        <DocumentList />
                    )}
                    />
                    <Route exact path='/billing' name='Billing' render={props => (
                        <Billing />
                    )}  
                    />
                    <Route exact path='/settings' name='Settings' render={props => (
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