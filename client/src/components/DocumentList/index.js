import React, { Component } from 'react';
import Document from './Document';
import AddDocument from './AddDocument';


export default class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.AddDocument = this.AddDocument.bind(this);
        this.state = {
            hasDocument: false,
        }
    }

    componentDidMount() {
        // bring data from back-end
    }

    AddDocument() {
        this.setState({ hasDocument: true })
    }

    render() {
        const hasDocument = this.state.hasDocument;

        if(hasDocument === false) {
            return(
                <div>
                    <button onClick={this.AddDocument}>Create a Document</button>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <Document />
                    <AddDocument />
                </div>
            </div>
        )
    }
}