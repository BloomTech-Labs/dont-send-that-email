import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Settings = () => {
    return(
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
    );
}

export default Settings;