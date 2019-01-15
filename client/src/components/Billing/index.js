import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class Settings extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='documents'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Billing</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <h1>Billing</h1>
            <form>
                <input type="text" name="credit card" />
                <input type="text" name="expiration date" />
                <input type="text" name="CVV" />
            </form>

        </div>
        )
    }
}

export default Settings;