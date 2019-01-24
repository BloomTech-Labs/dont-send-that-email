import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from '../Navigation/Sidebar';
import { CardColumns, Col, Container, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Document from './Document';
import BreadCrumb from '../BreadCrumb';
import '../../index.css';

class DocumentList extends Component {
  state = {
    emails: [],
    user: this.props.user,
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
    <button onClick={() => this.redirectToCreateEmailPage()}>
      Create Email
    </button>
  );
  redirectToCreateEmailPage = () => {
    if (this.state.user.subscriber === true || this.state.emails.length < 100) {
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
      .then((res) => this.fetchEmails())
      .catch((err) => console.log(err));
  };
  copyEmail = ({ title, addressee }) => (e) => {
    if (this.state.user.subscriber === true || this.state.emails.length < 100) {
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
    return (
      <Container>
        <BreadCrumb crumbs={[{ name: 'Home' }]} />
        <h6>Hello! {this.state.user.username}</h6>
        {this.state.componentState === 1 ? (
          <div className="alert alert-info alert-with-icon">
            <div className="alert-wrapper">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <i className="nc-icon nc-simple-remove" />
              </button>
              <div className="message">
                Free users can only have 100 emails in their dashboard, please
                clean up any unnecessary emails.
              </div>
            </div>
          </div>
        ) : null}
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
export default withRouter(DocumentList);
