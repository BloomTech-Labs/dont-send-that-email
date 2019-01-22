import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
import '../../index.css';
import Checkout from './Checkout';


class Billing extends Component {
    render() {
        return (
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
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
            </form>
            <Checkout
                name={'One Month'}
                description={"One Month subscription of Don't send that email"}
                amount={5}
            />
            <Checkout 
              name={'One Year'}
              description={"One year subscription of Don't send that email"}
              amount={50}
            />
        </div>
        )
    }
}

export default Billing;