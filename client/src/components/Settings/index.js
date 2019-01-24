import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../Navigation/Sidebar';
// import '../../index.css';
import './settings.css';


const Settings = () => {
    return(
        <div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Settings</BreadcrumbItem>
                </Breadcrumb>
            </div>
            {/* <div className="bodyContent">
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
        </div> */}

{/* //Using reactstrap left original form code above */}

            <Container className="Setting">
            <Sidebar />
            <Form className="form">
            <Col>
                <FormGroup>
                <Label>Email</Label>
                <Input
                    type="Name"
                    name="name"
                    placeholder="UserName"
                />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                    type="password"
                    name="Password"
                    placeholder="********"
                />
                </FormGroup>
            </Col>
            <Button>Submit</Button>
            </Form>
            </Container>
        </div>
    );
}

export default Settings;