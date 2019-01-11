import React, { Component } from 'react';

export default class AddDocument extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button onClick={this.props.addDocument}>Add Document</button>
            </div>
        );
    }
}