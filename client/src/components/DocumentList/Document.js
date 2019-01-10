import React, { Component } from 'react';

export default class Document extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>Title</p>
                <p>To: </p>
                <p>Body</p>
                <div>
                    <span>Updated</span>
                    <button>Copy</button>
                </div>
            </div>
        );
    }
}