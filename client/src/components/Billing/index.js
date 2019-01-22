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
                    <BreadcrumbItem><Link to='documents'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Billing</BreadcrumbItem>
                    <button>Sign Out</button>
                </Breadcrumb>
            </div>
            <h1>Billing</h1>
            {/* <form className="bodyContent">
                <Sidebar />
                <input type="text" name="credit card" />
                <input type="text" name="expiration date" />
                <input type="text" name="CVV" />
                <input type="radio" name="subscription" value="oneyear"/>
                <input type="radio" name="subscription" value="1month" />
            </form> */}
            <div className="row">
                <div className="col-md-6">
                    <h2>Free</h2>
                    <ul>
                        <li><s>Unlimited text analyze</s></li>
                        <li>Unlimited Emails</li>
                        <li>Sentence by sentence analysis</li>
                    </ul>
                    <Checkout
                    name={'One Month'}
                    description={"One Month subscription of Don't send that email"}
                    amount={5}
            />
                </div>
                <div className="col-md-6">
                    <h2>Paid</h2>
                    <ul>
                        <li>Unlimited text analyze</li>
                        <li>Unlimited Emails</li>
                        <li>Sentence by sentence analysis</li>
                    </ul>
                    <Checkout 
                    name={'One Year'}
                    description={"One year subscription of Don't send that email"}
                    amount={50}
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default Billing;