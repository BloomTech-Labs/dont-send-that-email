import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Settings from '../Settings';
import DocumentList from '../DocumentList';
import Billing from '../Billing';
import Sidebar from '../Navigation/Sidebar';


class MainContent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
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
        )
    }
}

export default withRouter(MainContent);