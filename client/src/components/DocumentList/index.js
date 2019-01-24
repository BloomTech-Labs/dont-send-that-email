import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Navigation/Sidebar';
import { CardColumns, Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Document from './Document';
import BreadCrumb from '../BreadCrumb';
import '../../index.css';

export default class DocumentList extends Component {
  state = {
    emails: [],
    user: this.props.user,
  };

  componentDidMount = async () => {
    this.fetchEmails();
  };

  fetchEmails = () => {
    axios
      .get(process.env.REACT_APP_EMAILS_URL, { withCredentials: true })
      .then(({ data }) => {
        const { emails, err } = data;
        if (emails) {
          this.setState({ emails }, () => console.log(this.state.emails));
        }
        if (err) {
          console.log(err);
        }
      });
  };

  emailElements = () =>
    this.state.emails.map((e, i) => (
      <Document
        key={i}
        email={e}
        copy={this.copyEmail(e)}
        delete={() => this.deleteEmail(e)}
      />
    ));

  emailCreateButton = () => (
    <Link to="/email">
      <button>Create Email</button>
    </Link>
  );
  deleteEmail = (e) => {
    axios
      .delete(`${process.env.REACT_APP_EMAILS_URL}${e.id}`, {
        withCredentials: true,
      })
      .then((res) => this.fetchEmails())
      .catch((err) => console.log(err));
  };
  copyEmail = ({ title, addressee }) => (e) => {
    const body = { email: { title, addressee } };
    console.log(body);
    axios
      .post(process.env.REACT_APP_EMAILS_URL, body, { withCredentials: true })
      .then(({ data }) => {
        if (data.id) {
          this.fetchEmails();
        } else {
          console.log('Email copy operation failed.', data.err);
        }
      });
  };

  render() {
    return (
      <Container>
        <BreadCrumb crumbs={[{ name: 'Home' }]} />
        <h6>Hello! {this.state.user.username}</h6>
        <Row>
          <Col sm="3">
            <Sidebar />
          </Col>
          <Col>
            <CardColumns>{this.emailElements()}</CardColumns>
            {this.emailCreateButton()}
          </Col>
        </Row>
      </Container>
    );
  }
}
