import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


const Settings = () => {
    return(
        <div>
            <div>
            <Breadcrumb>
                <BreadcrumbItem><Link to='documents'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Settings</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <Form>
                <FormGroup row>
                    <Label sm={1}>Name</Label>
                    <Col sm={3}>
                        <Input />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={1}>Old Password</Label>
                    <Col sm={3}>
                        <Input />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={1}>New Password</Label>
                    <Col sm={3}>
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
    );
}

export default Settings;