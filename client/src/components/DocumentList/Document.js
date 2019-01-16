import React, { Component } from 'react';

export default class Document extends Component {
    render() {
        const { title, addressee } = this.props.email;
        return(
            <div className="email-card">
                <h1>{title}</h1>
                <h2>{addressee}</h2>
                <div>
                    <button onClick={this.props.copy}>Copy</button>
                </div>
            </div>
        );
    }
}