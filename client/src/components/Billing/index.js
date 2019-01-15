import React, { Component } from 'react';

class Billing extends Component {
    render() {
        return (
        <div>
            <h1>Billing</h1>
            <form>
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