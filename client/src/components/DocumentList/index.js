import React, { Component } from 'react';
import Sidebar from '../Navigation/Sidebar';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../index.css';

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
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem active>Home</BreadcrumbItem>
                            <button>Sign Out</button>
                        </Breadcrumb>
                    </div>
                    <div className="bodyContent">
                        <Sidebar />
                        <Link to="/email">
                            <button onClick={this.createDocument}>
                                Create a Document
                            </button>
                        </Link>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                        <button>Sign Out</button>
                    </Breadcrumb>
                </div>
                <div className="bodyContent">
                    <Sidebar />
                    {/* Documents Here */}
                </div>
            </div>
        )
    }
}