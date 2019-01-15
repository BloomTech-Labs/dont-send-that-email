import React, { Component } from 'react';
import Document from './Document';
import AddDocument from './AddDocument';
import Sidebar from '../Navigation/Sidebar';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.createDocument = this.createDocument.bind(this);
        this.addDocument = this.addDocument.bind(this);
        this.state = {
            hasDocument: false,
        }
    }

    componentDidMount() {
        // bring data from back-end
    }

    createDocument = e => {
        this.setState({ hasDocument: true })
    }

    addDocument = e => {
        console.log("Document Added.")
    }

    render() {
        const hasDocument = this.state.hasDocument;

        if(hasDocument === false) {
            return(
                <div>
                    <button onClick={this.createDocument}>Create a Document</button>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    <Document />
                    <AddDocument 
                        addDocument={this.addDocument}
                    />
                </div>
            </div>
        )
    }
}