import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
import '../../index.css';


class Billing extends Component {
    render() {
        return (
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='documents'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Billing</BreadcrumbItem>
                    <button>Sign Out</button>
                </Breadcrumb>
            </div>
            <h1>Billing</h1>
            <form className="bodyContent">
                <Sidebar />
                <input type="text" name="credit card" />
                <input type="text" name="expiration date" />
                <input type="text" name="CVV" />
                <input type="radio" name="subscription" value="oneyear"/>
                <input type="radio" name="subscription" value="1month" />
                <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default Billing;