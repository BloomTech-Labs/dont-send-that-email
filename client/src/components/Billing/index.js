import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (
        <div>
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