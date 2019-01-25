import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Navigation/Sidebar';
import { CardColumns, Col, Container, Row, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Document from './Document';
import BreadCrumb from '../BreadCrumb';
import '../../index.css';

class DocumentList extends Component {
  state = {
    emails: [],
    componentState: 0,
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
    <Button color="info" onClick={() => this.redirectToCreateEmailPage()}>
      Create Email
    </Button>
  );
  redirectToCreateEmailPage = () => {
    if (this.props.user.subscribed === true || this.state.emails.length < 5) {
      console.log(this.props.user.subscribed);
      this.props.history.push('/email');
    } else {
      this.setState({ componentState: 1 });
    }
  };
  deleteEmail = (e) => {
    axios
      .delete(`${process.env.REACT_APP_EMAILS_URL}${e.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (this.state.componentState === 1) {
          this.setState({ componentState: 0 }, () => this.fetchEmails());
        } else {
          this.fetchEmails();
        }
      })
      .catch((err) => console.log(err));
  };
  copyEmail = ({ title, addressee }) => (e) => {
    if (this.props.user.subscribed === true || this.state.emails.length < 5) {
      console.log(this.props.user.subscribed);
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
    } else {
      this.setState({ componentState: 1 });
    }
  };

  render() {
    if (this.state.emails.length === 0) {
      return (
        <Container-fluid>
          <Container>
            <BreadCrumb crumbs={[{ name: 'Home' }]} user={this.props.user} />
            <h6>Hello! {this.props.user.username}</h6>
            <Row>
              <Col sm="3">
                <Sidebar />
              </Col>
              <Col>{this.emailCreateButton()}</Col>
            </Row>
          </Container>
        </Container-fluid>
      );
    }
    return (
      <Container fluid>
        <BreadCrumb crumbs={[{ name: 'Home' }]} />
        <h6>Hello! {this.props.user.username}</h6>
        {this.state.componentState === 1 ? (
          <div class="alert alert-info" role="alert">
            Free users can only have 100 emails in their dashboard, please clean
            up any unnecessary emails.
          </div>
        ) : null}
        <Row>
          <Sidebar />
          <Col>
            <CardColumns>{this.emailElements()}</CardColumns>
          </Col>
          <Col>{this.emailCreateButton()}</Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(DocumentList);
