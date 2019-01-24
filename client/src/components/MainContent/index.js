
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Settings from '../Settings';
import DocumentList from '../DocumentList';
import Billing from '../Billing';
import NewEmail from '../emailcreate';


class MainContent extends Component {

    render() {
        return(
            <Switch>
                <Route exact path='/' name='Home' render={props => (
                    <DocumentList 
                        user={this.props.user}
                    />
                )}
                />
                <Route exact path='/email' component={NewEmail} />
                <Route exact path='/email/:id' component={NewEmail} />
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

