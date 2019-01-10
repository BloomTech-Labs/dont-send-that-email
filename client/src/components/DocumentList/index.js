import React, { Component } from 'react';

export default class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.handleAddDocument = this.handleAddDocument.bind(this);
        this.state = {
            hasDocument: false,
        }
    }

    componentDidMount() {
        // bring data from back-end
    }

    handleAddDocument() {
        this.setState({ hasDocument: true })
    }

    render() {
        const hasDocument = this.state.hasDocument;

        if(hasDocument === false) {
            return(
                <div>
                    <button onClick={this.handleAddDocument}>Add Document</button>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <p>Title</p>
                    <p>To: </p>
                    <p>Body</p>
                    <div>
                        <span>Updated</span>
                        <button>Copy</button>
                    </div>
                </div>
            </div>
        )
    }
}