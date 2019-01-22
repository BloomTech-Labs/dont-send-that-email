import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
import '../../index.css';


const Settings = () => {
    return(
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Settings</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="bodyContent">
                <Sidebar />
                <Form>
                    <FormGroup row>
                        <Label sm={3}>Name</Label>
                        <Col sm={5}>
                            <Input />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Old Password</Label>
                        <Col sm={5}>
                            <Input />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>New Password</Label>
                        <Col sm={5}>
                            <Input />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button>Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default Settings;